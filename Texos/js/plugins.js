/* global $, window */

$(function () {
    
    "use strict";
    
    //adjust slider height
    
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight(),
        uppnavH = $('.upper-nav').innerHeight();
    
    $('.carousel-inner').height(winH - (navH + uppnavH + 5));


    //change theme color

    $('.mode-choice').click(function () {
        
        $('.page-color').attr("href", $(this).attr('data-value'));
        
    });

});