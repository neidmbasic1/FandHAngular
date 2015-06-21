(function() {

    var app = angular.module("FandH");

    var DietsCtrl = function($scope,DataService,$rootScope) {

        loadDiets();
        loadPrograms();
        function loadDiets() {
                $rootScope.showLoader = true;
                DataService.list("diets").then(function (response) {
                        console.log('Loading Diets');
                        console.log(response);
                        $scope.diets = response.data;
                        console.log(response.data);
                        $rootScope.showLoader = false;
                    },
                    function (reason) {
                        console.log('reason');
                        console.log(reason);
                        $rootScope.showLoader = false;
                        $scope.message = "Error fetching data";
                    });
        }
        function loadPrograms() {
                //$rootScope.showLoader = true;
                DataService.list("programs").then(function (response) {
                        console.log('response');
                        console.log(response);
                        $scope.programs = response.data;
                        console.log(response.data);
                        //$rootScope.showLoader = false;
                    },
                    function (reason) {
                        console.log('reason');
                        console.log(reason);
                        //$rootScope.showLoader = false;
                        $scope.message = "Error fetching data";
                    });
            }

        $scope.AddDietToProgram = function AddTrainingToProgram(diet,program) {
            //$rootScope.showLoader = true;
            console.log(diet);
            console.log(program);
            //if(!program.Trainings){
            //    program.Trainings = [];
            //}
            //program.Trainings.push(training);
            program.DietId = diet.Id;
            console.log(program);
            DataService.put("programs",program.Id,program).then(function(response){
                    console.log('response');
                    console.log(response);
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

    var DietsDetailsCtrl = function($scope,DataService,$rootScope) {

        var id = $routeParams.id;
        loadDiets(id);
        function loadDiets() {
            $rootScope.showLoader = true;
            DataService.get("diets",id).then(function(response){
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
    };
    app.controller("DietsDetailsCtrl",DietsDetailsCtrl);
}());