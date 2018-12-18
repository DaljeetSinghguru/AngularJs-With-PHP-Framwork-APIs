app.controller('TableaulicenceController', ['$scope', '$http', 'TableaulicenceService', '$route', '$rootScope', 'menuService','TableaulicenceTypeService',
    function ($scope, $http, TableaulicenceService, $route, $rootScope, menuService, TableaulicenceTypeService) {
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "mastertableaulicence";
        TableaulicenceTypeService.getTableaulicenceType()
            .success(function (data, status, headers, config) {
                debugger
                $scope.tableaulicencetypes = data.gettableaulicencetype;
               
            })
        $scope.getTableaulicence = function () {
            debugger
            TableaulicenceService.getTableaulicence()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Message = data.gettableaulicencedetail;
                    $scope.countries = angular.copy($scope.Message);
                    $scope.$apply();
                })
        }
        $scope.getTableaulicence();
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
            $scope.editingData[tableData.tableaulicencedetailid] = false;
            if (data.tableauusername == null || data.tableauusername == undefined || data.tableauusername == "") {
                showwarning();
                $scope.msgwarning ="plese fill tableauusername";
                chkValidateUpload = 1;
            }
            if (data.tableaupassword == null || data.tableaupassword == undefined || data.tableaupassword == "") {
                showwarning();
                $scope.msgwarning ="plese fill tableaupassword";
                chkValidateUpload = 1;
            }
            if (data.sequenceno == null || data.sequenceno == undefined || data.sequenceno == "") {
                showwarning();
                $scope.msgwarning ="plese fill sequenceno";
                chkValidateUpload = 1;
            }
            if (data.tableaukey == null || data.tableaukey == undefined || data.tableaukey == "") {
                showwarning();
                $scope.msgwarning ="plese fill tableaukey";
                chkValidateUpload = 1;
            }
            if (data.tableaulicencetypeid == null || data.tableaulicencetypeid == undefined || data.tableaulicencetypeid == "") {
                showwarning();
                $scope.msgwarning ="plese fill tableaulicencetype";
                chkValidateUpload = 1;
            }
            if (data.licencestartdate == null || data.licencestartdate == undefined || data.licencestartdate == "") {
                showwarning();
                $scope.msgwarning ="plese fill licencestartdate";
                chkValidateUpload = 1;
            }
            if (data.licenceenddate == null || data.licenceenddate == undefined || data.licenceenddate == "") {
                showwarning();
                $scope.msgwarning ="plese fill licenceenddate";
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {
                if (data.tableaulicencedetailid == null || data.tableaulicencedetailid == "" || data.tableaulicencedetailid == undefined) {
                    //insert
                    TableaulicenceService.insertTableaulicence("1", "0", data.tableaulicencetypeid, data.tableaukey, data.tableauusername, data.tableaupassword,
                        data.licencestartdate, data.licenceenddate, data.sequenceno, loginuserid, loginuserid )
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.tableaulicencedetail[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.tableaulicencedetail[0].message;
                                $scope.getTableaulicence();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.tableaulicencedetail[0].message;
                            }
                        })
                }
                else {
                    //update
                    TableaulicenceService.insertTableaulicence("2", data.tableaulicencedetailid, data.tableaulicencetypeid, data.tableaukey, data.tableauusername, data.tableaupassword,
                        data.licencestartdate, data.licenceenddate, data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.tableaulicencedetail[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.tableaulicencedetail[0].message;
                                $scope.getTableaulicence();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.tableaulicencedetail[0].message;
                            }
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

        $scope.opensearchfilter = function () {
            debugger;

        }
        $scope.searchme = function () {
            if ($scope.search) {
                TableaulicenceService.getTableaulicencebysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.gettableaulicencedetail;
                        $scope.countries = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getTableaulicence();
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
