app.controller('DashboardMain1Controller', ['$scope', '$http', 'DashboardService', '$rootScope', '$sce', 'ViewVariablesService','$route',
    function ($scope, $http, DashboardService, $rootScope, $sce, ViewVariablesService, $route) {
        debugger

        
        $scope.AddressofTableau = ViewVariablesService.GetAddressofTableau();

        DashboardService.getdashboard()
            .success(function (data, status, headers, config) {
                debugger
                $rootScope.tableaukey = data.key;
             
                $scope.url = $scope.AddressofTableau+"/" + $rootScope.tableaukey + "/views/Mindvalleysalesaccountingdashboard/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no";

                $scope.url1 = "<iframe src="+$scope.url+" width='1050' height='600'></iframe>";
                $scope.iframelyHtml = $sce.trustAsHtml($scope.url1);
                $scope.$apply();
            })

        setTimeout(function () {
            if ($scope.url1 == null || $scope.url1 == "" || $scope.url1 == undefined) { $route.reload(); }
        }, 2000);
    }]);
