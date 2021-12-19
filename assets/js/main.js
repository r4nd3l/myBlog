// SideBarMenu
const sidebar = document.querySelector("#sidebarMenu");
const main = document.querySelector(".mainBlur");
const footer = document.querySelector(".footerBlur");

btns = document.getElementsByClassName("sidebarBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      sidebar.classList.toggle("-translate-x-full");
      main.classList.toggle("blur-s");
      footer.classList.toggle("blur-s");
    });
}

// Current year
document.getElementById("year").innerHTML = new Date().getFullYear();

// tooltip preview at portfolio section
function tooltip(){
  let spanText = document.querySelectorAll('#tooltip');
  window.onmousemove = function(e){
    let x = e.clientX,
    y = e.clientY;

    for (i = 0; i < spanText.length; i++) {
      spanText[i].style.top = (y + 20) + 'px';
      spanText[i].style.left = (x + 20) + 'px';
    }
  }
}

// Script for the filter gallery
const buttons = document.querySelector("#buttons").children;
const items = document.querySelector(".items").children;

for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click",function(){

    for(let j=0; j<buttons.length; j++){
      buttons[j].classList.remove("active")
    }
    this.classList.add("active")
    const target=this.getAttribute("data-target");

    for(let k=0; k<items.length; k++){
      items[k].style.display="none";

      if(items[k].getAttribute("data-id")==target){
        items[k].style.display="block";
      }
      if(target=="all"){
        items[k].style.display="block";
      }
    }
  })
}

// GitHub Repos
let categoryAll = []
let categoryJS = []
let categoryCss = []
let categoryThemes = []
let categoryGames = []
let categoryCMS = []
let categoryPhp = []
let categoryTool = []

let gitId
let reposPerCall
let client_id
let client_secret

let proSet
let viewType = "list"
let currentCateg = []

function gitCallSettings() {
  return new Promise((resolve, reject) => {
    fetch('https://r4nd3l.github.io/DevCornerPortfolio/settings.json')
      .then(response => {
        return response.json().then(data => {

          gitId = data.gitFetch.gitId
          reposPerCall = data.gitFetch.fetchPerPage
          client_id = data.gitFetch.clientId
          client_secret = data.gitFetch.clientsecret
          proSet = data.profileSettings

          personalContent();
          // console.log(proSet)

          getGithubRepositories(progressCallback)
            .then(repos => {
              categoryAll = repos
              repos.forEach(repo => {
                if (repo.description.includes("[Js]")) {
                  categoryJS.push(repo)
                }
                if (repo.description.includes("[Css]")) {
                  categoryCss.push(repo)
                }
                if (repo.description.includes("[CMS]")) {
                  categoryCMS.push(repo)
                }
                if (repo.description.includes("[Theme]")) {
                  categoryThemes.push(repo)
                }
                if (repo.description.includes("[Game]")) {
                  categoryGames.push(repo)
                }
                if (repo.description.includes("[Php]")) {
                  categoryPhp.push(repo)
                }
                if (repo.description.includes("[Tool]")) {
                  categoryTool.push(repo)
                }
              })
            })

        }).catch(reject)
      }).catch(reject)
  });
}

gitCallSettings()

function getGithubRepositories(progress, url = `https://api.github.com/users/${gitId}/repos?page=1&per_page=${reposPerCall}&client_id=${client_id}&client_secret=${client_secret}`, repos = [], pageCount = 1) {
  return new Promise((resolve, reject) => fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw `${response.status}: ${response.statusText}`;
      }
      response.json().then(data => {
        repos = repos.concat(data);

        if (data.length === reposPerCall) {
          pageCount++;
          url = `https://api.github.com/users/${gitId}/repos?page=${pageCount}&per_page=${reposPerCall}&client_id=${client_id}&client_secret=${client_secret} `
          progress && progress(repos);
          getGithubRepositories(progress, url, repos, pageCount).then(resolve).catch(reject)
        } else {
          resolve(repos);
        }
      }).catch(reject);
    }).catch(reject));
}

