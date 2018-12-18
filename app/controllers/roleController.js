app.controller('RoleController', ['$scope', '$http', 'RoleService','menuService', '$route', '$rootScope',
    function ($scope, $http, RoleService, menuService,$route, $rootScope) {
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};


        $rootScope.LocalStoragetitle = localStorage.getItem("LocalStoragetitle");
        $scope.getrole = function () {
            debugger

            RoleService.getrole()
                .success(function (data, status, headers, config) {
                    debugger
                    if (data.getrole != undefined) {
                        if (data.getrole.length > 0) {
                            $scope.Message = data.getrole;
                            $scope.empoyees = angular.copy($scope.Message);
                            $scope.search = "";
                            $scope.$apply();
                        }
                    }

                })

        }
        $scope.getrole();
        $scope.pageName = "masterrole";
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
            var emp = {
                disableEdit: false
            };

            if ($scope.empoyees == undefined) {
                debugger;
                $scope.empoyees = (emp);
                $scope.editshow[0] = true;
                $scope.enabledEdit[0] = true;
            } else {
                $scope.empoyees.push(emp);
                $scope.editshow[$scope.empoyees.length - 1] = true;
                $scope.enabledEdit[$scope.empoyees.length - 1] = true;
            }

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
            $scope.editingData[tableData.roleid] = false;
            if (data.roles == null || data.roles == undefined || data.roles == "") {
                showwarning();
                $scope.msgwarning ="Please fill role";
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined) {
                showwarning();
                $scope.msgwarning ="Please fill active";
                chkValidateUpload = 1;
            }
            if (data.sequenceno == null || data.sequenceno == undefined || data.sequenceno == "") {
                showwarning();
                $scope.msgwarning ="Please fill sequenceno";
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {

                if (data.rolesid == null || data.rolesid == "" || data.rolesid == undefined) {
                    //insert


                    RoleService.insertrole(data.roles, data.active, "1", "0", data.sequenceno, loginuserid, 0)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.role[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.role[0].message;
                                $scope.getrole();
                                $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.role[0].message; $scope.$apply();
                            }

                        })

                }
                else {
                    //update
                    RoleService.insertrole(data.roles, data.active, "2", data.rolesid, data.sequenceno, 0, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.role[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.role[0].message;
                                $scope.getrole(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.role[0].message; $scope.$apply();
                            }

                        })
                }

            }



        };
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
                RoleService.getrolebysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.getrole;
                        $scope.empoyees = angular.copy($scope.Message);

                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getrole();
        }

        $("#success-alert").hide();
        function showAlert() {
            $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(500);
            });
        }
        $("#success-warning").hide();
        function showwarning() {
            $("#success-warning").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-warning").slideUp(500);
            });
        }
    }]);
