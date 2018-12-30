$(document).ready(function () {


	//Initialize Map
	var p_map = L.map('plastic-map', {}).setView([0.89, 123.9], 9);



	var CoralEye = L.marker([1.751720, 125.133898]).addTo(p_map);
	CoralEye.bindPopup('<h4>Coral Eye Resort</h4>Home base of the <a href="https://www.no-trashtriangle.org/" target="_blank">No Trash Triangle Initiative</a><br>Collecting, sorting and cleaning of beach waste<br><br><main class="container"><div class="row"><div class="col-4"><a href="images/ce3.jpg" class="thumbnail"><img src="images/ce3_thumb.jpg" alt="" class="img-fluid"></a></div><div class="col-4"><a href="images/ce2.jpg" class="thumbnail"><img src="images/ce2_thumb.jpg" alt="" class="img-fluid"></a></div><div class="col-4"><a href="images/ce1.jpg" class="thumbnail"><img src="images/ce1_thumb.jpg" alt="" class="img-fluid"></a></div></div></main>');
	CoralEye.on('click', onMarkerClick)

	var Amelia = L.marker([1.484537, 124.832249]).addTo(p_map);
	Amelia.bindPopup('<h4>Recycling Facility</h4>Further sorting of recyclables, compacting and shipping<br><br><main class="container"><div class="row"><div class="col-4"><a href="images/amelia3.jpg" class="thumbnail"><img src="images/amelia3_thumb.jpg" alt="" class="img-fluid"></a></div><div class="col-4"><a href="images/amelia1.jpg" class="thumbnail"><img src="images/amelia1_thumb.jpg" alt="" class="img-fluid"></a></div><div class="col-4"><a href="images/amelia2.jpg" class="thumbnail"><img src="images/amelia2_thumb.jpg" alt="" class="img-fluid"></a></div></div></main>');
	Amelia.on('click', onMarkerClick)


	var TPA = L.marker([1.520550, 124.864175]).addTo(p_map);
	TPA.bindPopup('<h4>Landfill Manado</h4>Various small companies exctract recyclables from landfill, sort it and sell it to recycling facilities<br><br><main class="container"><div class="row"><div class="col-6"><a href="images/TPA2.jpg" class="thumbnail"><img src="images/TPA2_thumb.jpg" alt="" class="img-fluid"></a></div><div class="col-6"><a href="images/TPA1.jpg" class="thumbnail"><img src="images/TPA1_thumb.jpg" alt="" class="img-fluid"></a></div></div></main>');
	TPA.on('click', onMarkerClick)

	var Bahoi = L.marker([1.719207, 125.018777]).addTo(p_map);
	Bahoi.bindPopup('<h4>Beach Plastic Recycling</h4>This man collects plastic from the beach, sorts it and transprots it to Manado<br><br><main class="container"><div class="row"><div class="col-12"><a href="images/bahoi1.jpg" class="thumbnail"><img src="images/bahoi1_thumb.jpg" alt="" class="img-fluid"></a></div></div></main>');
	Bahoi.on('click', onMarkerClick)

	var GrorntaloBeach = L.marker([0.474188, 123.100619]).addTo(p_map);
	GrorntaloBeach.bindPopup('<h4>Beach Cleanups</h4>Stephanie started beach clean ups with school kids and convinced the local govenrment to pick up the trash');
	GrorntaloBeach.on('click', onMarkerClick)

	var Harry = L.marker([0.531209, 123.055173]).addTo(p_map);
	Harry.bindPopup('<h4>Harry & Mimin Homestay</h4>Harry started tackeling plastic waste on his own, founded a volunteer programm and does clean ups');
	Harry.on('click', onMarkerClick)

	function onMarkerClick(e) {
		$('.thumbnail').viewbox();
		//		$('.thumbnail').viewbox({
		//			fullscreenButton: true
		//		});
	}



	//add scale bar
	L.control.scale({
		imperial: false
	}).addTo(p_map);



	var OTM_tiles = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
	});

	var SAT_tiles = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
		minZoom: 2,
		maxZoom: 19,
		subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
	}).addTo(p_map);

	var MapTypes = {
		'Satellite': SAT_tiles,
		'OpenTopoMap': OTM_tiles
	};

	L.control.layers(MapTypes).addTo(p_map);

});
