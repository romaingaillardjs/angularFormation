var app = angular.module('monModule', []).directive('maTroisiemeDirective', [function() {
    var objetDefinissantLaDirective = {
        restrict: 'A',
        transclude: true,
        scope: {
        nbCaseModif: '=saisieNbCase'
        },
        controller: [function() {
          this.ligne = [];
            this.Fducontroller = function(arg) {
                
                this.nbCase = arg;
                var divInterrupteur = 1;
                var nbCasesRacine = Math.round(Math.sqrt(this.nbCase));
                // var TailledeLaCase = Math.round((100 / nbCasesRacine)+'px');
                //var TailledeLaCase = 100+'px';
                var TailledeLaCase = 0.05 * window.innerWidth + 'px';
                for (var i = 0; i < nbCasesRacine; i++) {
                    this.ligne[i] = [];
                    for (var j = 0; j < nbCasesRacine; j++) {
                        if (divInterrupteur == 1) {
                            this.ligne[i].push({
                                'couleur': 'black',
                                'taille': TailledeLaCase
                            })
                        } else {
                            this.ligne[i].push({
                                'couleur': 'white',
                                'taille': TailledeLaCase
                            })
                        }
                        divInterrupteur = divInterrupteur * -1;
                    };
                    if (nbCasesRacine % 2 == 0) {
                        divInterrupteur = divInterrupteur * -1;
                    }
                };
            }
        }],
        controllerAs: 'Echequier',
        templateUrl: 'Template.html',
        link: function(scope, iElm, iAttrs, controller) {
            
            scope.changer = function(arg) {
                controller.Fducontroller(scope.saisieNbCase);
            }
        }
    };
    return objetDefinissantLaDirective;
}]);