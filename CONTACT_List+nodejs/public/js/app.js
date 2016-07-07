var myApp = angular.module('contactListApp', ['ngRoute','ngMessages']).config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/partials/default.html',
        }).when('/contact-info/:contact_index', {
            templateUrl: 'views/partials/contact_info.html',
            controller: 'contactInfoCtrl'
        }).when('/add', {
            templateUrl: 'views/partials/contact_form.html',
            controller: 'addContactCtrl'
        }).when('/edit/:contact_index', {
            templateUrl: 'views/partials/contact_form.html',
            controller: 'editContactCtrl'
        }).otherwise({
            redirectTo: '/home'
        });
    })
// .service('myServices2', ['$http', function($http) {
//         console.log('hello');
//         this.mapremiereFonction = function() {
//             return $http.post('/test').success(function(data, status, headers, config) {
//                 return data;
//             }).
//             error(function(data, status, headers, config) {
//                 console.log('Error !');
//             });
//         }
//     }])
.service('ContactService', function($http) {

        this.mapremiereFonction2 = function() {
            return $http.post('/test').success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                console.log('Error !');
            });
        };

        this.getContacts = function() {
          return this.mapremiereFonction2().then(function(data) {
                console.log('DONNEES RECUP => ' + data.data.articles);
                //  $scope.listeDeMessages = [];
                // $scope.listeDeMessages = angular.copy(data.data.articles);
                // $scope.contacts = $scope.listeDeMessages;
                var lesdata = data.data.articles;
                return lesdata;
            })

        };
    })
.service('myServices', ['$http', function($http) {
        this.mapremiereFonction = function(myData) {
            console.log(myData);
            return $http.post('/test',myData).success(function(data, status, headers, config) {
                console.log(data);
                return data;
            }).
            error(function(data, status, headers, config) {
                console.log('Error !');
            });
        }
    }])

.controller('navCtrl', function($scope) {
        $scope.nav = {
            navItems: ['home', 'add'],
            selectedIndex: 0,
            navClick: function($index) {
                $scope.nav.selectedIndex = $index;
            }
        };
    })

.controller('homeCtrl', function($scope, ContactService) {
      ContactService.getContacts().then(function(data) {
            $scope.contacts = angular.fromJson(data);
            console.log($scope.contacts);
        })
      
    })
.controller('contactInfoCtrl', function($scope, $routeParams, ContactService) {
        // ContactService.getContacts().then(function (data) {
        //   $scope.contacts = angular.fromJson(data.data);
        var index = $routeParams.contact_index;
        $scope.currentContact = $scope.contacts[index].corps;
        var removeContact = $scope.contacts[index]._id;
             $scope.removeContact = function(item) {

           var index = $scope.contacts.indexOf(item);
            $scope.contacts.splice(index, 1);
            $scope.removed = 'Contact successfully removed.';
        }
    })
    // })
    
.controller('addContactCtrl', function($scope, $location, myServices) {
        //needed to show the correct button on the contact form
        $scope.regex = '^([0-9]{10})$';
        $scope.path = $location.path();
        // $scope.addContact = function() {
        //     var contact = $scope.currentContact;
        //     contact.id = $scope.contacts.length;
        //     $scope.contacts.push(contact);
        // };
        $scope.message = '';
        $scope.listeDeMessages = [];
        $scope.ajouterMessage = function() {


            var contactBDD = $scope.currentContact;
            console.log(contactBDD);
            // contactBDD.id = $scope.contacts.length;
         
            
            if (contactBDD) {
                //ajout du message à la liste
                //
                myServices.mapremiereFonction(contactBDD).then(function(data) {

                    console.log('DONNEES RECUP => ' + data.data.articles);

                    $scope.listeDeMessages = angular.copy(data.data.articles);

                    // $scope.contacts = $scope.listeDeMessages;
                    
                    // console.log($scope.contacts)
                }, function() {
                    console.log('error');
                });
                //réinitialisation du message
                $scope.message = '';
            };

            var contact = {};
           
            if (!$scope.currentContact=='') { 
            contact.corps = $scope.currentContact;
            contact.corps.id = $scope.contacts.length;
            }
        };
    })
.controller('editContactCtrl', function($scope, $routeParams) {
        $scope.index = $routeParams.contact_index;
        $scope.currentContact = $scope.contacts[$scope.index];
       

       
    })
.directive('contact', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: 'views/partials/contact.html'
        };
    });