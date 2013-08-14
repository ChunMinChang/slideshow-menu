slideshow-menu
==============

Sample Code of jQuery slide show for website menu

## Introduction

This is a sample code for website navigation with jQuery slideshow.
You can modify this sample to meet your needs.


## Live Demo

http://mars.twbbs.org/samples/slideshow-menu/

## How to Use



- Use ```<ul>``` and ```<li>``` tag as your slide menu list

- In ```<li>``` tag, insert your slide-menu-class and breadcrumbs-menu-class

  ``` <li class="slide-menu-class"><a>menu 1</a></li> ```

(In sample code, slide-menu-class = 'slideshow-menu')

- In ```html <div id="slideshow-container">```, insert slide contents div with your own slideshow-content-class. 

``` 
<div id="slideshow-container">

	<div class="slideshow-content-class"> 
	</div> 
	<div class="slideshow-content-class"> 
	</div> 
	.
	.
	.
	
</div>
```

(In sample code, slideshow-content-class = 'slideshow-content')


- Call the function 'initSlide' when browser is loading html file

``` 

//Initualize the web view and setting
$(document).ready(function(){
				
	//Init slideshow
	initSlide('slide-menu-class','slideshow-content-class','slideshow-menu-hover-class','slideshow-menu-active-class');
	
});

``` 

1. ***slide-menu-class*** : class name of slide manu
2. ***slideshow-content-class*** : class name of slide content
3. ***slideshow-menu-hover-class*** : class name of the website menu class when mouser hover the website menu
4. ***slideshow-menu-active-class*** : class name of the website menu class after mouser clicked the website menu