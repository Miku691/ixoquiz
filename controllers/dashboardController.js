app.controller("dashboardController", ['$scope', 'ApiService', 'FirebaseAppService', '$rootScope', '$location',
    function ($scope, $mdDialog, ApiService, FirebaseAppService, $location,
        $rootScope,
    ) {
        const init = () => {
            //variable 
        }
        $scope.dashboardMsg = "This is dashboard";
        $scope.openApp = (category) => {
            $location.path('/' + category);
        }
        init();
        
    }
]);

