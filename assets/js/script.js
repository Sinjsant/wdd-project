$(document).ready(function()  {
  $("#bread").hide().delay(3000).fadeIn(2000);

  new TypeIt('#lgtb', {
    speed: 50
  })
  .type("Wake up, hustlers.")
  .pause(1500)
  .break()
  .options({speed: 120})
  .type("Let's get this bread.");

  $(document).on('click', function(event) {
    if (!$(event.target).closest('#navmodal').length && !$(event.target).is($("#navbar-right button"))) {
      $('#section1overlay').hide();
    }
  });

  $("#carousel").slick({
    arrows: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "40px",
      autoplaySpeed: 5000,
      dots: true,
      draggable: false,
      fade: false,
      infinite: true,
      initialSlide: 0,
      mobileFirst: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      rtl: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]

  })

  $("#register").on('click', function() {
    openmodal();
    $("#navmodal").html("\
      Sign up for an account\
      <form>\
      Username: <input type='text'><br>\
      Password: <input type='text'><br>\
      Confirm password: <input type='text'><br>\
      </form>\
      ");
  })

  $("#login").on('click', function() {
    openmodal();
    $("#navmodal").html("\
      Log in to an existing account\
      <form>\
      Username: <input type='text'><br>\
      Password: <input type='text'><br>\
      </form>\
      ");
  })

  $("#contact").on('click', function() {
    openmodal();
    $("#navmodal").html("\
      Questions, comments, or concerns?\
      <form>\
      Your email: <input type='text'><br>\
      Message: <br><textarea rows='5' cols='45'></textarea>\
      </form>\
      ");
  })


})


function openmodal() {
    $("#section1overlay").fadeIn();
}

