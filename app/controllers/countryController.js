app.controller('countryController', ['$scope', '$http', 'countryService', '$route', '$rootScope', 'menuService',
    function ($scope, $http, countryService, $route, $rootScope, menuService) {
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "mastercountry";
        $scope.getcountry = function () {
            
            countryService.getcountry()
                .success(function (data, status, headers, config) {
                    $scope.Message = data.getcountry;
                    $scope.countries = angular.copy($scope.Message);
                    $scope.$apply();
                })
        }
        $scope.getcountry();
        menuService.getmenuhelp($scope.pageName)
            .success(function (data, status, headers, config) {
                
                $scope.menuhelp = data.getmenu[0].help;
                $scope.$apply();
            })
      
        $scope.enabledEdit = [];
        $scope.editshow = [];
        $scope.addEmployee = function () {
            var emp = {
                disableEdit: false
            };
            if ($scope.countries == undefined) {
                debugger;
                $scope.countries = (emp);
                $scope.editshow[0] = true;
                $scope.enabledEdit[0] = true;
            } else {
                $scope.countries.push(emp);
                $scope.editshow[$scope.countries.length - 1] = true;
                $scope.enabledEdit[$scope.countries.length - 1] = true;
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
            $scope.editingData[tableData.countryid] = false;
            if (data.country == null || data.country == undefined || data.country == "") {
                showwarning();
                $scope.msgwarning ="Please fill country";
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
                if (data.countryid == null || data.countryid == "" || data.countryid == undefined) {
                    //insert
                    countryService.insertcountry(data.country, data.active, "1", "0", data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            
                            if (data.country[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.country[0].message;
                                $scope.getcountry();
                                $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.country[0].message;
                                $scope.$apply();
                            }
                        })
                }
                else {
                    //update
                    countryService.insertcountry(data.country, data.active, "2", data.countryid, data.sequenceno, loginuserid, loginuserid)
                        .success(function (data, status, headers, config) {
                            if (data.country[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.country[0].message;
                                $scope.getcountry(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.country[0].message; $scope.$apply();
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
            

        }
        $scope.searchme = function () {
            if ($scope.search) {
                countryService.getcountrybysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        
                        $scope.Message = data.getcountry;
                        $scope.countries = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getcountry();
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
