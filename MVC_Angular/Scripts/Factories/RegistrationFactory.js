var RegistrationFactory = function($http, $q, $location) 
{
    return function (emailAddress, password, confirmPassword)
    {
        var deferredObject = $q.defer();

        $http.post(
            '/Account/Register',
            {
                Email: emailAddress,
                Password: password,
                ConfirmPassword: confirmPassword
            }).
            success(function (data) {
                if (data == "True")
                    deferredObject.resolve({ success: true });
                else if(data == "False")
                {
                    $location.path('/error');
                }
                else
                    deferredObject.resolve({ success: false });
            }).
            error(function () {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }
}

RegistrationFactory.$inject = ['$http', '$q', '$location'];