app.controller('helpdeskController', ['$scope', '$http', 'helpdeskService', '$route', '$rootScope', 'menuService',
    function ($scope, $http, helpdeskService, $route, $rootScope, menuService) {
        $scope.pageName = "helpdesk";
        $scope.getmenu = function () {
            //debugger

            menuService.getmenuhelp($scope.pageName)
                .success(function (data, status, headers, config) {
                    //debugger
                    $scope.Message = data.getmenu;
                    $scope.menuhelp = data.getmenu[0].help;
                    $scope.$apply();

                })

        }
        $scope.getmenu();
        $scope.disable = 1;
        var loginusername = localStorage.getItem("loginusername");
        var loginuserid = localStorage.getItem("loginuserid");
        $scope.GenerateHelpRequestSupport = function () {
            helpdeskService.inserthelpdesk($scope.GetHelpDeskremarks, loginuserid)
                            .success(function (data, status, headers, config) {
                                debugger
                                alert("Ticket created successfully");
                                $route.reload();
                            })
        }


        helpdeskService.gethelpdesk(loginuserid)
            .success(function (data, status, headers, config) {
                debugger

                $scope.helpdesk = data.gethelpdesk;
                $scope.$apply();
            })



    }]);
