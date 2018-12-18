app.controller('departmentController', ['$scope', '$http', 'departmentService', 'menuService', '$route','$rootScope',
    function ($scope, $http, departmentService, menuService,$route, $rootScope) {
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};

        $scope.pageName = "masterdepartment";
        $scope.getmenu = function () {
          

            menuService.getmenuhelp($scope.pageName)
                .success(function (data, status, headers, config) {
                 
                    $scope.Message = data.getmenu;
                    $scope.menuhelp = data.getmenu[0].help;
                    $scope.$apply();

                })

        }
        $scope.getmenu();
        
        $rootScope.LocalStoragetitle = localStorage.getItem("LocalStoragetitle");
        $scope.getdepartment = function () {
            

            departmentService.getdepartment()
                .success(function (data, status, headers, config) {
                    if (data.getdepartment != undefined) {
                        if (data.getdepartment.length > 0) {
                            $scope.Message = data.getdepartment;
                            $scope.empoyees = angular.copy($scope.Message);
                            $scope.search = "";
                            $scope.$apply();
                        }
                    }
                    
                })

        }
        $scope.getdepartment();
      




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
            
            var chkValidateUpload = 0;
            $scope.editingData[tableData.departmentid] = false;
            if (data.department == null || data.department == undefined || data.department == "") {
                showwarning();
                $scope.msgwarning ="Please fill department";
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

                if (data.departmentid == null || data.departmentid == "" || data.departmentid == undefined) {
                    //insert


                    departmentService.insertdepartment(data.department, data.active, "1", "0", data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            
                            if (data.department[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.department[0].message;
                                $scope.getdepartment();
                                $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.department[0].message; $scope.$apply();
                            }
                        })

                }
                else {
                    //update
                    departmentService.insertdepartment(data.department, data.active, "2", data.departmentid, data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            
                            if (data.department[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.department[0].message;
                                $scope.getdepartment(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.department[0].message; $scope.$apply();
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
            ;

        }
        $scope.searchme = function () {
            if ($scope.search) {
                departmentService.getdepartmentbysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        
                        $scope.Message = data.getdepartment;
                        $scope.empoyees = angular.copy($scope.Message);

                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getdepartment();
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
    