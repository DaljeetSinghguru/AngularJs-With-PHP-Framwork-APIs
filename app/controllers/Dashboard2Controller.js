app.controller('Dashboard2Controller', ['$scope', '$http', 'DashboardService', '$rootScope', '$sce','ViewVariablesService',
    function ($scope, $http, DashboardService, $rootScope, $sce, ViewVariablesService) {
        debugger
        $scope.AddressofTableau = ViewVariablesService.GetAddressofTableau();
        DashboardService.getdashboard()
            .success(function (data, status, headers, config) {
                debugger
                $rootScope.tableaukey = data.key;
            
                $scope.url = $scope.AddressofTableau+"/"+$rootScope.tableaukey+"/views/Superstore/Customers?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no";

                $scope.url2 = "<iframe src="+$scope.url+" width='1050' height='600'></iframe>";
                $scope.iframelyHtml2 = $sce.trustAsHtml($scope.url2);
                $scope.$apply();
            })
    }]);
