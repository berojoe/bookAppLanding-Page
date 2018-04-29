jQuery(document).ready(function() {
    jQuery('.headline, .cards, .offer, .google').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 100
       });
    jQuery('#discount img, .apple').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
       });
    jQuery('#discount img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
       });

});

/* Init spinner
  document.querySelector(".main p").style.display = "none";
      document.querySelector(".main").classList.add("spinner-1");

      setTimeout(function(){
        document.querySelector(".main").classList.remove("spinner-1");
        document.querySelector(".main p").style.display = "block";
      }, 2000)
*/
