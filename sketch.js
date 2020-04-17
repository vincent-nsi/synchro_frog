var depart;
var joue = false;
var player ;


function afficher(tps){
	
   	secondes = parseInt(tps/1000);
   	minutes = parseInt(secondes/60);
   	secondes = secondes % 60;
   	
   	var affichageTemps = "";
   	if (minutes != 0) {
   	affichageTemps = minutes+" mn : ";
   	}
   	affichageTemps = affichageTemps + secondes+" s";

   	document.getElementById("chrono").innerHTML = affichageTemps;

}

  
function lancer(){
	heure = document.getElementById("heure").value;
	minutes = document.getElementById("minutes").value;

	depart = new Date('April 17, 2020 '+heure+':'+minutes+':00');
	console.log(depart);
	console.log(joue);

	attendre();
	joue = false;

}

function attendre(){

	var maintenant = new Date();
	temps = depart - maintenant;
	
	var player = document.querySelector('#tempo');
	
	if (!joue){
		
		if (temps < 0){
			document.getElementById("chrono").style="display : none;";
			player.play();
			joue = true;

		}
		else {
   			document.getElementById("chrono").style="display : block;";
   	 		afficher(temps);
     		setInterval(attendre,500);
   		}
   	}
}


function stopper(){
   var player = document.querySelector('#tempo');
   player.currentTime = 0;
   player.pause();
}