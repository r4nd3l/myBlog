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

// Copy-Paste codeHeader
const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;

  copyCodeButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(code);
    copyCodeButton.classList.add('copied');

    setTimeout(() => {
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});