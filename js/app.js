(function main(){
 

// ####### Native browser smooth scrolling with jQuery              #######
// ####### https://css-tricks.com/snippets/jquery/smooth-scrolling  #######

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// ####### END SMOOTH SCROLLING #######


// ####### FUNCTION IMAGE RANDOM #######
//  document.getElementById('imageAleatoire').style.backgroundImage = "url(img/background/image" + Math.round(Math.random()*11+1) +".jpg)"; 
// ####### END FUNCTION IMAGE RANDOM #######


//#######  STARTS change BACKGROUND with season #######/////


//https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
var month = new Date().getMonth();
var season = 'spring';
var months = month+2;

if (month>=13) {
  month = 1;
}

switch (month){
  //december, january, february 
  case 1:
  case 2:
  case 3:
    season = "winter";
    break;

  //june, july, august
  case 7:
  case 8:
  case 9:
    season = "summer";
    break; 

  //september, october, november
  case 10:
  case 11:
  case 12:
    season = "autumn";
    break;        
}

document.body.style.backgroundImage = "url(img/background/"+ season + "/img_" + Math.round(Math.random()*3+1) + ".jpg)";

 
})();
