(function() {

    var app = angular.module("FandH");

    var ProgramDetailCtrl = function($scope,DataService,$routeParams) {

        var id = $routeParams.id;
        loadProgram(id);
        function loadProgram() {
            //$rootScope.showLoader = true;
            DataService.get("programs",id).then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.program = response.data;
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
        $scope.editProgram = function(program){
            DataService.put("programs",program.Id,program).then(function(response){
                    console.log('response');
                    console.log(response);
                    //$scope.program = response.data;
                    loadProgram();
                    $scope.edit = false;
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
    app.controller("ProgramDetailCtrl",ProgramDetailCtrl);
}());