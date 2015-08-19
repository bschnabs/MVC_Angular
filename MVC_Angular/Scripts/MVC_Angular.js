var MVC_Angular = angular.module('MVC_Angular', ['ngRoute']);

MVC_Angular.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider)
{
    $routeProvider.when('/routeOne', { templateUrl: 'routesDemo/one' })
                  .when('/routeTwo/:thisIsJSParameter', { templateUrl: function (params) { return '/routesDemo/two?mvcParam=' + params.thisIsJSParameter; }})
                  .when('/routeThree', { templateUrl: 'routesDemo/three' });
}

configFunction.$inject = ['$routeProvider'];

MVC_Angular.config(configFunction);