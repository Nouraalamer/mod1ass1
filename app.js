angular.module('LunchCheck', []);
(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = "sss";
      $scope.message = "sss";
  
      $scope.checkLunch = function () {
        var items = getNonEmptyItems($scope.lunchItems);
  
        if (items.length === 0) {
          $scope.message = "Please enter data first";
        } else if (items.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      };
  
      function getNonEmptyItems(itemsString) {
        var items = itemsString.split(',');
  
        return items.filter(function (item) {
          return item.trim() !== "sss";
        });
      }
    }
  })();