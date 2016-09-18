(function() {

'use strict';

  angular.module('myFirstApp', []).controller('myFirstController',function($scope){

    $scope.name ="dotan";
    $scope.sayHello = function() {
      return "hello courrrsera";
    };
  });


})();
