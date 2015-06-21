(function(){

    var app = angular.module("FandH", ["ngRoute", "ngCookies" ]);

    app.constant("FandHConfig", {
        source: "http://localhost:11330/api/"
    });

    app.config(function($routeProvider, $locationProvider) { //sluzi za pozivanje stranice; routeProvider je jedan od objekata iz ngRoute sistema, ima zadatak da donese rutu u f-ju

            $routeProvider
                .when("/main", {templateUrl:"views/main.html", controller:"MainCtrl"})
                .when("/programs", {templateUrl: "views/programs.html", controller: "ProgramCtrl"})
                .when("/login", {templateUrl: "views/login.html", controller: "LogInCtrl"})
                .when("/registration", {templateUrl: "views/registrationView.html", controller: "RegistrationCtrl"})
                .when("/logout", {templateUrl: "views/login.html", controller: "LogoutCtrl"})
                .when("/trainings", {templateUrl: "views/trainings.html", controller: "TrainingsCtrl" })
                .when("/exercises", {templateUrl: "views/exercises.html", controller: "ExercisesCtrl" })
                .when("/diets", {templateUrl: "views/diets.html", controller: "DietsCtrl" })
                .when("/programdetail/:id", {templateUrl: "views/programDetail.html", controller: "ProgramDetailCtrl" })
                .when("/exercisedetail/:id", {templateUrl: "views/exerciseDetail.html", controller: "ExerciseDetailCtrl" })
                .when("/dietdetail/:id", {templateUrl: "views/dietDetail.html", controller: "DietsDetailsCtrl   " })
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