angular.module('single-page', ['ngTasty', 'firebase'])

.controller('SinglePageController', ['$scope', '$firebase',
  function($scope, $firebase) {
  
    // firebase
//    var ref = new Firebase("https://blinding-torch-3142.firebaseio.com/single-page");
//    var sync = $firebase(ref);
    
    data = [
        { 'index': 1, 'name': 'Ritual Coffee Roasters', 'location': 'Hayes Valley'},
        { 'index': 2, 'name': 'Blue Bottle', 'location': 'Hayes Valley' },
        { 'index': 3, 'name': 'CoffeeShop', 'location': 'Bernal Heights' },
        { 'index': 4, 'name': 'Spike\'s Coffee & Teas', 'location': 'Castro' },
        { 'index': 5, 'name': 'La Boulange', 'location': 'Cole Valley' },
        { 'index': 6, 'name': 'Dynamo Donut and Coffee', 'location': 'Cow Hollow' },
        { 'index': 7, 'name': 'The Mill', 'location': 'Divisadero' },
        { 'index': 8, 'name': 'Piccino Coffee Bar', 'location': 'Dogpatch' },
        { 'index': 9, 'name': 'Philz', 'location': 'Downtown' },
        { 'index': 10, 'name': 'Duboce Park Cafe', 'location': 'Duboce Triangle' },
        { 'index': 11, 'name': 'Blue Bottle', 'location': 'Embarcadero' },
        { 'index': 12, 'name': 'Four Barrel', 'location': 'Excelsior' }
      ];
//    sync.$set(data);

//    $scope.list = sync.$asObject();

    // ngTasty
    $scope.itemsPerPage = 5;
    $scope.listItemsPerPage = [5, 10];

    $scope.resource = {
      "header": [
        { "index": "Index" },
        { "name": "Name" },
        { "location": "Location" }
      ],
      "rows": data,
      "sortBy": "name",
      "sortOrder": "asc"
    };
    
  }
]);

