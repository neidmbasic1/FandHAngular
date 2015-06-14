
(function() {

    var app = angular.module("FandH");

    var MainCtrl = function($scope,DataService) {

        $scope.cita = "cita controller";
        loadPrograms();
        function loadPrograms() {
            //$rootScope.showLoader = true;
            DataService.list("users").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.programs = response.data;
                    //$rootScope.showLoader = false;
                },
                function(reason){
                    console.log('reason');
                    console.log(reason);
                    //$rootScope.showLoader = false;
                    $scope.message = "Error fetching data";
                });
        }
    };
    app.controller("MainCtrl",MainCtrl);
}());