app.controller('TableaulicenceTypeController', ['$scope', '$http', 'TableaulicenceTypeService', '$route', '$rootScope', 'menuService',
    function ($scope, $http, TableaulicenceTypeService, $route, $rootScope, menuService) {
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "mastertableaulicencetype";
        $scope.gettableaulicencetype = function () {
            debugger
            TableaulicenceTypeService.getTableaulicenceType()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Message = data.gettableaulicencetype;
                    $scope.tableaulicence = angular.copy($scope.Message);
                    $scope.$apply();
                })
        }
        $scope.gettableaulicencetype();
        menuService.getmenuhelp($scope.pageName)
            .success(function (data, status, headers, config) {
                debugger
                $scope.menuhelp = data.getmenu[0].help;
                $scope.$apply();
            })
      
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
            $scope.editingData[tableData.tableaulicencetypeid] = false;
            if (data.tableaulicencetype == null || data.tableaulicencetype == undefined || data.tableaulicencetype == "") {
                showwarning();
                $scope.msgwarning ="Please fill tableaulicencetype";
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined || data.active == "") {
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
                if (data.tableaulicencetypeid == null || data.tableaulicencetypeid == "" || data.tableaulicencetypeid == undefined) {
                    //insert
                    TableaulicenceTypeService.inserttableaulicencetype(data.tableaulicencetype, data.active, "1", "0", data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.tableaulicencetype[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.tableaulicencetype[0].message;
                                $scope.gettableaulicencetype();
                                $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.tableaulicencetype[0].message; $scope.$apply();
                            }
                        })
                }
                else {
                    //update
                    TableaulicenceTypeService.inserttableaulicencetype(data.tableaulicencetype, data.active, "2", data.tableaulicencetypeid, data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.tableaulicencetype[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.tableaulicencetype[0].message;
                                $scope.gettableaulicencetype(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.tableaulicencetype[0].message; $scope.$apply();
                            }
                        })
                }
            }
        };
        $scope.deleteEmployee = function (index) {
            $scope.tableaulicence.splice(index, 1);
        }

        $scope.submitEmployee = function () {
            console.log("form submitted:" + angular.toJson($scope.tableaulicence));
        }

        $scope.opensearchfilter = function () {
            debugger;

        }
        $scope.searchme = function () {
            if ($scope.search) {
                TableaulicenceTypeService.gettableaulicencetypebysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.gettableaulicencetype;
                        $scope.tableaulicence = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.gettableaulicencetype();
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
