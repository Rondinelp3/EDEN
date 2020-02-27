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
 
/*lazyload*/
  $(function() {
        $('.lazy').Lazy({
             effect: 'fadeIn',
        });
    });
           
/*color del nav cuando el scroll baja*/


function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

let valor = 0;
if (isMobile()) {
	valor = 150;
}else{
	valor = 550;
}

 $(window).scroll(function () {
    if ($("#header_contenedor").offset().top > valor) {

    	console.log('llego al scroll');

    	 $("#header_contenedor").removeClass("colorPrimario");
       	 $("#header_contenedor").addClass("colorSecundario");

        } else {

            $("#header_contenedor").removeClass("colorSecundario");
            $("#header_contenedor").addClass("colorPrimario");
 
        }
    
});
 