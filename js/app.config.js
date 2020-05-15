angular.module("routingApp").config([
    "$routeProvider",

    function config($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "home.html",
                controller: "HomeController",
            })
            .when("/countries", {
                templateUrl: "countries.html",
                controller: "CountriesController",
            })
            .when("/country/:id", {
                templateUrl: "country.html",
                controller: "CountryController",
            })
            .otherwise("/home");
    },
]);