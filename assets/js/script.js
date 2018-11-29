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
    if (!$(event.target).closest('#navmodal').length && !$(event.target).is($("button"))) {
      $('#section1overlay').hide();
    }
  });

  $("#section2 #content").css("display", "none");
  
  var waypoint = new Waypoint({
    element: $("#section2"),
    handler: function() {
      console.log("success"),
      $("#section2 #content")
      .slideDown('slow')
      .animate(
        { opacity: 1 },
        { queue: false, duration: 'slow' }
      );
      this.destroy()
    }
  })

  $("#carousel").slick({
    arrows: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "40px",
      autoplaySpeed: 3000,
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

  $("#joinus").on('click', function() {
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


})


function openmodal() {
    $("#section1overlay").fadeIn();
}

