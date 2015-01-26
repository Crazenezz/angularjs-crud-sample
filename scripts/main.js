angular.module('single-page', ['ngTasty'])
  .controller('ListController', function($scope) {
  
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
    
    index = 13;
    $scope.index = index;
    
    $scope.itemsPerPage = 5;
    $scope.listItemsPerPage = [5, 10];

    $scope.resource = {
      "header": [
        { "index": "Index" },
        { "name": "Name" },
        { "location": "Location" }
      ],
      "rows": data,
      "sortBy": "index",
      "sortOrder": "dsc"
    };
    
    $scope.newData = function() {
      if (this.index !== undefined && this.name !== undefined && this.location !== undefined) {
        selected_data = data.filter(function(v) { return v['index'] == index; });
        if (selected_data === undefined)
          data.push({ 'index': this.index, 'name': this.name, 'location': this.location });
        else {
          for (var i = 0; i < data.length; i++) {
            if(this.index === data[i].index){
              data[i].index = this.index;
              data[i].name = this.name;
              data[i].location = this.location;
            }
          }
        }
        
        $scope.resource = {
          "header": [
            { "index": "Index" },
            { "name": "Name" },
            { "location": "Location" }
          ],
          "rows": data,
          "sortBy": "index",
          "sortOrder": "dsc"
        };
        
        index++;
        this.index = index;
        this.name = undefined;
        this.location = undefined;
      }
    };
    
    $scope.resetData = function() {
      this.index = index;
      this.name = undefined;
      this.location = undefined;
    };
    
    $scope.updateData = function(index) {
      selected_data = data.filter(function(v) { return v['index'] == index; });
      $scope.index = selected_data[0]['index'];
      $scope.name = selected_data[0]['name'];
      $scope.location = selected_data[0]['location'];
      
//      console.log(selected_data);
    };
    
    $scope.deleteData = function(index){
      data = data.filter(function(v) { return v['index'] != index; });
      
      $scope.resource = {
        "header": [
          { "index": "Index" },
          { "name": "Name" },
          { "location": "Location" }
        ],
        "rows": data,
        "sortBy": "index",
        "sortOrder": "dsc"
      };
    };
  });
