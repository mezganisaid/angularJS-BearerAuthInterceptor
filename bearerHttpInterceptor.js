var app = angular.module('mezganiApp', ['ngRoute']);
    /*.config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
    });*/

app.factory('BearerAuthInterceptor', function ($window, $q) {
    return {
        request: function(config) {

            $window.localStorage.setItem('token', '3423432SD3423432SDFSFSDFSDF53453453SDGDGD43CXBDHDFHKLJLO99797FSFSDF3423432SDFSFSDFSDF53453453SDGDGD43CXBDHDFHKLJLO99797SDF53453453SDG3423432SDFSFSDFSDF53453453SDGDGD43CXBDHDFHKLJLO99797DGD43CXBDHDFHKLJLO99797')
            config.headers = config.headers || {};
            if ($window.localStorage.getItem('token')) {
                config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
            }
            return config || $q.when(config);
        },
        response: function(response) {
            if (response.status === 401) {
                //  Redirect user to login page / signup Page.
            }
            return response || $q.when(response);
        }
    };
});

// Register the previously created AuthInterceptor.
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('BearerAuthInterceptor');
});