var MVC_Angular = angular.module('MVC_Angular', ['ui.router', 'ui.bootstrap']);

MVC_Angular.controller('LandingPageController', LandingPageController);
MVC_Angular.controller('LoginController', LoginController);
MVC_Angular.controller('RegisterController', RegisterController);

MVC_Angular.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
MVC_Angular.factory('LoginFactory', LoginFactory);
MVC_Angular.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider)
{
    $locationProvider.hashPrefix('!').html5Mode('true');

    $stateProvider
            .state('stateOne', {
                url: '/stateOne?jsParam',
                views: {
                    "containerOne": {
                        templateUrl: '/routesDemo/one'
                    },
                    "containerTwo": {
                        templateUrl: function (params) { return '/routesDemo/two?mvcParam=' + params.jsParam; }
                    },
                    "nestedView@stateOne": {
                        templateUrl: '/routesDemo/four'
                    }
                }
            })
            .state('stateTwo', {
                url: '/stateTwo',
                views: {
                    "containerOne": {
                        templateUrl: '/routesDemo/one'
                    },
                    "containerTwo": {
                        templateUrl: '/routesDemo/three'
                    }
                }
            })
            .state('stateThree', {
                        url: '/stateThree?donuts',
                        views: {
                            "containerOne": {
                                templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                            },
                            "containerTwo": {
                                templateUrl: '/routesDemo/three'
                            }
                        }
                    })
            .state('loginRegister', {
                url: '/loginRegister?returnUrl',
                views: {
                    "containerOne": {
                        templateUrl: '/Account/Login',
                        controller: LoginController
                    },
                    "containerTwo": {
                        templateUrl: '/Account/Register',
                        controller: RegisterController
                    }
                }
            });

                  //    when('/error', {
                  //    templateUrl: 'error/error'
                  //});

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

MVC_Angular.config(configFunction);