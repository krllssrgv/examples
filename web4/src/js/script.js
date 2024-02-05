function mainMenu() {
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".menu__overlay").classList.add("menu__overlay-active");
    document.querySelector(".menu__container").classList.add("menu__container-active");
}

function closeMenu() {
    document.querySelector(".menu__container").classList.remove("menu__container-active");
    document.querySelector(".menu__container").style.left = "-100%";
    document.querySelector(".menu").style.display = "none";
}

const counters = document.querySelectorAll(".percent");
const line = document.querySelectorAll(".skills__skillLine div");

counters.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
})