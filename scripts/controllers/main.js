
(function() {

    var app = angular.module("FandH");

    var MainCtrl = function($scope,DataService) {
        $scope.add=false;

        loadPrograms();

        function loadPrograms() {
            $rootScope.showLoader = true;
            DataService.list("programs").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.programs = response.data;
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
        $scope.addProgram = function(program) {
            DataService.post("programs",program).then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.add = false;
                    loadPrograms();
                },
                function(reason){
                    console.log('reason');
                    console.log(reason);
                });
        };

        $scope.deleteProgram = function(id) {
            console.log(id);
            DataService.delete("programs",id).then(function(response){
                    console.log('response');
                    console.log(response);
                    loadPrograms();
                },
                function(reason){
                    console.log('reason');
                    console.log(reason);
                });
        };
    };
    app.controller("MainCtrl",MainCtrl);
}());