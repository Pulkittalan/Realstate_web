function stickyHeader() {
    if ($(".menubar").length) {
        var HeaderPos = 10;
        if ($(window).scrollTop() > HeaderPos) {
            $(".menubar").addClass("stricky-fixed")
        } else {
            if ($(this).scrollTop() <= HeaderPos) {
                $(".menubar").removeClass("stricky-fixed");
            }
        }
    }
}
jQuery(window).on("scroll", function () {
    (function (HeaderPos) {
        stickyHeader()
    })(jQuery)
});


if ($(".navigation").length) {
    $(".navigation .navbar button").on("click", function () {
        $(".navigation .menu").slideToggle();
        $(this).toggleClass('open');
        return false;
    });
    $(".navigation .cs-submenu").children("a").append(function () {
        return '<button class="dropdown-expander"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></button>';
    });

}

if (document.documentElement.clientWidth < 1023) {
    $(".navigation .menu .dropdown-expander").on("click", function () {
        $(this).parent().parent().children(".cs-dropdown").slideToggle();
        console.log($(this).parents("li"));
        console.log($(this).parents().children(".dropdown-expander").toggleClass("rotated"));
        return false
    })
    $(document).click(function (e) {
        if (!$(e.target).closest('.navigation .navbar button').length) {
            $('.navigation .menu').stop(true).slideUp();
            $(".navigation .navbar button").removeClass('open');

        }
    });
}



document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".navbar button");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("active"); // Toggle active class on menu
            menuButton.classList.toggle("open"); // Toggle button state
        });
    }
});

var testimonials = $("#testimonials");
testimonials.owlCarousel({
    loop: true,
    margin: 0,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: false,
    dots: true,
    items: 1,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1024: {
            items: 1
        },
        1100: {
            items: 1
        }
    }
});
var ourProducts = $("#ourlocations");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 3
        },
        1024: {
            items: 3
        },
        1100: {
            items: 3
        }
    }
});
var ourProducts = $("#ourplan");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 2,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        },
        1100: {
            items: 2
        }
    }
});
var ourProducts = $("#ourprojects");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 4
        },
        1024: {
            items: 4
        },
        1100: {
            items: 4
        }
    }
});

var ourProducts = $("#ourteam");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 1
        },
        1024: {
            items: 1
        },
        1100: {
            items: 1
        }
    }
});

var ourProducts = $("#ourteam_index");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 4
        },
        1024: {
            items: 5
        },
        1100: {
            items: 5
        }
    }
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();

var ourProducts = $("#HappyClients");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        },
        1100: {
            items: 2
        }
    }
});


var ourProducts = $("#owlbrand");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        },
        1100: {
            items: 2
        }
    }
});

var ourProducts = $("#ourbrand");
ourProducts.owlCarousel({
    loop: true,
    margin: 20,
    navSpeed: 500,
    nav: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'],
    autoplay: true,
    dots: true,
    items: 4,
    responsiveClass: true,
    autoplayTimeout: 900,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2,
        },
        768: {
            items: 4
        },
        1024: {
            items: 6
        },
        1100: {
            items: 8
        }
    }
});

$(window).on('load', function () {
    var delayMs = 2000;
    setTimeout(function () {
        $('#onload_Modal').modal('show');
    }, delayMs);
});

var testimonal = new Swiper(".testimonal-slide", {
    paginationClickable: true,
    loop: true,
    spaceBetween: 10,
    speed: 7000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
// counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 4, -50);
    counter("count2", 1, 4000, 4000);
    counter("count3", 0, 43, 43);
     counter("count4", 1, 7000, 7000);
   });
   
//    Counter end
/* testimonial Slider JS */
if ($('.testimonial-slider').length) {
    const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-button-next',
            prevEl: '.testimonial-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            }
        }
    });
}