function progressCallback(repos) { buildRepoList(repos) }

function buildRepoList(categoryArray) {
  newContent = ""

  if (viewType == "grid") {
    // GRID STYLE
    categoryArray.forEach(item => {
      newContent +=`
        <div class="col-lg-3 col-md-4 col-sm-4">
          <div class="card">
            <img src="https://raw.githubusercontent.com/r4nd3l/${item.name}/master/img/${item.name}.png" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h6 class="card-title">${item.name}</h6>
              <p class="card-text">${item.description}</p><hr>
              <div class="card-link">
                <a href="https://r4nd3l.github.io/${item.name}/" target="_blank"><span title="Live preview"><i class="fas fa-glasses"></i></span></a>
                <a href="${item.html_url}" target="_blank"><span title="GitHub repo"><i class="fas fa-external-link-alt"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      `})
  }
  else {
    // LIST STYLE
    categoryArray.forEach(item => {
      newContent +=`
        <div class="box" data-id="all">
          <div class="inner preview">
            ${item.name}
            <small>${item.description}</small>
            <span id="tooltip"><img src="https://raw.githubusercontent.com/r4nd3l/${item.name}/master/img/${item.name}.png" alt="${item.name}"></span>
          </div>
          <div class="outer">
            <a href="${item.html_url}" target="_blank"><span title="GitHub repo"><i class="fas fa-external-link-alt"></i></span></a>
            <a href="https://r4nd3l.github.io/${item.name}/" target="_blank"><span title="Live preview"><i class="fas fa-glasses"></i></span></a>
            <!-- <span title="blank"><i class="far fa-eye"></i></span> -->
          </div>
        </div>
      `})
  }
  currentCateg = categoryArray
  document.getElementById("items").innerHTML = newContent;
  // called from tooltip func
  tooltip();
}

document.querySelector("[data-target='all']").addEventListener("click", () => { buildRepoList(categoryAll) });
document.querySelector("[data-target='Js']").addEventListener("click", () => { buildRepoList(categoryJS) });
document.querySelector("[data-target='Css']").addEventListener("click", () => { buildRepoList(categoryCss) });
document.querySelector("[data-target='CMS']").addEventListener("click", () => { buildRepoList(categoryCMS) });
document.querySelector("[data-target='Theme']").addEventListener("click", () => { buildRepoList(categoryThemes) });
document.querySelector("[data-target='Game']").addEventListener("click", () => { buildRepoList(categoryGames) });
document.querySelector("[data-target='Php']").addEventListener("click", () => { buildRepoList(categoryPhp) });
document.querySelector("[data-target='Tool']").addEventListener("click", () => { buildRepoList(categoryTool) });

// Change grid view to list view at portfolio section
var grid_btn = document.getElementById('grid_btn');
var list_btn = document.getElementById('list_btn');
var grid_items = document.getElementById('items');

grid_btn.addEventListener("click", viewFlex);
function viewFlex() {
  viewType = "grid"
  buildRepoList(currentCateg)
  grid_items.style.cssText = `
    display: flex;
    width: 101.25%;
  `
  list_btn.classList.remove("active");
  grid_btn.classList.add("active");
  grid_items.style.animation = "fadeIn 1s";
}

list_btn.addEventListener("click", viewList);
function viewList() {
  viewType = "list"
  buildRepoList(currentCateg)
  grid_items.style.cssText = `
    display: grid;
    width: 100%;
  `
  grid_btn.classList.remove("active");
  list_btn.classList.add("active");
  grid_items.style.animation = "fadeIn 1s";
}

// add and remove grid/list view
grid_btn.onmouseover = function () { mouseOver() };
list_btn.onmouseout = function () { mouseOut() };

function mouseOver() {
  grid_items.style.animation = "none";
}
function mouseOut() {
  grid_items.style.animation = "none";
}
