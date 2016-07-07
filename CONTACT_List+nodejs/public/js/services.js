'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

.service('ContactService', ['$http', function ($http) {

        this.getContacts = function() {
           return $http.get('ContactList.json')
            .success(function (data) {
                return data;
            })
            .error(function(err) {
              console.log('Fail to get contacts.');
            })

        }

}])



