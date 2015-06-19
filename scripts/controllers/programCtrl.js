
(function() {

    var app = angular.module("FandH");

    var ProgramCtrl = function($scope,DataService, $rootScope) {
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
        /*
        $scope.ifAuthor = function(program) {
            console.log('program.AuthorId');
            console.log(program.AuthorId);
            if(program.AuthorId == $rootScope.currentUser.Id){
                return true;
            }
        };
        */


        $scope.addProgram = function(program) {
            // console.log('$rootScope.currentUser.Id');
            //console.log($rootScope.currentUser.Id);
            program.AuthorId = $rootScope.currentUser.Id;
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
    app.controller("ProgramCtrl",ProgramCtrl);
}());