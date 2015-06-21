
(function() {

    var app = angular.module("FandH");

    var MainCtrl = function($scope,DataService, $rootScope) {

        loadTrainings();
        loadDiets();

        function loadTrainings() {
            $rootScope.showLoader = true;
            DataService.list("trainings").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.trainings = response.data;
                    console.log(response.data);
                    $rootScope.showLoader = false;
                },
                function(reason){
                    console.log('reason');
                    console.log(reason);
                    $rootScope.showLoader = false;
                    $scope.message = "Error fetching data";
                });
        }

        function loadDiets() {
            $rootScope.showLoader = true;
            DataService.list("diets").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.diets = response.data;
                    console.log(response.data);
                    $rootScope.showLoader = false;
                },
                function(reason){
                    console.log('reason');
                    console.log(reason);
                    $rootScope.showLoader = false;
                    $scope.message = "Error fetching data";
                });
        }

        $scope.getTimes=function(n){
            return new Array(n);
        };

    };
    app.controller("MainCtrl",MainCtrl);
}());