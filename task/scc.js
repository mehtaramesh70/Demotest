

'use strict';

var app = angular.module('demo', ['ngSanitize', 'ui.select']);
app.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
 
      out = items;
    }

    return out;
  }
});

app.controller('myCtrl', function($scope, $http) {
  $scope.disabled = undefined;

  $scope.enable = function() {
    $scope.disabled = false;
  };

  $scope.disable = function() {
    $scope.disabled = true;
  };

  $scope.clear = function() {
    $scope.person.selected = undefined;
  };

  $scope.person = {};
  $scope.people = [
    {id:1, name: 'Rahul',      email: 'rahul@email.com',      age: 10},
    { id:2, name: 'Sudan',    email: 'sudan@email.com',    age: 12},
    { id:3, name: 'Mayank',  email: 'mayank@email.com',  age: 30},
    {id:4, name: 'Samantha',  email: 'samantha@email.com',  age: 31},
    { id:5, name: 'Arunraj', email: 'arunraj@email.com', age: 16 },
    { id:6, name: 'Natasha',   email: 'natasha@email.com',   age: 54},
    { id:7, name: 'Nicole',    email: 'nicole@email.com',    age: 43},
    { id:8, name: 'Adrian',    email: 'adrian@email.com',    age: 21}
  ];



 
});
