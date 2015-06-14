(function () {

    var app = angular.module("FandH");
    
    var RegistrationCtrl = function ($scope, $rootScope, $http, DataService) {

        /*
        loadUsers();

        function loadUsers() {
            $rootScope.showLoader = true;
            DataService.list("users").then(function (response) {
                    $scope.projects = response.data;
                    $rootScope.showLoader = false;
                },
                function (reason) {
                    $rootScope.showLoader = false;
                    $scope.message = "Error fetching data";
                });
        }*/

        $scope.updateUser = function(updatedUser){
            $scope.edit = updatedUser;
            var promise;
            if($scope.edit.id == 0) {
                promise = DataService.post("users", $scope.edit);
                clearData();
            }
            else {
                promise = DataService.put("users", $scope.edit.id, $scope.edit);
                clearData();
            }
            promise.then(function(response){ loadUsers() },
                function(reason){ $scope.message = "Error fetching data"});
        };

        function clearData() {
            $scope.edit = {
                id: 0,
                name: ""
            };
        }
    };


    app.controller("RegistrationCtrl",RegistrationCtrl);
}());



