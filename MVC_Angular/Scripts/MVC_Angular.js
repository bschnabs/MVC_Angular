var MVC_Angular = angular.module('MVC_Angular', ['ngRoute']);

MVC_Angular.controller('LandingPageController', LandingPageController);
MVC_Angular.controller('LoginController', LoginController);

MVC_Angular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider)
{
    $routeProvider.when('/routeOne', {
                      templateUrl: 'routesDemo/one',
                      controller: LoginController  
                  })
                  .when('/routeTwo/:thisIsJSParameter', {
                      templateUrl: function (params) { return '/routesDemo/two?mvcParam=' + params.thisIsJSParameter; }
                  })
                  .when('/routeThree', {
                      templateUrl: 'routesDemo/three'
                  })
                  .when('/login', {
                      templateUrl: 'routesDemo/one'
                      //controller: LoginController
                  });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

MVC_Angular.config(configFunction);