
$(document).ready ->
	$.backstretch("img/preslawn.png")
	$(".backstretch").css "position":"absolute"
	$(".row").hide()
	$(".backstretch img").load -> 
		$("#header").fadeIn(700)
		setAndBindSizes()
		$(".row").show()


setAndBindSizes = () -> 

	setSizes = () -> 
		$("#header").height $(".backstretch").height()


	$(window).bind 'resize', -> setSizes()

	setSizes()



