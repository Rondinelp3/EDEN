/*tooltipped*/
$(document).ready(function(){
    $('.tooltipped').tooltip();
  });

/*sidenav*/
$(document).ready(function () {
        $('.sidenav').sidenav();
    });
/*slider*/
 $(document).ready(function () {
        $('.slider').slider({
                
            height : 1000, // default - height : 400
            interval: 8000, // default - interval: 6000
             
        });
    });
/*parallax*/
 $(document).ready(function(){
    $('.parallax').parallax();
  });
        
 
/*lazyload*/
  $(function() {
        $('.lazy').Lazy({
             effect: 'fadeIn',
        });
    });
           



 