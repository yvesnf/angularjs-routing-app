routingApp.controller("CountryController", function CountryController(
    $scope,
    CountriesService,
    $routeParams
) {
    $scope.title = "COUNTRY CONTROLLER WORKING!";

    $scope.country = {};

    function init() {
        CountriesService.getCountry($routeParams.id)
            .then(function(res) {
                $scope.country = res;
                $scope.$apply();
            })
            .catch(function(reason) {
                console.log(reason);
            });
    }

    init();

});