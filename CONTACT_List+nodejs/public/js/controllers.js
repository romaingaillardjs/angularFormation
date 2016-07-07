angular.module('myApp.controllers',[])
//   controller('MyCtrl3',['$scope','myServices',function ($scope,myServices) {
//      $scope.message = '';
//           $scope.listeDeMessages = [];
//           $scope.ajouterMessage = function(){
//             if($scope.message){
//               //ajout du message à la liste
//               console.log('bonjour');
//               //
              
//               myServices.mapremiereFonction($scope.message).then(function(data) {
//                 console.log('DONNEES RECUP => ' + data.data.articles);

//                 $scope.listeDeMessages = angular.copy(data.data.articles);


//               }, function() {
//                 console.log('error');
//               });
              
//               //réinitialisation du message
//               $scope.message = '';
//             };
//           };
// }])

.controller('navCtrl', function ($scope) {
  $scope.nav = {
    navItems: ['home','add'],
    selectedIndex: 0,
    navClick: function ($index) {
      $scope.nav.selectedIndex = $index;
    }
  };
})


.controller('homeCtrl', function ($scope,ContactService){

    ContactService.getContacts().then(function (data) {
    $scope.contacts = angular.fromJson(data.data);
})


  $scope.removeContact = function (item) {
    var index = $scope.contacts.indexOf(item);
    $scope.contacts.splice(index, 1);
    $scope.removed = 'Contact successfully removed.';
  }
})

.controller('contactInfoCtrl', function ($scope, $routeParams, ContactService){
  var index = $routeParams.contact_index;
  ContactService.getContacts().then(function (data) {
    $scope.contacts = angular.fromJson(data.data);
    console.log($scope.contacts);

  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];

  });
  // console.log($scope.contacts);
})

.controller('addContactCtrl', function ($scope, $location) {
  //needed to show the correct button on the contact form
  $scope.path = $location.path();

  $scope.addContact = function () {
    var contact = $scope.currentContact;
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
  };

})

.controller('editContactCtrl', function ($scope, $routeParams){
  $scope.index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[$scope.index];
})

// directives




