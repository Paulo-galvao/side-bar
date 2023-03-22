const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideBar = document.querySelector(".side-bar");

menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("open-side-bar");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("open-side-bar");
});