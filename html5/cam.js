document.getElementById("id_logic_version").innerHTML = "Bussiness version: 2018.11.12.0";
document.getElementById("id_button").addEventListener("click", start);

function on_success(e)
{
	document.getElementById("id_video").srcObjet = e;
}
//------------------------------
function on_failure(e)
{
	alert("Cannot read camera");
}
//-----------------------------
function start()
{
	var c = {audio: true, video: true};
    navigator.mediaDvices.getUserMedia(c).then(on_success).catch(on_failure)	;
}