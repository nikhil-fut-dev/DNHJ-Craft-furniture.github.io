// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuIcon = document.querySelector(".icons span:last-child");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});
