var header = $(".header_section");
console.log(header);
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$(document).ready(function () {
  var header = $(".header"); // 修改這裡
  console.log("header length:", header.length); // 測試是否選到元素

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      header.addClass("header_scrolled"); // 滾動時變色
    } else {
      header.removeClass("header_scrolled"); // 滑回頂部時變回白色
    }
  });
});

$(document).ready(function () {
  var header = $(".header");
  var logo = $(".logo img"); // 選取 LOGO 圖片

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      header.addClass("header_scrolled");
      logo.attr("src", "assets/img/logo-white.svg"); // 替換 LOGO 圖片
    } else {
      header.removeClass("header_scrolled");
      logo.attr("src", "assets/img/logo-blue.svg"); // 恢復原本 LOGO
    }
  });
});