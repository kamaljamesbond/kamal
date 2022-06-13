//Banner Slider
$('.home-banner').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    autoplay:true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>",
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


//Deal Box Slider Slider  
  $('.deal-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    autoplay:true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>",
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//Store Slider
  $('.store-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    autoplay:true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right' aria-hidden='true'></i></button>",
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });




  //Back to Top Button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Offer Share Onlick Function
$(document).ready(function(){
  $("#hide").click(function(){
    $(".offer-share").removeClass('active')
  });
  $("#show").click(function(){
    $(".offer-share").addClass('active')
  });
});



// navbar and responsive search box
$(document).ready(function(){
  
  $(".showSrch").click(function(e) {
    $(".mob-srch-transition").toggleClass('active')
});

$(".showHideMainNav").click(function(e) {
    $(".slide-nav").toggleClass('active')
});
  
});



//Copy Affiliate Link

function affLink() {
  var copyText = document.getElementById("copyAffLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("affLinkCopied");
  tooltip.innerHTML = "Copied:" //+ copyText.value;
}

function outAffLink() {
  var tooltip = document.getElementById("affLinkCopied");
  tooltip.innerHTML = "Copy to clipboard";
}

