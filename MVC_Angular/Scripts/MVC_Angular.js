var MVC_Angular = angular.module('MVC_Angular', ['ngRoute']);

MVC_Angular.controller('LandingPageController', LandingPageController);
MVC_Angular.controller('LoginController', LoginController);
MVC_Angular.controller('RegisterController', RegisterController);

MVC_Angular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
MVC_Angular.factory('LoginFactory', LoginFactory);
MVC_Angular.factory('RegistrationFactory', RegistrationFactory);

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
                      templateUrl: 'account/Login',
                      controller: LoginController
                  })
                  .when('/register', {
                      templateUrl: 'account/register',
                      controller: RegisterController
                  });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

MVC_Angular.config(configFunction);