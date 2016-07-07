angular.module('maTodoList', []).controller('myTodoListCtrl', ['$scope', function($scope) {
// initialisation
  $scope.userInput = '';
  $scope.TaskList = [];
  $scope.afficher = true;
//ajouter une tache
  $scope.addTask = function() {
    $scope.newtask = {
                    name : $scope.userInput,
                    checked : false, 
                    afficher : true
                    };
    $scope.userInput.length ? $scope.TaskList.push($scope.newtask) :'';
    $scope.userInput.length ? $scope.userInput = '' :'';
    };
//supprimer une tache
  $scope.deleteTask = function(arg) {
    $scope.position = $scope.TaskList.indexOf(arg);
    $scope.TaskList.splice($scope.position, 1);
  };
//checker toutes les taches
  $scope.checkedAllTask = function() {
    for (var i = 0; i < $scope.TaskList.length; i++) {
      !$scope.TaskList[i].checked ? $scope.TaskList[i].checked = true:'';
    }
  };
//supprimer toutes les taches checker
  $scope.deleteAllCheckedTask = function() {
    for (var i = 0; i < $scope.TaskList.length; i++) {
      $scope.TaskList[i].checked ? $scope.deleteTask($scope.TaskList[i]):'';
      $scope.TaskList[i].checked ? i-- :'';
    }
  };
//afficher Les Taches Actives
  $scope.afficherLesTachesActives = function () {
    for (var i = 0; i < $scope.TaskList.length; i++) {
     $scope.TaskList[i].checked? $scope.TaskList[i].afficher = false : $scope.TaskList[i].afficher = true;
    }  
  }
  $scope.afficherLesTachesclosed = function () {
    for (var i = 0; i < $scope.TaskList.length; i++) {
      $scope.TaskList[i].checked ? $scope.TaskList[i].afficher = true : $scope.TaskList[i].afficher = false;     
    }
  }
}]);