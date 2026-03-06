const hamburger_menu = document.querySelector(".hamburger-menu");
const hamburger_icon = document.querySelector(".hamburger");
const mobile_sidebar = document.querySelector(".mobile-sidebar");

hamburger_menu.addEventListener("click", () => {
  hamburger_icon.classList.toggle("active");
  mobile_sidebar.classList.toggle("active");
});

const login_btn = document.querySelector(".login-btn");
login_btn.addEventListener("click", () => {
  alert("logged in");
});
