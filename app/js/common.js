document.addEventListener('DOMContentLoaded', () => {

    // Custom JS

    // preloader
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);


})


$(function() {

    // Custom jQ

    //js for carousel
    $('.owl-carousel__list-items').owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // owl carousel for prof-affil__items
    $('.prof-affil__items').owlCarousel({
        loop: false,
        margin: 60,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            400: {
                items: 2,
                margin: 20,
            },
            500: {
                items: 3,
                margin: 20,
            },
            600: {
                items: 4,
                margin: 30,
            },
            900: {
                items: 6,
                margin: 30,
            },
            1000: {
                items: 6,
                margin: 60,
            }
        }
    })


    //js for show success block
    let $btn = $('.send-btn');
    $btn.on('click', function() {
        let thisForm = $(this).parents('.modal-form-content'),
            thisModal = $(this).parents('.modal'),
            thisContainerSuccess = thisModal.find('.modal-success-content');

        thisForm.addClass('d-none');
        thisContainerSuccess.removeClass('d-none');
    })



});
