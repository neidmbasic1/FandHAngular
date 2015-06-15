(function () {

    var app = angular.module("FandH");

    var LogInCtrl = function ($scope, $rootScope, LoginService, $location) {

        $scope.user = LoginService.getCredentials();

        $scope.message = "Provide your credentials.";

        $scope.identify = function(user) {
            tryLogin(user);
        };

        function tryLogin(user) {
            console.log('tryLogin');
            LoginService.login(user).then(

                function (response) {
                    console.log('response');
                    console.log(response);
                    LoginService.clearCredentials();
                    if(user.remember) LoginService.setCredentials(user);
                    $rootScope.currentUser = response.data;
                    $rootScope.authenticated = true;
                    $rootScope.confirmed = $rootScope.currentUser.ConfirmedUser;
                    $location.path("/main");
                },

                function(reason) {
                    console.log('reason');
                    console.log(reason);
                    LoginService.clearCredentials();
                    $rootScope.currentuser = null;
                    $rootScope.authenticated = null;
                    $scope.message = "Bad credentials! Please try again.";
                }
            )}

    };
    app.controller("LogInCtrl",LogInCtrl);
}());