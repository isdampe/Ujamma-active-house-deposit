$(document).ready(function(){

	var hasActiveGrid = false;
	
	$("#top-grid").on('click', function(e){
		e.preventDefault();

		if ( $(this).hasClass("top-grid-active") ) {
			
		} else {
			$(this).addClass("top-grid-active active-grid");
			$("#blockout").fadeIn(250);
			$("#blockinfo").fadeIn(250);
			hasActiveGrid = true;
		}

	});

	$("#blockout").on("click", function(e){
		e.preventDefault();
		$(".grid").removeClass("top-grid-active bottom-grid-active side-grid-active");
		$("#blockout").fadeOut(250);
		$("#blockinfo").fadeOut(250);
		hasActiveGrid = false;
	});

	$(".block").hover(function(){
		if ( hasActiveGrid === true ) {
			doBlockHover($(this));
		}
	}, function(){
		if ( hasActiveGrid === true ) {
			doBlockUnhover();
		}
	});

	$(".block").on('click', function(e){
		e.preventDefault();
		if ( hasActiveGrid === true ) {

			var available = $(this).attr("data-used");
			var number = $(this).attr("data-number");

			if ( available !== "true" ) {
				swal({
					title: "Buy tile?",
					text: "Do you wish to buy tile #" + number + " for $25?",
					imageUrl: "assets/img/paypal.png",
					showCancelButton: true,
					confirmButtonColor: "#44cc55",
					confirmButtonText: "Purchase now",
					closeOnConfirm: false },
					function(){ purchaseTile( number ); });
			} else {
				swal("Tile has been purchased", "Sorry, the tile you selected has already been purchased", "error");
				return;
			}

		} else {
			return;
		}
		
	});

});

function doBlockHover(ele) {
	
	var number = $(ele).attr("data-number");
	var used = $(ele).attr("data-used");
	var string = number;
	if ( used ) {
		string = string + "<br /><br /><em>already funded</em>";
	} else {
		string = string + "<br /><br />($25)";
	}

	$("#blocknumber").html( string );
	$("#blockinfo").stop(true,true).fadeIn(250);
	return;
}

function doBlockUnhover() {
	
	return;
}

function purchaseTile(num) {

	$("#purchase_tile_id").val(num);
	$("form#purchase").submit();
}