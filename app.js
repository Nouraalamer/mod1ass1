(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.message = "";
        $scope.color = "black";
        $scope.tooMuch = function(){
            if($scope.message == ""){
                $scope.message = "please enter data first"
            }else if($scope.message.split(",").length < 3){
                $scope.message = "Enjoy!"
                $scope.color = "green";
            }else{
                $scope.message = "Too much!"
                $scope.color = "red";
            }
        };
    }
})();
