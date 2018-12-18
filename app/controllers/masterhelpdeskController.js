app.controller('masterhelpdeskController', ['$scope', '$http', 'masterhelpdeskService', '$route', '$rootScope', 'menuService',
    function ($scope, $http, masterhelpdeskService, $route, $rootScope, menuService) {
        $scope.disable = 1;
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "mastercountry";
        $scope.getcountry = function () {
            debugger
            masterhelpdeskService.gethelpdesk()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.helpdesk = data.gethelpdesk;
                   
                    $scope.$apply();
                })
        }
        $scope.getcountry();
        menuService.getmenuhelp($scope.pageName)
            .success(function (data, status, headers, config) {
                debugger
               // $scope.MessageTitle = data.getmenu[0].help;
                //$scope.$apply();
            })

        $scope.enabledEdit = [];
        $scope.editshow = [];
        $scope.addEmployee = function () {
            var emp = {
                message: "", createdate: "", touser: "",
                fromuser: "", messagetype: "", messageid: "", disableEdit: false
            };
            $scope.countries.push(emp);
            $scope.editshow[$scope.countries.length - 1] = true;
            $scope.enabledEdit[$scope.countries.length - 1] = true;
        }
        $scope.editEmployee = function (index) {
            console.log("edit index" + index);
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = true;
        }
        var loginuserid = localStorage.getItem("loginuserid");
        $scope.update = function (tableData, data) {
            debugger
            var chkValidateUpload = 0;
            $scope.editingData[tableData.countryid] = false;
            if (data.country == null || data.country == undefined || data.country == "") {
                alert("plese fill country");
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined || data.active == "") {
                alert("plese fill active");
                chkValidateUpload = 1;
            }
            if (data.sequenceno == null || data.sequenceno == undefined || data.sequenceno == "") {
                alert("plese fill sequenceno");
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {
                if (data.countryid == null || data.countryid == "" || data.countryid == undefined) {
                    //insert
                    masterhelpdeskService.insertcountry(data.country, data.active, "1", "0", data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            $route.reload();
                        })
                }
                else {
                    //update
                    masterhelpdeskService.insertcountry(data.country, data.active, "2", data.countryid, data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            $route.reload();
                        })
                }
            }
        };
        $scope.deleteEmployee = function (index) {
            $scope.countries.splice(index, 1);
        }

        $scope.submitEmployee = function () {
            console.log("form submitted:" + angular.toJson($scope.countries));
        }

        $scope.opensearchfilter = function () {debugger;}
        $scope.searchme = function () {
            if ($scope.search) {
              
                masterhelpdeskService.gethelpdesksearch($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.helpdesk = data.gethelpdesk;

                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function () { $route.reload(); }
    }]);