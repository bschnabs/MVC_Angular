var LandingPageController = function($scope)
{
    $scope.models = {
        helloAngular: 'My App'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
}

LandingPageController.$inject = ['$scope'];