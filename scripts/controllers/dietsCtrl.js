(function() {

    var app = angular.module("FandH");

    var DietsCtrl = function($scope,DataService) {

        loadPrograms();
        function loadPrograms() {
            //$rootScope.showLoader = true;
            DataService.list("diets").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.diets = response.data;
                    console.log(response.data);
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
    app.controller("DietsCtrl",DietsCtrl);
}());