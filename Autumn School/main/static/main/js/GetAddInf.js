function ImgFilter(tune, im1, im2) {
    const turners = document.querySelectorAll(".products__navi_panel__item");
    const images = document.querySelectorAll(".products__imgs__item");

    for (let i of turners) {
        i.classList.remove("products__navi_panel__item-act");
        i.classList.add("products__navi_panel__item-pass");
    }
    document.querySelector(tune).classList.replace("products__navi_panel__item-pass", "products__navi_panel__item-act");

    

    for (let j of images) {
        j.classList.remove("products__imgs-act");
        j.classList.add("products__imgs-pass");
    }


    if (im1 == '') {
        for (let j of images) {
            j.classList.replace("products__imgs-pass", "products__imgs-act");
        }

    } else {
        document.querySelector(im1).classList.replace("products__imgs-pass", "products__imgs-act");
        document.querySelector(im2).classList.replace("products__imgs-pass", "products__imgs-act");

    }
    
    
}


function CountPrice() {
    const block = document.querySelector(".price__description_calc-pass");
   
    block.classList.add("price__description_calc");
    block.classList.remove("price__description_calc-pass");
}


function AddInf(one, two) {
    const turner = document.querySelector(one);
    const block = document.querySelector(two);
   
    if (block.classList.contains("open_faq_elems")) {

        block.classList.remove("open_faq_elems");
        block.classList.add("close_faq_elems");

        turner.classList.remove("btn_faq_rotate");
        turner.classList.add("btn_faq_unrotate");
    } else {

        block.classList.remove("close_faq_elems");
        block.classList.add("open_faq_elems");

        turner.classList.remove("btn_faq_unrotate");
        turner.classList.add("btn_faq_rotate");
    }
}
