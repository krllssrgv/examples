window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.menu_btn_mobile');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu_btn_mobile_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu_btn_mobile_active');
            menu.classList.toggle('menu_active');
        })
    })
})
