var cart = new Array;

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

	$("#purchase-button").on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		doCart();
	});

	$("#clear-cart").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		clearCart();
	});

	$("#blockout").on("click", function(e){
		e.preventDefault();
		$(".grid").removeClass("top-grid-active bottom-grid-active side-grid-active");
		$("#blockout").fadeOut(250);
		$("#blockinfo").fadeOut(250);
		hasActiveGrid = false;
	});
	$("#blockinfo").on("click", function(e){
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
				if (! $(this).hasClass("cart") ) {
					addTileToPurchase(number, $(this));
				}
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

function purchaseTile() {

	var tiles = '';
	for (i=0;i<cart.length;i++) {
		tiles = tiles + cart[i] + ",";
	}

	tiles = tiles.substring(0,(tiles.length) -1);

	$("#purchase_tile_id").val(tiles);
	$("form#purchase").submit();
}

function addTileToPurchase(number, ele) {

	cart[cart.length] = number;
	$(ele).addClass("cart");
	updateTileCount();

}

function updateTileCount() {

	var count = cart.length;
	$("#tilecount").html(count);

}

function doCart() {

	var count = cart.length;
	if ( count === 0 ) {
		swal("Whoops","You need to select some tiles first.", "error");
		return;
	}
	var cost = 25 * count;

	swal({
		title: "Buy tiles?",
		text: "Do you wish to buy " + count + " tiles for $" + cost + "?",
		imageUrl: "assets/img/paypal.png",
		showCancelButton: true,
		confirmButtonColor: "#44cc55",
		confirmButtonText: "Purchase now",
		closeOnConfirm: false },
		function(){ purchaseTile(); }
	);

}

function clearCart() {
	cart = new Array;
	$(".cart").removeClass("cart");
	updateTileCount();
}