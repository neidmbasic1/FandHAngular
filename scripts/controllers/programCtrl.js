
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

        $scope.ifAuthor = function(program) {
            if($rootScope.currentUser && program.Author) {
                if(program.Author.Id == $rootScope.currentUser.Id){
                    return true;
                }
            }
            return false;

        };



        $scope.addProgram = function(program) {
            console.log($rootScope.currentUser.Id);
            program.AuthorId = $rootScope.currentUser.Id;
            console.log(program);
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

    var ProgramDetailCtrl = function($scope,DataService,$routeParams, $rootScope) {

        var id = $routeParams.id;
        loadProgram(id);
        function loadProgram() {
            $rootScope.showLoader = true;
            DataService.get("programs",id).then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.program = response.data;
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
        $scope.editProgram = function(program){
            DataService.put("programs",program.Id,program).then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.program = response.data;
                    loadProgram();
                    $scope.edit = false;
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
    app.controller("ProgramDetailCtrl",ProgramDetailCtrl);



}());