window.addEventListener('load',function(){
$(function(){
setTimeout(function(){
	$(".alert").slideUp(500);
	$(".info").slideUp(500);
},2000);

});

var t=document.querySelector('.h');

t.addEventListener('click',function(){
	event.preventDefault();
	document.querySelector('.seven').scrollIntoView({ 
	  behavior: 'smooth' 
	});
});


var b=document.querySelector('.a');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.about').scrollIntoView({ 
	  behavior: 'smooth' 
	});

});
 b=document.querySelector('.s');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.skills').scrollIntoView({ 
	  behavior: 'smooth' 
	});

});

 b=document.querySelector('.e');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.education').scrollIntoView({
		behavior: 'smooth'
	} 
	  );

});
 b=document.querySelector('.c');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.contact').scrollIntoView({ 
	  behavior: 'smooth' 
	});

});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 720) {
        $(".goal").addClass("dish");
        $(".goal").removeClass("fake");
    } else {
        $(".goal").removeClass("dish");
        $(".goal").addClass("fake");
    }
});
var t=document.querySelector('.hh');

t.addEventListener('click',function(){
	event.preventDefault();
	document.querySelector('.seven').scrollIntoView({ 
	  behavior: 'smooth' 
	});
});


var b=document.querySelector('.aa');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.about').scrollIntoView({ 
	  behavior: 'smooth' 
	});

});
 b=document.querySelector('.ss');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.skills').scrollIntoView({ 
	  behavior: 'smooth' 
	});

});

 b=document.querySelector('.ee');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.education').scrollIntoView({
		behavior: 'smooth'
	} 
	  );

});
 b=document.querySelector('.cc');
//var d=document.querySelector('.about');
b.addEventListener('click',function(){
event.preventDefault();
	document.querySelector('.contact').scrollIntoView({ 
	  behavior: 'smooth' 
	});

});

});
