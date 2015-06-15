(function () {

    var app = angular.module("FandH");

    var RegistrationCtrl = function ($scope, $rootScope, $http, DataService,$location) {

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

                promise = DataService.post("users", $scope.edit);
                clearData();

            promise.then(function(response){ $location.path("/login"); },
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



