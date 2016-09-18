(function () {
'use strict';


angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){

  $scope.message="";
  $scope.lunchItems="";



  $scope.checkIfTooMany = function(){
      if($scope.lunchItems=="")
      {
          $scope.message="Empty";
      }
      else {
             SetMessageByItems();
          }
      };


        var SetMessageByItems = function() {
            var itemsArray = $scope.lunchItems.split(",");
            var message ="";
            if(itemsArray.length<4)
            {
             message="Enjoy";
            }
            else {
              message="Too much!";
            }

            $scope.message=message;
          };
}


})();
