let app = angular.module("ixoQuizUI", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $rootScope) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'
        }).
        when('/quiz', {
            templateUrl: 'views/quiz/ixoquiz.html',
            controller: 'ixoquizController'
        }).
        when('/quiz/:categoryId', {
            templateUrl: function(params) {
                return 'views/quiz/category/' + params.categoryId + '.html';
            },
            controller: 'categoryController'
        }).
        when('/quiz/:categoryId/:postId', {
            templateUrl: function(params) {
                return 'views/quiz/posts/' + params.categoryId + '/' + params.postId + '.html';
            },
            controller: 'postController'
        }).
        otherwise({
            redirectTo: '/'
        });
        
    
    $locationProvider.hashPrefix('');
    // $locationProvider.html5Mode(true);
}
]);



app.controller('appController', ($scope, $rootScope, FirebaseAppService, ApiService) => {

    $scope.init = function () {

        //define service call details
        $scope.baseUrlFirebaseService = '../resources/quiz-content/';
        //$scope.checkUserLogedState();
    }

    $rootScope.customizeAndCallAPI = (endpoint, type, data, callingType) => {
        $scope.serviceApi = $scope.baseUrlFirebaseService + endpoint;

        if(type === 'post'){
            ApiService.performPostApiCall($scope.serviceApi, data)
            .then(function (response) {
                console.log("Dialog saved:", response);
            })
            .catch(function (error) {
                console.error("Error saving dialog:", error);
            });
        }

        else if(type === 'get'){
            if(callingType == 'async')
                return ApiService.performGetApiCallSync($scope.serviceApi);
            else if(callingType === 'sync')
                return ApiService.performGetApiCall($scope.serviceApi);
        }

        else if(type === 'put'){
            ApiService.performPutApiCall($scope.serviceApi, data)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
        }

        else if(type === 'delete'){
            ApiService.performDeleteApiCall($scope.serviceApi)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    // $scope.checkUserLogedState = async () => {
    //     const user = await FirebaseAppService.checkUserLoginState();
    //     if (user) {
    //         $rootScope.userLogedIn = true;
    //         var path = window.location.href.split("#")[0] + "#/" + '';
    //         window.open(path, "_self");
    //     }
    //     else {
    //         var path = window.location.href.split("#")[0] + "#/" + 'login';
    //         window.open(path, "_self");
    //     }
    // }

    $scope.init();
})