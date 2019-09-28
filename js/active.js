$(document).ready(function () {
    $('.my-claint').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        items: 3,
        autoplayTimeout: 6000,
//        autoplay: true,
        responsive: {
            0: {
                center: false,
                items: 2,
                nav: true
            },
            768: {
                center: true,
                items: 3,
                nav: true
            },
            850: {
                items: 3,
                nav: true
            }
        },
        navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
    });



    $('section.works .work-images .overlay-text i').on('click', function () {
        $(this).parent().hide();
    })
});

$("#gform").submit(function (event) {
	$("input[type=submit]").val("SENDING");
	$("input[type=submit]").attr("disabled", true);

	console.log("Sending feedback...");
	event.preventDefault();
	var url=$(this).closest('form').attr('action'),
    data=$(this).closest('form').serialize();
    $.ajax({
        url:url,
        type:'post',
        data:data
   }).done(function(){
        alert("Your response has been recorded. Thank you for your feedback.");
  		console.log("Clear form area");
   		$(':input','#gform').not(':button, :submit, :reset, :hidden').val('');
   }).fail(function(){
		alert("Failed to submit your response. Please try again later.");
   }).always(function(){
		$("input[type=submit]").attr("disabled", false);
        $("input[type=submit]").val("SEND");
   });
});
