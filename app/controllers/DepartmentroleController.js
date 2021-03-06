﻿app.controller('DepartmentroleController', ['$scope', '$http', 'DepartmentroleService', 'departmentService', 'RoleService','menuService', '$route', '$rootScope',
    function ($scope, $http, DepartmentroleService, departmentService, RoleService,menuService, $route, $rootScope) {
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "departmentrole";
        $scope.getmenu = function () {
            debugger
                  menuService.getmenuhelp($scope.pageName)
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.menuhelp = data.getmenu[0].help;
                    $scope.$apply();
                })

        }
        $scope.getmenu();
        $scope.getDepartment = function () {
            debugger
            departmentService.getdepartment()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.departments = data.getdepartment;
                    $scope.$apply();
                })

        }
        $scope.getDepartment();

        $scope.getrole = function () {
            debugger
            RoleService.getrole()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.roles = data.getrole;
                    $scope.$apply();
                })

        }
        $scope.getrole();
        $scope.getDepartmentrole = function () {
            debugger
            DepartmentroleService.getdepartmentrole()
                .success(function (data, status, headers, config) {
                    debugger
                    if (data.getdepartmentrole.length > 0) {
                        $scope.Message = data.getdepartmentrole;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.search = "";
                        $scope.$apply();
                    }
                })

        }
        $scope.getDepartmentrole();
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
            $scope.editingData[tableData.Departmentroleid] = false;
            if (data.departmentid == null || data.departmentid == undefined || data.departmentid == "") {
                showwarning();
                $scope.msgwarning ="Please select department";
                chkValidateUpload = 1;
            }
            if (data.rolesid == null || data.rolesid == undefined || data.rolesid == "") {
                showwarning();
                $scope.msgwarning ="Please select role";
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

                if (data.departmentrolesid == null || data.departmentrolesid == "" || data.departmentrolesid == undefined) {
                    //insert
 DepartmentroleService.insertdepartmentrole("0",data.departmentid,data.rolesid, data.active, "1", data.sequenceno, loginuserid, 0)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.departmentrole[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.departmentrole[0].message;
                                $scope.getDepartmentrole(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.departmentrole[0].message; $scope.$apply();
                            }
                            

                        })

                }
                else {
                    //update
                    DepartmentroleService.insertdepartmentrole(data.departmentrolesid, data.departmentid, data.rolesid, data.active, "2", data.sequenceno, 0, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.departmentrole[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.departmentrole[0].message;
                                $scope.getDepartmentrole(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.departmentrole[0].message; $scope.$apply();
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
                DepartmentroleService.getdepartmentrolebysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.getdepartmentrole;
                        $scope.empoyees = angular.copy($scope.Message);

                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getdepartmentrole();
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
