/**
 * Created by Layla on 21-Apr-15.
 */

(function () {

    var app = angular.module("FandH");

    var LogInCtrl = function ($scope, $rootScope, LoginService, $location) {

  
    $scope.user = LoginService.getCredentials();

        //tryLogin($scope.user);

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
    

     var LogoutCtrl = function ($scope, $rootScope, $location, LoginService) {

         var clearAll = function(obj){

             $rootScope.currentUser = null;
             $rootScope.authenticated = null;
             $location.path("/login");
         }
         LoginService.logout().then(clearAll, clearAll);

     };
    };
    app.controller("LogInCtrl",LogInCtrl);
}());