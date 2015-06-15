
(function() {

    var app = angular.module("FandH");

    var HeaderCtl = function($scope) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    };
    app.controller("HeaderCtl",HeaderCtl);
}());






