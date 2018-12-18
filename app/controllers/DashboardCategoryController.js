app.controller('DashboardCategoryController', ['$scope', '$http', 'DashboardCategoryService','menuService', '$route', '$rootScope',
    function ($scope, $http, DashboardCategoryService, menuService, $route, $rootScope) {
       $scope.editingData = {};
 $scope.getdashboardcategory = function () {
            debugger
            DashboardCategoryService.getdashboardcategory()
                .success(function (data, status, headers, config) {
                    if (data.getdashboardcategory.length > 0) {
                        $scope.Message = data.getdashboardcategory;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.search = "";
                        $scope.$apply();
                    }

                })

        }
        $scope.getdashboardcategory();
        $scope.pageName = "dashboardcategory";
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
                message: "", createdate: "", touser: "",
                fromuser: "", dashboardcategory: "", messageid: "", disableEdit: false
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
            $scope.editingData[tableData.dashboardcategoryid] = false;
            if (data.dashboardcategory == null || data.dashboardcategory == undefined || data.dashboardcategory == "") {
                showwarning();
                $scope.msgwarning ="plese fill dashboardcategory";
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

                if (data.dashboardcategoryid == null || data.dashboardcategoryid == "" || data.dashboardcategoryid == undefined) {
                    //insert


                    DashboardCategoryService.insertdashboardcategory(data.dashboardcategory, data.active, "1", "0", data.sequenceno, loginuserid, 0)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.dashboardcategory[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.dashboardcategory[0].message;
                                $scope.getdashboardcategory();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.dashboardcategory[0].message;
                            }

                        })

                }
                else {
                    //update
                    DashboardCategoryService.insertdashboardcategory(data.dashboardcategory, data.active, "2", data.dashboardcategoryid, data.sequenceno, 0, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (data.dashboardcategory[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.dashboardcategory[0].message;
                                $scope.getdashboardcategory();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.dashboardcategory[0].message;
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
                DashboardCategoryService.getdashboardcategorybysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.getdashboardcategory;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getdashboardcategory();
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
