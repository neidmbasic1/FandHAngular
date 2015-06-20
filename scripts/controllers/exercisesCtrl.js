(function() {

    var app = angular.module("FandH");

    var ExercisesCtrl = function($scope,DataService, $rootScope) {

        loadExercises();
        function loadExercises() {
            $rootScope.showLoader = true;
            DataService.list("exercises").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.exercises = response.data;
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
    app.controller("ExercisesCtrl",ExercisesCtrl);

    var ExerciseDetailCtrl = function($scope,DataService,$routeParams) {

        var id = $routeParams.id;
        loadExercise(id);
        function loadExercise() {
            $rootScope.showLoader = true;
            DataService.get("ecercises",id).then(function(response){
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
    app.controller("ExerciseDetailCtrl",ExerciseDetailCtrl);
}());