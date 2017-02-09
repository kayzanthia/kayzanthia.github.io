$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if (direction=="down"){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
         
        }
    },{
  offset: '60px;'
});   
            
  
    $('.js--scroll-to-plans').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    
    
    
    
   $('.js--scroll-to-features').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
/*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/

 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
  /*animations-fade in etc*/
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    }, {
        offset:'50%'
    });
    
    
  /*mobile navigation*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
 var map = new GMaps({
  div: '.map',
  lat: 38.8169752,
  lng: -76.6,
  zoom: 12
      
      
});
    
map.addMarker({
  lat: 38.8169752,
  lng: -76.7637002,
  title: 'Marlboro',
  infoWindow: {
  content: '<p>MD HQ</p>'
}
  
});
    
        });
    
    
    
    