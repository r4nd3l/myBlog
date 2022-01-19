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

// Scroll to Top
const goToTop = () => window.scrollTo(0, 0);
goToTop();

// Search and count by string
function WordCount(str) {
  return str.split(" ").length;
}
console.log(WordCount("hello world world"));