(function(){
    var app = angular.module("FandH");

    var DataService=function($http, FandHConfig) {

        //var source = "http://localhost:14720/api/";
        //var source = "http://api.suleschool.com/api/";
        var source = FandHConfig.source;

        return {
            list: function(set) { return $http.get(source + set); },

            get: function(set, id) { return $http.get(source + set + "/" + id); },

            post: function(set, obj) { return $http( { method: "post", url: source + set, data: obj} ); },

            put: function(set, id, obj) { return $http( { method: "post", url: source + set + "/" + id, data: obj}); },

            delete: function(set, id) {return $http({ method: "post", url: source + set + "/-" + id, data: null});}
        }
    };

    app.factory("DataService", DataService);

}());