document.getElementById("id_logic_version").innerHTML = "Bussiness version: 2018.11.05.3";
window.addEventListener("deviceorientation",on_device_orientation)
window.addEventListener("devicemotion",on_device_motion)
//----------------------------------------
function on_device_orientation(e){
	document.getElementById("id_alpha").innerHTML = e.alpha;
	document.getElementById("id_beta").innerHTML = e.beta;
	document.getElementById("id_gamma").innerHTML = e.gamma;
	
	var svg = document.getElementById("id_svg");
	var cerc = document.getElementById("id_cerc");

	var R=20;
	var svg_height = svg.getAttribute("height");
	var svg_width = svg.getAttribute("width");
	
	cerc.setAttribute("cx", svg_width / 2 + e.gamma/90*(svg_width / 2-R));
	cerc.setAttribute("cy", svg_height / 2 + e.beta/90*(svg_height / 2-R));
	
}