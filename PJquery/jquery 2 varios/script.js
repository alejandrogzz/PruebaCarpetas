/* 1. Attach a click and double-click event to the <p> element.
For single click append the following paragraph:
<p>This is a click Event</p>
For double-click append the following paragraph:
<p>This is a double-click Event</p> */


$("p").on("click dblclick", function(event){
	var e = event.type == "click" ? "click" : "double click";
	$(this).text("This is a " + e + " event");
});

/* 2. Blur Event */
$("#field1").blur(function(){
alert("You lost focus");
});

//Paragraph addition event
$("#field2").on("change",function(event){
	$(this).after("<p>"+$(this).val()+"</p>")
});

//Hide all headings on a page when they are clicked.
$(":header:not(h1)").on("click",function(event){
	$(this).hide();
});

$("p").on("dblclick", function(event){
	$(this).toggleClass("dbl");
});

$("body").on("click", "h1", function(event){
	$(this).after($(this).clone());
});

$(window).on("mousemove",function(event) {
 $("#coordenadas").text(event.pageX + "," + event.pageY)
});

$("#field1").on("focus",function(event){
  $(this).blur();
});
$("#field2").keypress(function(event){
	$("h3").text($("h3").text() + String.fromCharCode(event.which));
});

$(window).on("mousedown mouseup", function(event){
	var e = event.type == "mouseup" ? "mouse up" : "mouse down";
	$("#mouse-events").text("This is a " + e + " event");
});