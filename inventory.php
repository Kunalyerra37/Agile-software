<!DOCTYPE html>
<html>
<head>
	<title>Stationery Supplies</title>
	<style>
		body {
			font-family: Arial, sans-serif;
		}
		h1 {
			text-align: center;
		}
		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.item {
			margin: 20px;
			text-align: center;
			box-shadow: 0 0 5px rgba(0,0,0,0.3);
			padding: 10px;
			width: 200px;
			height: 250px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.item img {
			height: 150px;
			object-fit: contain;
		}
		.item h2 {
			margin: 0;
			font-size: 24px;
		}
		.item p {
			margin: 0;
			font-size: 18px;
		}
	</style>
</head>
<body>
	<h1>Stationery Supplies</h1>
	<div class="container">
		<div class="item">
			<img src="pen.jpg">
			<h2>Pen</h2>
			<p>In stock: 50</p>
		</div>
		<div class="item">
			<img src="pencil.jpg">
			<h2>Pencil</h2>
			<p>In stock: 100</p>
		</div>
		<div class="item">
			<img src="eraser.jpg">
			<h2>Eraser</h2>
			<p>In stock: 20</p>
		</div>
	</div>
</body>
</html>
