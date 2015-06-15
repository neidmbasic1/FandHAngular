(function(){

    var app = angular.module("FandH", ["ngRoute", "ngCookies" ]);

    app.constant("FandHConfig", {
        source: "http://localhost:11330/api/"
    });

    app.config(function($routeProvider, $locationProvider) { //sluzi za pozivanje stranice; routeProvider je jedan od objekata iz ngRoute sistema, ima zadatak da donese rutu u f-ju

            $routeProvider
                .when("/main", {templateUrl: "views/main.html", controller: "MainCtrl"})
                .when("/login", {templateUrl: "views/login.html", controller: "LogInCtrl"})
                .when("/registration", {templateUrl: "views/registrationView.html", controller: "RegistrationCtrl"})
                 .when("/logout", {templateUrl: "views/login.html", controller: "LogoutCtrl"})
                .when("/trainings", {templateUrl: "views/trainings.html", controller: "TrainingsCtrl" })
                // .when("/diary/:id", {templateUrl: "views/diary.html", controller: "DiaryCtrl" })
                // .when("/projects", {templateUrl: "views/projectView.html", controller: "ProjectCtrl"})
                // .when("/persons", {templateUrl: "views/personView.html", controller: "PersonCtrl"})
                // .when("/teams", {templateUrl: "views/teamView.html", controller: "TeamCtrl"})
                // .when("/roles", {templateUrl: "views/roleView.html", controller: "RoleCtrl"})
                // .when("/dashboard", {templateUrl: "views/dashboard.html", controller: "DashboardCtrl"})
                // .when("/monthly", {templateUrl: "views/monthlyReport.html", controller: "MonthlyCtrl"})
                // .when("/annual", {templateUrl: "views/annualReport.html", controller: "AnnualCtrl"})
                // .when("/personal", {templateUrl: "views/personalReport.html", controller: "DiaryCtrl"})
                .otherwise({redirectTo: "/main"});
    });
        //.run(function($rootScope, $location, $cookies){
        //     $rootScope.$on("$routeChangeStart", function(event, next, current){
        //         if($rootScope.authenticated == null) {
        //             if(next.templateUrl != "views/login.html") //ako nije posao da se loguje preusmeriti ga na login
        //                 $location.path("/login");
        //         }
        //     })
        //});
}());