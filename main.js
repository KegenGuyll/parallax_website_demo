
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

  const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;   
}

//Type Method
TypeWriter.prototype.type = function(){
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // check if deleting

    if(this.isDeleting){
        //Remove char
        this.txt = fullTxt.substring(0,this.txt.length - 1);
        
    }
    else{
        //Add char
        this.txt = fullTxt.substring(0,this.txt.length + 1);
        
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
    // Initial Type Speed
    let typeSpeed = 300

    if(this.isDeleting){
        typeSpeed /=2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt ===''){
        this.isDeleting = false;
        // move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 300;
    }

    console.log(typeSpeed);

    setTimeout(() => this.type(),typeSpeed);
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init Typerwirter
    new TypeWriter (txtElement, words, wait);
}