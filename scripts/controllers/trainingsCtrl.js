(function() {

    var app = angular.module("FandH");

    var TrainingsCtrl = function($scope,DataService, $rootScope) {

        loadTrainings();
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
    };
    app.controller("TrainingsCtrl",TrainingsCtrl);
}());