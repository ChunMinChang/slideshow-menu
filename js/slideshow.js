
/*
 * slideshow jquery example
 *
 * This file contains serveral functions of jquery slideshow
 *
 * Author 	: Chun-Min Chang
 *
 * Contact	: tangent7787@gmail.com
 *
 * Copyright @ All Rights Reserved
 */

var menuClass;
var contentClass;
var menuHoverClass;
var menuActiveClass;
var defaultSlide = 0;
var currentSlide = defaultSlide;
var slideWidth = 0;


function initSlide(slideMenuClass,slideContentClass,slideMenuHoverCSS,slideMenuActiveCSS){
	
	//Class setting
	menuClass = slideMenuClass;
	contentClass = slideContentClass;
	menuHoverClass = slideMenuHoverCSS;
	menuActiveClass = slideMenuActiveCSS;
	
	//Initualize slide content width
	slideWidth = $('.'+contentClass).width();
	
	//Open default slide content
	$('.'+contentClass).eq(defaultSlide).css("display", "block");
	
	//Set the click/hover function of slide menu
	$('.'+menuClass).click(showSlide);
	$('.'+menuClass).hover(hoverMenu,hoverMenuOut);
	
}

function hoverMenu()
{
	if( currentSlide==$('li.'+menuClass).index(this) ){
		//Do nothing
		return;
	}
	
	//Add hover css to the current hover
	$(this).addClass(menuHoverClass);
}

function hoverMenuOut()
{
	//Remove hover css from the current hover
	$(this).removeClass(menuHoverClass);
}

function showSlide()
{
	
	if( currentSlide==$(this).index() ){
		//Do nothing
		return;
	}else if( currentSlide<$(this).index() ){
		//Scroll from left to right
		scrollSlide(currentSlide,$(this).index(),"+");
	}else{
		//Scroll from right to left
		scrollSlide(currentSlide,$(this).index(),"-");
	}
	
	//Remove active CSS from the previous choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuActiveClass);
	
	//Update current slide
	currentSlide = $(this).index();
	
	//Add active CSS to the current choice
	$(this).addClass(menuActiveClass);
}


function scrollSlide(currentSlide,nextSlide,dir){
	
	//Open this div
	switch(dir){
		case '+':
			$('.'+contentClass).eq(nextSlide).css("left", -slideWidth);
			break;
		case '-':
			$('.'+contentClass).eq(nextSlide).css("left", slideWidth);
			break;
		default:
			return;
	}
	
	$('.'+contentClass).eq(nextSlide).css("display", "block");
	
	//Animation
	var aniArgs = {};
	aniArgs["left"] = dir+"="+slideWidth+"px"; 
	
	$('.'+contentClass).eq(currentSlide).animate(aniArgs, 1000);
	$('.'+contentClass).eq(nextSlide).animate(aniArgs, 1000);
	
	//Close the previous div
	$('.'+contentClass).eq(currentSlide).css("left", 0);
	$('.'+contentClass).eq(currentSlide).css("display", "none");

}