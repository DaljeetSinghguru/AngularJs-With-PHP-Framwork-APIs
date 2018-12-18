app.controller('MessagetypeController', ['$scope', '$http', 'MessagetypeService', 'menuService', '$route', '$rootScope',
    function ($scope, $http, MessagetypeService, menuService, $route, $rootScope) {
       $scope.editingData = {};
 $scope.getmessagetype = function () {
            
                 MessagetypeService.getmessagetype()
                     .success(function (data, status, headers, config) {
                         if (data.getmessagetype!=undefined) {
                             if (data.getmessagetype.length > 0) {
                                 $scope.Message = data.getmessagetype;
                                 $scope.empoyees = angular.copy($scope.Message);
                                 $scope.search = "";
                                 $scope.$apply();
                             }
                         }

                })

        }
        $scope.getmessagetype();
        $scope.pageName = "mastermessagetype";
        $scope.getmenu = function () {
            //

            menuService.getmenuhelp($scope.pageName)
                .success(function (data, status, headers, config) {
                    //
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
            
            var chkValidateUpload = 0;
            $scope.editingData[tableData.messagetypeid] = false;
            if (data.messagetype == null || data.messagetype == undefined || data.messagetype == "") {
                showwarning();
                $scope.msgwarning ="plese fill messagetype";
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

                if (data.messagetypeid == null || data.messagetypeid == "" || data.messagetypeid == undefined) {
                    //insert


                    MessagetypeService.insertmessagetype(data.messagetype, data.active, "1", "0", data.sequenceno, loginuserid, 0)
                        .success(function (data, status, headers, config) {
                            
                            if (data.messagetype[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.messagetype[0].message;
                                $scope.getmessagetype();
                                $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.messagetype[0].message;
                                $scope.$apply();
                            }

                        })

                }
                else {
                    //update
                    MessagetypeService.insertmessagetype(data.messagetype, data.active, "2", data.messagetypeid, data.sequenceno, 0, loginuserid)
                        .success(function (data, status, headers, config) {
                            
                            if (data.messagetype[0].messageid == "0") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //alert("Record saved sucessfully");
                                showAlert();
                                $scope.msgsuccess = data.messagetype[0].message;
                                $scope.getmessagetype(); $scope.$apply();
                            }
                            else {
                                //alert(data.status[0].message);
                                showwarning();
                                $scope.msgwarning = data.messagetype[0].message; $scope.$apply();
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
            

        }
        $scope.searchme = function () {
            if ($scope.search) {
                MessagetypeService.getmessagetypebysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        
                        $scope.Message = data.getmessagetype;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function (index) {
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getmessagetype();
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
