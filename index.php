<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Ujamma</title>
	<meta name="description" content="A web app!">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="favicon.ico">
	<!--Web app capable-->
	<meta name="mobile-web-app-capable" content="yes">
	<link rel="icon" sizes="192x192" href="assets/img/touch/chrome-touch-icon-192x192.png">
  
	<!-- Add to homescreen for Safari on iOS -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="Web Starter Kit">
	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

	<!-- Tile icon for Win8 (144x144 + tile color) -->
	<meta name="msapplication-TileImage" content="assets/img/touch/ms-touch-icon-144x144-precomposed.png">
	<meta name="msapplication-TileColor" content="#3372DF">

	<link rel="stylesheet" href="assets/css/global.min.css">
	<!--[if lt IE 9]>
	<link rel="stylesheet" href="assets/css/legacy.css">
	<script src="assets/js/vendor/html5shiv-respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<div id="blockout" class="blockout"></div>
	<div id="blockinfo" class="blockinfo">
		<h1>Block <span id="blocknumber">1</span></h1>
	</div>

	<div class="house">

		<div class="text">
			<img src="assets/img/text.png" alt="Help us buy iron sheets to finish or roof - $25 per iron sheet." />
		</div>

		<div class="top-grid grid" id="top-grid">
			<?php for ($i=1;$i<=310;$i++) { ?>
				<?php $rand = rand(1,3); ?>
				<div class="block<?php if ( $rand == 1 ) {?> block-used<?php } ?>"<?php if ( $rand == 1 ) {?> data-used="true"<?php } ?> data-number="<?php echo $i; ?>" id="block-<?php echo $i; ?>"></div>
			<?php } ?>
		</div>
	</div>

	<form id="purchase" style="display:none;" method="post" action="purchase.php">
		<input type="hidden" id="purchase_tile_id" name="purchase_tile_id" value="" />
	</form>

	<script async src="assets/js/app.min.js"></script>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXX-X', 'auto');
		ga('send', 'pageview');
	</script>
	<!-- Written by EvasiveSoftware.com -->
</body>
</html>
