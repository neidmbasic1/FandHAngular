(function() {

    var app = angular.module("FandH");

    var TrainingsCtrl = function($scope,DataService) {

        loadTrainings();
        loadPrograms();
        function loadTrainings() {
            //$rootScope.showLoader = true;
            DataService.list("trainings").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.trainings = response.data;
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
        function loadPrograms() {
            //$rootScope.showLoader = true;
            DataService.list("programs").then(function(response){
                    console.log('response');
                    console.log(response);
                    $scope.programs = response.data;
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
        $scope.AddTrainingToProgram = function AddTrainingToProgram(training,program) {
            //$rootScope.showLoader = true;
            console.log('pusham trening');
            console.log(training);
            console.log(program);
            if(!program.Trainings){
                program.Trainings = [];
            }
            program.Trainings.push(training);
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
    app.controller("TrainingsCtrl",TrainingsCtrl);
}());