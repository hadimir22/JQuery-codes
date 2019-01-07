$(".btn-one").click(function (e) {
    var button_number =  $(this).html();
   alert(button_number + " pressed");
  })




/*detect refresh of browser*/
/*
$( window ).unload(function() {
    return "Bye now!";
  });

/*detect refresh of browser*/
/*
$(".description").click(function(){
    $(".image").clone().appendTo(".description");
    });
*/



/*
$(document).find.addClass();
/*

/*
$("#yo").click(function(){
var text = $("#copy").html();
$("#paste").html(text);
});
*/


/*
$(".hover").mouseover(function(e){
var hovertext = $(".hover").attr("hovertext");
$("#forpress").text(hovertext).show();
$("forpress").css("top" , e.clientY+10).css( "left" , e.clientX+10);
}).mouseout(function(){
$("#forpress").hide();
});
/*
/*
$(".hover").mouseover(function(e){
$("#forpress").text("x=" + e.clientX + "y=" + e.clientY);
});
*/
/*
$("#name").focusin(function(){
$(this).attr('placeholder', '');
$("#haav").fadeIn(5000);
$("#haav").html('name');
});



$("a").bind('mouseenter mouseleave', function(){
$("#two").toggleClass('bold');
});
*/


/*
$("#name").select(function(){
alert('selectd');
$("#forpress").html('selected texxt');
});
*/

/*
$("#yo").hover(function(){
$("#forpress").html('takes you to beyond the wall');
});
*/

/*
$("#press").toggle(function(){
$("#forpress").html('ooh yeah');
},function(){
$("#forpress").html('harder');

});
*/


/*
$("#name").keyup(function(){
var usertext=$("#name").val();
$("#haav").html(usertext);
});
*/

/*
$("#botn").dblclick(function(){
$("#two").hide();
});
*/

/*
$("#botn").click(function(){
$("#two").hide();
});
*/

/*
function change_size (element, size){
var current = parseInt(element.css('font-size'));
if (size=="small"){
var newsize= current - 2;
}
else if(size=="big"){
var newsize= current + 2;
}
element.css('font-size', newsize + 'px' );
}


$("#small").click(function(){
change_size($('p'), 'small');

});
$("#big").click(function(){
change_size($('p'), 'big');

});
*/

/*
$(document).ready(function(){
$("#name").keyup(function(){
name= $(this).val();
$("#find li").removClass('highlight');

if (jQuery.trim(name) != '' ){
$("#find li:contains('"+ name +"')").addClass('highlight');
}

});
)};
*/

/*
$(document).ready(function(){
var emailmsg = "enter your email";
$('input[type="email"]').attr("value",emailmsg).focus(function(){
if($(this).val() == emailmsg){
$(this).attr("value","");}
}).blur(function(){
if($(this).val() == ""){
$(this).attr("value",emailmsg);}

});
});
*/


/*
$(document).ready(function(){
$('.table tr:odd').addClass('highlight');
});
*/

/*
$(':button').click(function(){
$("p").css('backgroundColor','aqua');
});
*/


/*
$(':text').focusin(function(){ 
$(this).css('backgroundColor','red');
});
$(':text').blur(function(){ 
$(this).css('backgroundColor','white');
});
*/ 
 
/*
$(':button').click(function(){
$(this).attr('value','loading..');
});
*/

/*
$('p:last').text('valar dohearis');
$('p:first').text('valar moghulis');
*/

/*
$('#botn').Click(function(){
alert('name');
});
*/

/*
var count =$('#area').find('*').length;
alert(count);
*/

/*
var audio = $("#sound")[0];
audio.play();
*/








