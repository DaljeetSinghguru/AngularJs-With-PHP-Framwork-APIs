app.controller('ModulesController', ['$scope', '$http', 'ModulesService', 'menuService', '$route', '$rootScope',
    function ($scope, $http, ModulesService, menuService, $route, $rootScope) {
        $scope.editingData = {};
        $scope.pageName = "mastermodule";
 $scope.getmodules = function () {
            debugger
            ModulesService.getmodules()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Message = data.getmodules;
                    $scope.empoyees = angular.copy($scope.Message);
                    $scope.search = "";
                    $scope.$apply();

                })

 }
 menuService.getmenuhelp($scope.pageName)
     .success(function (data, status, headers, config) {
         debugger
         $scope.menuhelp = data.getmenu[0].help;
         $scope.$apply();
     })
        $scope.getmodules();
     $scope.enabledEdit = [];
        $scope.editshow = [];

        $scope.addEmployee = function () {
            var emp = {
                message: "", createdate: "", touser: "",
                fromuser: "", modules: "", messageid: "", disableEdit: false
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
            $scope.editingData[tableData.modulesid] = false;
            if (data.modules == null || data.modules == undefined || data.modules == "") {
                showwarning();
                $scope.msgwarning ="plese fill modules";
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined) {
                showwarning();
                $scope.msgwarning ="plese fill active";
                chkValidateUpload = 1;
            }
            if (data.sequenceno == null || data.sequenceno == undefined || data.sequenceno == "") {
                showwarning();
                $scope.msgwarning ="plese fill sequenceno";
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {

                if (data.modulesid == null || data.modulesid == "" || data.modulesid == undefined) {
                    //insert
                    ModulesService.insertmodules(data.modules, data.active, "1", "0", data.sequenceno, loginuserid, 0)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.modules[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.modules[0].message;
                                $scope.getmodules();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.modules[0].message;
                            }

                        })

                }
                else {
                    //update
                    ModulesService.insertmodules(data.modules, data.active, "2", data.modulesid, data.sequenceno, 0, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.modules[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.modules[0].message;
                                $scope.getmodules();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.modules[0].message;
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
                ModulesService.getmodulesbysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.getmodules;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getmodules();
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
