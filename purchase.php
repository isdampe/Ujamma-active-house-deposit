<?php

require_once 'config.php';

if ( empty($_POST['purchase_tile_id']) ) {
	die("Cmon man, spam isn't cool!");
}

$tiles = explode( ",", $_POST['purchase_tile_id'] );
if ( count($tiles) < 1 ) {
	die("No tiles");
}

$tile_count = count($tiles);
$price_per_tile = 25.00;
$total_price = $price_per_tile * $tile_count;

?>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" id="paypal">

	<input type="hidden" name="cmd" value="_xclick" />
	<input type="hidden" name="cbt" value="Go back" />
	<input type="hidden" name="business" value="<?php echo $email; ?>" />
 <input type="hidden" name="item_name" value="Roof tile donation, tiles: (<?php echo $_POST['purchase_tile_id']; ?>)" />
 <input type="hidden" name="amount" value="<?php echo $total_price; ?>">
	<input type="hidden" name="button_subtype" value="services" />
	<input type="hidden" name="no_shipping" value="1">
	<input type="hidden" name="return" value="<?php echo $baseurl; ?>/payment.php" />
	<input type="hidden" name="notify_url" value="<?php echo $baseurl; ?>/notify.php?tiles=<?php echo $_POST['purchase_tile_id']; ?>"/>
	<input type="hidden" name="cancel_return" value="<?php echo $baseurl; ?>/" />
	<input type="hidden" name="currency_code" value="AUD"/>
	<input type="hidden" class="btn btn-primary" style="width:100%" alt="PayPal - The safer, easier way to pay online!"/>

</form>
<script>
	window.onload = function(){
		document.getElementById("paypal").submit();
	};
</script>