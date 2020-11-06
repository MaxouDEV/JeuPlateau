window.onload = function(){

	initDices();
	initShield();
	
};

function getDicesConfig(){
	
	var diceImgOrange = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-orange-removebg-preview.png";
	var diceImgYellow = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-yellow-removebg-preview.png";
	var diceImgRed = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-red-removebg-preview.png";
	var diceImgBlue = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-blue-removebg-preview.png";
	var diceImgGreen = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-green-removebg-preview.png";
	var diceImgPurple = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-purple-removebg-preview.png";
	
	var dicesConfig = [
			[ 'orange', diceImgOrange ],
			[ 'yellow', diceImgYellow ],
			[ 'red', diceImgRed ],
			[ 'blue', diceImgBlue ],
			[ 'green', diceImgGreen ],
			[ 'purple', diceImgPurple ]
		]
		
	return dicesConfig;
	
}

function repositionShield(){
	
	document.getElementById("shield-blue").style.left = '400px';
	document.getElementById("shield-orange").style.left = '400px';
	document.getElementById("shield-purple").style.left = '400px';
	document.getElementById("shield-yellow").style.left = '400px';
	document.getElementById("shield-green").style.left = '400px';
	document.getElementById("shield-red").style.left = '400px';
	
}

// on affiche les dés pour le départ
function initDices(){
	
	  document.getElementById("dice-one").src = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-green-removebg-preview.png";
	  document.getElementById("dice-two").src = "https://image.noelshack.com/fichiers/2020/45/1/1604313448-dice-purple-removebg-preview.png";
	  
	  document.getElementById("dice-one").style.display = 'block';
	  document.getElementById("dice-two").style.display = 'block';
	  
}

// récupération de la position des shields
function getShieldPosition(){
	
	var ShieldPositionOrange = document.getElementById("shield-orange").offsetLeft;
	var ShieldPositionPurple = document.getElementById("shield-purple").offsetLeft;
	var ShieldPositionYellow = document.getElementById("shield-yellow").offsetLeft;
	var ShieldPositionRed = document.getElementById("shield-red").offsetLeft;
	var ShieldPositionBlue = document.getElementById("shield-blue").offsetLeft;
	var ShieldPositionGreen = document.getElementById("shield-green").offsetLeft;
	
	var positions = [
			[ 'orange', ShieldPositionOrange ],
			[ 'yellow', ShieldPositionYellow ],
			[ 'red', ShieldPositionRed ],
			[ 'blue', ShieldPositionBlue ],
			[ 'green', ShieldPositionGreen ],
			[ 'purple', ShieldPositionPurple ]
		]
		
	return positions;
	
}

// on affiche les shields sur la ligne de départ
function initShield(){
	
	document.getElementById("shield-blue").src = "https://image.noelshack.com/fichiers/2020/45/1/1604323802-bouclier-bleu-removebg-preview.png";
	document.getElementById("shield-orange").src = "https://image.noelshack.com/fichiers/2020/45/1/1604323802-bouclier-orange-removebg-preview.png";
	document.getElementById("shield-purple").src = "https://image.noelshack.com/fichiers/2020/45/1/1604323803-bouclier-violetxcf-removebg-preview.png";
	document.getElementById("shield-yellow").src = "https://image.noelshack.com/fichiers/2020/45/1/1604323802-bouclier-jaune-removebg-preview.png";
	document.getElementById("shield-green").src = "https://image.noelshack.com/fichiers/2020/45/1/1604323802-bouclier-vertxcf-removebg-preview.png";
	document.getElementById("shield-red").src = "https://image.noelshack.com/fichiers/2020/45/1/1604323802-bouclier-rougez-removebg-preview.png";
	
	document.getElementById("shield-blue").style.display =  'block';
	document.getElementById("shield-orange").style.display =  'block';
	document.getElementById("shield-purple").style.display =  'block';
	document.getElementById("shield-yellow").style.display =  'block';
	document.getElementById("shield-green").style.display =  'block';
	document.getElementById("shield-red").style.display =  'block';

	document.getElementById("shield-yellow").style.left = '400px';
	document.getElementById("shield-purple").style.left = '400px';
	document.getElementById("shield-blue").style.left = '400px';
	document.getElementById("shield-green").style.left = '400px';
	document.getElementById("shield-red").style.left = '400px';
	document.getElementById("shield-orange").style.left = '400px';


}

// Lancement des dés //
function roll() {
	
	// on récupère les images et les couleurs qui vont avec
    var dices = getDicesConfig();
	
	// -------- Lancer du dé N°1
	var launchOne = Math.floor(Math.random() * dices.length);
	//on récupère la couleur du nouveau dé
	var colorOne = dices[launchOne][0];
	// on affiche l'image du nouveau dé
	document.getElementById("dice-one").src = dices[launchOne][1];
	
	// -------- Lancer du dé N°2
	var launchTwo = Math.floor(Math.random() * dices.length);
	var colorTwo = dices[launchTwo][0];
	document.getElementById("dice-two").src = dices[launchTwo][1];
	
	// on va appeler la fonction pour faire avancer les shields
	moveShield(colorOne, colorTwo);

}

function moveShield(firstColor, secondColor){
	
	var maxMovement = 1400;
	
	// déplacement du premier lancer
	var shieldPositions = getShieldPosition();
	for ( let i = 0; i < shieldPositions.length; i++ ){
		
		if ( shieldPositions[i][0] == firstColor ){
			
			var NewPositionLeft = shieldPositions[i][1] + 130;
			document.getElementById("shield-"+shieldPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) { gameWin(shieldPositions[i][0]); exit; }
			
		}
	}
	
		// déplacement du deuxieme lancer
	var shieldPositions = getShieldPosition();
	for ( let i = 0; i < shieldPositions.length; i++ ){
		
		if ( shieldPositions[i][0] == secondColor ){
			
			var NewPositionLeft = shieldPositions[i][1] + 120;
			document.getElementById("shield-"+shieldPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) gameWin(shieldPositions[i][0]);
			
		}
	}

}

function gameWin(winner){
	
	alert('Shield'+ winner + ' gagne !');
	resetGame();
	
}

function resetGame(){
	
	initDices();
	initShield();
	repositionShield();
	
}

