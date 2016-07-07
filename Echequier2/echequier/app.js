angular.module('monModule', [])
.directive('maTroisiemeDirective', [
  function() {
    return {
      controller: ['$scope', function($scope) {
        //definir la couleur pair
        $scope.pair = "#000000";
        //definir la couleur impair
        $scope.impair = "#FFFFFF";
        this.Fducontroller = function(compteurNbCase) {
          //creer la première ligne
          $scope.ligne = [];
          //definir le booleen des couleur
          var interrupteurCouleur, 
          //definir la taille de la case
          TailledeLaCase = 50 / compteurNbCase + 'vw';
          //creer l'echequier
          for (var i = 0; i < compteurNbCase; i++) {
            //ajouter les lignes
            $scope.ligne[i] = [];
            //ajouter les cases dans les lignes
            var pousser = function(couleur) {
              $scope.ligne[i].push({ 'couleur': couleur,'taille': TailledeLaCase })
            };
            //gestion de la couleur
            for (var j = 0; j < compteurNbCase; j++) {
              interrupteurCouleur ? pousser($scope.pair) : pousser($scope.impair);
              interrupteurCouleur = !interrupteurCouleur;
            };
            //gestion de la parité
            compteurNbCase % 2 == 0 ? interrupteurCouleur = !interrupteurCouleur :"*";
          };
        };
      }],
      controllerAs: 'Echequier',
      templateUrl: 'Template.html',
      link: function(scope, iElm, iAttrs, controller) {
        //definir un nombre de cases de départ
        var compteur = 5;
        //gestion du changement du nombre de cases
        scope.changer = function(incrément) {
          incrément==1 ? compteur++ : incrément==0 ? compteur-- : incrément==3 ?"§":"|";
          controller.Fducontroller(compteur);
        };
        scope.changer(compteur);
      },
    };
  },
]);