$(document).ready(function(){
    $('.slider__content').slick({
        speed: 800,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/Left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/Right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  dots: true,
                }
            },
        ]
    });

    function validate(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Введите имя",
                phone: "Введите номер телефона",
                email: "Введите ваш E-Mail"
            }
        });
    };

    validate('#consultation .consult__form-form');
    validate('#consult .modal__form-form');
    validate('#order .modal__form-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            document.querySelector(".pageup").style.display = 'flex';
        } else {
            document.querySelector(".pageup").style.display = 'none';
        }
    })
});


$('.product__more').each(function(i) {
    $(this).click(function() {
        $('.product__info').eq(i).toggleClass('product__info-active');
    });
});

$('.product__close').each(function(i) {
    $(this).click(function() {
        $('.product__info').eq(i).toggleClass('product__info-active');
    });
});



function shopContent(content, btn) {
    const all = document.querySelectorAll(".shop__content");
    for(let i = 0; i < all.length; i++){
        all[i].classList.remove("shop__content-active");
    }
    document.querySelector(content).classList.add("shop__content-active");

    const btns = document.querySelectorAll(".shop__tab");
    for(let j = 0; j < btns.length; j++){
        btns[j].classList.remove("shop__tab-active");
    }
    document.querySelector(btn).classList.add("shop__tab-active");
}


$('[data-modal=consult]').on('click', function() {
    $('.overlay, #consult').fadeIn('slow');
});

$('.modal__close img').on('click', function() {
    $('.overlay, .modal').fadeOut('slow');
});


$('.product__button').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.product__name').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});

