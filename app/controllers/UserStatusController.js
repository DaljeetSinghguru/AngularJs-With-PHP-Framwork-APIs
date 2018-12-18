app.controller('UserStatusController', ['$scope', '$http', 'UserStatusService','menuService', '$route', '$rootScope',
    function ($scope, $http, UserStatusService, menuService, $route, $rootScope) {

       $scope.editingData = {};
       $scope.getuserstatus = function () {
            debugger
            UserStatusService.getstatus()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Message = data.getuserstatus;
                    $scope.empoyees = angular.copy($scope.Message);
                    $scope.search = "";
                    $scope.$apply();

                })

        }
       $scope.getuserstatus();
        $scope.pageName = "masterstatus";
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

      

        $scope.enabledEdit = [];
        $scope.editshow = [];

        $scope.addEmployee = function () {
            debugger
            var emp = {
                 userstatus:"", active:"", sequenceno:"", accessstartdate:"", accessenddate:"", disableEdit: false

            };
            
            $scope.empoyees.push(emp);
            $scope.editshow[$scope.empoyees.length - 1] = true;
            $scope.enabledEdit[$scope.empoyees.length - 1] = true;

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
            $scope.editingData[tableData.statusid] = false;
            if (data.userstatus == null || data.userstatus == undefined || data.userstatus == "") {
                alert("plese fill status");
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined) {
                alert("plese fill active");
                chkValidateUpload = 1;
            }
            if (data.sequenceno == null || data.sequenceno == undefined || data.sequenceno == "") {
                alert("plese fill sequenceno");
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {

                if (data.userstatusid == null || data.userstatusid == "" || data.userstatusid == undefined) {
                    //insert


                    UserStatusService.insertstatus(data.userstatus, data.active, "1", "0", data.sequenceno, loginuserid, 0,data.accessstartdate,data.accessenddate)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.userstatus[0].messageid == "0") {
                                alert("Record saved sucessfully");
                                $route.reload();
                            }
                            else {
                                alert(data.userstatus[0].message);
                            }

                        })

                }
                else {
                    //update
                    UserStatusService.insertstatus(data.userstatus, data.active, "2", data.userstatusid, data.sequenceno, 0, loginuserid, data.accessstartdate, data.accessenddate)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.userstatus[0].messageid == "0") {
                                alert("Record updated sucessfully");
                                $route.reload();
                            }
                            else {
                                alert(data.userstatus[0].message);
                            }

                        })
                }

            }



        };
        $scope.fillaccessstartdate = function () {
            alert(2);
        }
        $scope.deleteEmployee = function (index) {
            $scope.empoyees.splice(index, 1);
        }

        $scope.submitEmployee = function () {

            console.log("form submitted:" + angular.toJson($scope.empoyees));
        }

        $scope.opensearchfilter = function () {
            debugger;

        }
        $scope.searchme = function () {
            if ($scope.search) {
                UserStatusService.getstatusbysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.getstatus;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function () { $route.reload(); }
    }]);
