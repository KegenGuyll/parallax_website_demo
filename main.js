
function section2() {
    document.getElementById('section2').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

function section1() {
    document.getElementById('section1').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

function section3() {
    document.getElementById('section3').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  function home() {
    document.getElementById('home').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  var width = screen.width;
  var height = screen.height;

  if (width <= 568){
    console.log("mobile")
    $(document).ready(function(){
      $("div").removeClass("row");
});
  }
  else{
    console.log("web");
    $(document).ready(function(){
      $("#row").addClass("row");
    })
  }

  