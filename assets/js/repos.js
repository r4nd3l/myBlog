// GitHub repos
let pages = 3
for (let i=1; i < pages; i++) {
  fetch(`https://api.github.com/users/r4nd3l/repos?page=${i}&per_page=100`, {headers: {'Accept' : 'application/vnd.github.v3+json'}})
  .then(response => response.json()).then(data => {
    console.log(data);
    const root = document.querySelector('#repos');
    data.forEach((item) => {
      // console.log(`${item.name}`);
      root.innerHTML += `
        <div class="mb-4 bg-gray-50 rounded-lg border border-solid border-gray-100 hover:border-gray-300">
          <a href="${item.html_url}" target="_blank">
            <div class="p-4">
              <div class="grid lg:flex md:justify-between">
                <h2 class="text-2xl font-medium truncate" title="${item.name}">${item.name}</h2>
                <small class="text-gray-400 flex items-baseline"><i class="far fa-calendar-check mr-1 text-teal"></i><p class="repo-date">${item.created_at}</p></small>
              </div>
              <div class="grid xl:flex justify-between">
                <p class="truncate-2-line md:truncate-1-line h-full pr-4 xl:pr-16">${item.description}</p>
                <span class="flex flex-wrap xl:flex-nowrap items-end mt-2 xl:mt-0">
                  <small class="flex whitespace-nowrap text-gray-400 mr-4 xl:mr-0 xl:ml-4"><small>Mainly</small><i class="fas fa-hashtag py-0.5 text-teal ml-2"></i>${item.language}</small>
                </span>
              </div>
            </div>
          </a>
        </div>
      `
    })
  }).catch(error => console.error(error));
}

// For later use - images in grid view 
// https://raw.githubusercontent.com/r4nd3l/BouncingBallPreLoader/master/img/BouncingBallPreLoader.png