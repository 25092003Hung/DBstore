(function ($) {
    "use strict";

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);


document.getElementById('svh').onclick = function () {
    document.getElementById('map').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460488001304!2d106.66518151402403!3d10.77599986215008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbcdcd0f9c5%3A0x74a6ef113e58e72a!2sHUFLIT%20Protocol%20Team!5e0!3m2!1svi!2s!4v1668655747661!5m2!1svi!2s';
}
document.getElementById('hm').onclick = function () {
    document.querySelector('#map').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2928073474004!2d106.59838101402464!3d10.865319560519527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b088de30f3b%3A0xd2140740d360f705!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIG5n4buvIC0gVGluIGjhu41jIFRQLiBIQ00gKEhVRkxJVCkgLSBDxqEgc-G7nyBIw7NjIE3DtG4!5e0!3m2!1svi!2s!4v1668656874570!5m2!1svi!2s';
}
document.getElementById('ct').onclick = function () {
    document.querySelector('#map').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4729619306495!2d106.67064521415641!3d10.775041741228288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f5ca2dbe97d%3A0xddc55b26530d7da2!2zVHLGsOG7nW5nIGh1ZmxpdA!5e0!3m2!1svi!2s!4v1668657091416!5m2!1svi!2s';
}
document.getElementById('ts').onclick = function () {
    document.querySelector('#map').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3805777556245!2d106.66066541402398!3d10.78213576203847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecfbc6dba67%3A0x29b53d19c74ec371!2zS2hvYSBEdSBs4buLY2ggLSBLaMOhY2ggc-G6oW4sIFRyxrDhu51uZyDEkOG6oWkgaOG7jWMgTmdv4bqhaSBuZ-G7ryAtIFRpbiBo4buNYyBUUC4gSENNIChIVUZMSVQp!5e0!3m2!1svi!2s!4v1668657170029!5m2!1svi!2s';
}