
(function() {

    var app = angular.module("FandH");

    var MainCtrl = function($scope) {

        $scope.cita = "cita controller";
    };
    app.controller("MainCtrl",MainCtrl);
}());