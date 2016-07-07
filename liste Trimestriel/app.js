var app = angular.module('monModule',[])
.controller('ListeTrimestriel', ['$scope', function($scope){

	$scope.nouvelledate = function (arg) {	
		$scope.valid=false;
		$scope.LesTrimestressur10ans = [];
		console.log(arg)
	 !(angular.isDate(arg)) ? alert('ce n'+' '+'est pas une date') : '';

		var aujourdhui = new Date(arg),
		mois = aujourdhui.getUTCMonth(),
		trimestre = ['1','2','3','4'],
		trimestreenmois = ['janvier,février, mars','avril,mai,juin','juillet,août,septembre','octobre,novembre,décembre'];
		les10prochainesAnnée = [];

			if (mois==11) {
			var	année = aujourdhui.getUTCFullYear()+1;
			}else{
			var	année = aujourdhui.getUTCFullYear();
			}	

	//creer le tableau contenant les 10 procha	ines années : 
		for (var i = 0; i < 11; i++) {
			les10prochainesAnnée.push(année);
			année = année + 1;
			};
console.log(mois)
	//boucle de création des données pour la première année: 	
			var k=0;
			if (mois<2) 			{k=0}
			else if (mois<5) 		{k=1}
			else if (mois<8) 		{k=2}
			else if (mois<11) 		{k=3}
			else if (mois=11) 		{k=0}	
	//boucle de création des données à mettre dans le select : 	
		for (var i = 0; i < 11; i++) {

			while (k < 4){

				var ligne ='Q' + trimestre[k] +' '+ les10prochainesAnnée[i] +' '+ trimestreenmois[k];
				$scope.LesTrimestressur10ans.push(ligne);	
				k++	
					};
			k=0;
		}	
	}
}]);
