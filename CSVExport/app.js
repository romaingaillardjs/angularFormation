var app = angular.module("csvApp", ["ngSanitize", "ngCsv"]);

app.controller("csvController", ["$scope",
  function($scope) {
    $scope.datos = [{
      id: 1,
      primerNombre: 'Juan',
      segundoNombre: 'Mario',
      primerApellido: 'Perez',
      segundoApellido: 'Maldonado',
      fechaNacimiento: '23-12-1985'
    }, {
      id: 2,
      primerNombre: 'Jorge',
      segundoNombre: 'Alfonzo',
      primerApellido: 'Quinto',
      segundoApellido: 'Marroquin',
      fechaNacimiento: '15-01-1988'
    }, {
      id: 3,
      primerNombre: 'Carlos',
      segundoNombre: 'Alberto',
      primerApellido: 'Vargas',
      segundoApellido: 'Martinez',
      fechaNacimiento: '09-03-1990'
    }, {
      id: 4,
      primerNombre: 'Mario',
      segundoNombre: 'Alvaro',
      primerApellido: 'Hernadez',
      segundoApellido: 'Morales',
      fechaNacimiento: '23-02-1984'
    }, {
      id: 5,
      primerNombre: 'Marlon',
      segundoNombre: 'Federico',
      primerApellido: 'Lopez',
      segundoApellido: 'Padilla',
      fechaNacimiento: '01-03-1976'
    }, {
      id: 6,
      primerNombre: 'Daniel',
      segundoNombre: 'Francisco',
      primerApellido: 'Herrera',
      segundoApellido: 'Perdomo',
      fechaNacimiento: '22-03-1989'
    }, {
      id: 7,
      primerNombre: 'Cesar',
      segundoNombre: 'Jaime',
      primerApellido: 'Arroche',
      segundoApellido: 'Pedrosa',
      fechaNacimiento: '18-02-1987'
    }];
  }
]);