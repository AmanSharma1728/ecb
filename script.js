const hamburger_menu = document.querySelector(".hamburger-menu");
const hamburger_icon = document.querySelector(".hamburger");
const mobile_sidebar = document.querySelector(".mobile-sidebar");

hamburger_menu.addEventListener("click", () => {
  hamburger_icon.classList.toggle("active");
  mobile_sidebar.classList.toggle("active");
});

const li_array = document.querySelectorAll(".topic");
const expand_array = document.querySelectorAll(".expand");

for (let i = 0; i < li_array.length; i += 1) {
  li_array[i].addEventListener("click", () => {
    li_array[i].classList.toggle("inactive");
    expand_array[i].classList.toggle("active");
  });
}

const option_array = document.querySelectorAll(".sidebar-option");
const expanded_sidebar_array = document.querySelectorAll(".expanded-sidebar");
for (let i = 0; i < option_array.length; i += 1) {
  option_array[i].addEventListener("mouseover", () => {
    expanded_sidebar_array[i].classList.toggle("active");
  });

  option_array[i].addEventListener("mouseout", () => {
    expanded_sidebar_array[i].classList.toggle("active");
  });
}
