app.controller('ModuleschedulerController', ['$scope', '$http', 'ModuleschedulerService', 'ModulesService', 'menuService','CompanyService', '$route', '$rootScope',
    function ($scope, $http, ModuleschedulerService, ModulesService, menuService, CompanyService, $route, $rootScope) {
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "modulescheduler";
        $scope.getmenu = function () {
            //debugger

            menuService.getmenuhelp($scope.pageName)
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Message = data.getmenu;
                    $scope.menuhelp = data.getmenu[0].help;
                    $scope.$apply();

                })

        }
        $scope.getmenu();
        $scope.getModules = function () {
            //debugger
            ModulesService.getmodules()
                .success(function (data, status, headers, config) {
                    //debugger
                    $scope.ddldata = data.getmodules;
                    $scope.$apply();
                })

        }
        $scope.getModules();

       $scope.getmodulescheduler = function () {
            //debugger
            ModuleschedulerService.getmodulescheduler()
                .success(function (data, status, headers, config) {
                    //debugger
                    $scope.Message = data.getmodulescheduler;
                    $scope.empoyees = angular.copy($scope.Message);

                    $scope.search = "";
                    $scope.$apply();

                })

        }
        $scope.getmodulescheduler();
        $scope.enabledEdit = [];
        $scope.editshow = [];
       

        $scope.addEmployee = function () {
            var emp = {
                message: "", createdate: "", touser: "",
                fromuser: "", messagetype: "", messageid: "", disableEdit: false
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
        $scope.Cancel = function (index) {
            debugger;
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = false;
            $scope.getmodulescheduler();


        }
        var loginuserid = localStorage.getItem("loginuserid");
        $scope.update = function (tableData, data) {
            //debugger
            var chkValidateUpload = 0;
            $scope.editingData[tableData.moduleschedulerid] = false;
            if (data.schedulername == null || data.schedulername == undefined || data.schedulername == "") {
                showwarning();
                $scope.msgwarning="plese enter scheduler name";
                chkValidateUpload = 1;
            }
            if (data.modulesid == null || data.modulesid == undefined || data.modulesid == "") {
                showwarning();
                $scope.msgwarning ="plese select modules";
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined) {
                showwarning();
                $scope.msgwarning ="plese fill active";
                chkValidateUpload = 1;
            }
            if (data.moduleserverip == null || data.moduleserverip == undefined || data.moduleserverip == "") {
                showwarning();
                $scope.msgwarning ="plese fill moduleserver ip";
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {

                if (data.moduleschedulerid == null || data.moduleschedulerid == "" || data.moduleschedulerid == undefined) {
                    //insert
 ModuleschedulerService.insertmodulescheduler("0", data.schedulername, data.modulesid, data.moduleserverip, data.dependencymoduleid,data.active, loginuserid)
     .success(function (data, status, headers, config) {
         debugger;
         if (data.modulescheduler[0].messageid == "1") {
             $scope.editshow[tableData] = false;
             $scope.enabledEdit[tableData] = false;
             //debugger
             showAlert();
             $scope.msgsuccess = "Record saved successfully";
             $scope.getmodulescheduler();
             $scope.$apply();
         }
       
                        })

                }
                else {
                    //update
                    ModuleschedulerService.insertmodulescheduler(data.moduleschedulerid, data.schedulername, data.modulesid, data.moduleserverip, data.dependencymoduleid, data.active, loginuserid)
                        .success(function (data, status, headers, config) {
                            debugger;
                            if (data.modulescheduler[0].messageid == "2") {
                                $scope.editshow[tableData] = false;
                                $scope.enabledEdit[tableData] = false;
                                //debugger
                                showAlert();
                                $scope.msgsuccess = "Record updated successfully";
                                $scope.getmodulescheduler();
                                $scope.$apply();
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
            //debugger;

        }
        $scope.searchme = function () {
            if ($scope.search) {
                ModuleschedulerService.getmoduleschedulerbysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        //debugger
                        $scope.Message = data.getmodulescheduler;
                        $scope.empoyees = angular.copy($scope.Message);

                        $scope.$apply();
                    })
            }
        }
      



        $scope.getscheduleroccurs = function () {
            //debugger
            ModuleschedulerService.getscheduleroccurs()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.ddlscheduleroccurs = data.getscheduleroccurs;
                   // $scope.$apply();
                })

        }
      $scope.getscheduleroccurs();
     

        $scope.showmodal = function (index,data) {
            debugger;
            $scope.scheduler = {};
          
            if (($scope.editshow[index] == false || $scope.editshow[index] == undefined) & ($scope.enabledEdit[index] == false || $scope.enabledEdit[index] == undefined)) {
                $('#modalclick').trigger('click');
                $('#schedulertab').trigger('click');
                
                var moduleschedulerid = data.moduleschedulerid;
                $scope.moduleschedulerid = data.moduleschedulerid;
                $scope.schedulername = data.schedulername;
                $scope.scheduler.moduleschedulerid = data.moduleschedulerid;
                ModuleschedulerService.getscheduler(moduleschedulerid)
                    .success(function (data, status, headers, config) {
                        debugger
                        if (data.getscheduler != undefined) {
                            if (data.getscheduler.length > 0) {
                                $scope.scheduler = data.getscheduler[0];
                                $scope.sdata = $scope.scheduler;
                                $scope.scheduler.recursevery = parseInt(data.getscheduler[0].recursevery);
                                var time = $scope.scheduler.schedulertime.split(':');
                                if (time != undefined && time != '') {
                                    $scope.scheduler.hour = parseInt(time[0]);
                                    $scope.scheduler.minute = parseInt(time[1]);
                                }
                            }

                            $scope.$apply();
                        }
                        else {
                            $scope.scheduler = []; $scope.$apply();
                        }
                    })
            }
            
           // $scope.$apply();
        }
        //Schedule
        $scope.schedulersave = function () {
            debugger
            var chkValidateUpload = 0;
            var chkday = 0;
            if ($scope.scheduler.scheduleroccurid == null || $scope.scheduler.scheduleroccurid == undefined || $scope.scheduler.scheduleroccurid == "") {
                scheduleshowwarning();
                $scope.msgwarning ="plese select occours";
                chkValidateUpload = 1;
            }
            if ($scope.scheduler.recursevery == null || $scope.scheduler.recursevery == undefined || $scope.scheduler.recursevery == "") {
                scheduleshowwarning();
                $scope.msgwarning ="plese fill recurs every";
                chkValidateUpload = 1;
            }
            $scope.scheduler.monday = $scope.scheduler.monday == "t" ? "t" : "f";
            $scope.scheduler.tuesday = $scope.scheduler.tuesday == "t" ? "t" : "f";
            $scope.scheduler.wednesday = $scope.scheduler.wednesday == "t" ? "t" : "f";
            $scope.scheduler.thursday = $scope.scheduler.thursday == "t" ? "t" : "f";
            $scope.scheduler.friday = $scope.scheduler.friday == "t" ? "t" : "f";
            $scope.scheduler.saturday = $scope.scheduler.saturday == "t" ? "t" : "f";
            $scope.scheduler.sunday = $scope.scheduler.sunday == "t" ? "t" : "f";
            if ($scope.scheduler.monday == "t" || $scope.scheduler.tuesday == "t"
                || $scope.scheduler.wednesday == "t" || $scope.scheduler.thursday == "t"
                || $scope.scheduler.friday == "t" || $scope.scheduler.saturday == "t"
                || $scope.scheduler.sunday == "t") { chkday = 1; }
            if (chkday == 0)
            {
                scheduleshowwarning();
                $scope.msgwarning ="plese select days";
                chkValidateUpload = 1;
            }
           
            if ($scope.scheduler.hour == null || $scope.scheduler.hour == undefined || $scope.scheduler.hour == "") {
                scheduleshowwarning();
                $scope.msgwarning ="plese fill hour";
                chkValidateUpload = 1;
            }
            if ($scope.scheduler.minute == null || $scope.scheduler.minute == undefined || $scope.scheduler.minute == "") {
                scheduleshowwarning();
                $scope.msgwarning ="plese fill minute";
                chkValidateUpload = 1;
            }
            if (chkValidateUpload == 0) {
                $scope.scheduler.schedulertime = $scope.scheduler.hour + ":" + $scope.scheduler.minute;
                if ($scope.scheduler.schedulerid == null || $scope.scheduler.schedulerid == "" || $scope.scheduler.schedulerid == undefined) {
                    //insert


                    ModuleschedulerService.insertscheduler("0", $scope.scheduler.moduleschedulerid, $scope.scheduler.scheduleroccurid, $scope.scheduler.recursevery, $scope.scheduler.schedulertime, $scope.scheduler.crontabsyntax, $scope.scheduler.command, $scope.scheduler.active, loginuserid, $scope.scheduler.monday, $scope.scheduler.tuesday, $scope.scheduler.wednesday, $scope.scheduler.thursday, $scope.scheduler.friday, $scope.scheduler.saturday, $scope.scheduler.sunday)
                        .success(function (data, status, headers, config) {
                            debugger

                           // $route.reload();
                            
                            if (data.scheduler[0].messageid == "1") {
                                scheduleshowAlert();
                                $scope.msgsuccess = data.scheduler[0].message;
                                $scope.$apply();
                            }
                        })

                }
                else {
                  // update
                    debugger
                    ModuleschedulerService.insertscheduler($scope.scheduler.schedulerid, $scope.scheduler.moduleschedulerid, $scope.scheduler.scheduleroccurid, $scope.scheduler.recursevery, $scope.scheduler.schedulertime, $scope.scheduler.crontabsyntax, $scope.scheduler.command, $scope.scheduler.active, loginuserid, $scope.scheduler.monday, $scope.scheduler.tuesday, $scope.scheduler.wednesday, $scope.scheduler.thursday, $scope.scheduler.friday, $scope.scheduler.saturday, $scope.scheduler.sunday)
                        .success(function (data, status, headers, config) {
                            debugger
                            //$route.reload();
                            if (data.scheduler[0].messageid == "2") {
                                 scheduleshowAlert();
                                $scope.msgsuccess = data.scheduler[0].message;
                                $scope.$apply();
                            }
                        })
                }

            }
        };
//--------------------Alert Model--------------------
        $scope.alertenabledEdit = [];
        $scope.alerteditshow = [];
        $scope.getcompany = function () {
            debugger

            CompanyService.getcompany()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.compnaydata = angular.copy(data.getcompany);
                    ModuleschedulerService.getusers()
                        .success(function (data, status, headers, config) {
                            debugger
                            $scope.userdata = angular.copy(data.getusers);
                            $scope.$apply();

                        })
                  

                })

        }
        $scope.getusers = function () {
            debugger
 }
        
        $scope.getuseralertsetting = function () {
            ModuleschedulerService.getuseralertsetting($scope.scheduler.moduleschedulerid)
                .success(function (data, status, headers, config) {
                    debugger
                    if (data.getuseralertsetting != undefined) {
                        if (data.getuseralertsetting.length > 0) {
                            $scope.Message = data.getuseralertsetting;
                            $scope.alertdata = angular.copy($scope.Message);
                            $scope.search = "";
                            $scope.$apply();
                        }
                    }
                    else { $scope.alertdata = []; $scope.$apply(); }
                })

        }
        $scope.alertmodel = function () {
            debugger
            $scope.getcompany();
           // $scope.getusers();
            $scope.getuseralertsetting();
        }
        $scope.addalert = function () {
            debugger;
            var emp = {
                disableEdit: false
            };
            if ($scope.alertdata == undefined) {
            $scope.alertdata = [];
            $scope.alertdata = emp
            $scope.alerteditshow[0] = true;
            $scope.alertenabledEdit[0] = true;

            }
            else {
                $scope.alertdata.push(emp);
                $scope.alerteditshow[$scope.alertdata.length - 1] = true;
                $scope.alertenabledEdit[$scope.alertdata.length - 1] = true;
            }
          
          

        }
        $scope.editalert = function (index) {
            debugger;
            console.log("edit index" + index);
            $scope.alerteditshow[index] = false;
            $scope.alertenabledEdit[index] = true;
        }
        $scope.Cancelalert = function (index) {
            debugger;
            $scope.alerteditshow[index] = false;
            $scope.alertenabledEdit[index] = false;
            $scope.getuseralertsetting();
          

        }

        $scope.updatealert = function (tableData, data) {
            debugger
            var chkValidateUpload = 0;
            $scope.editingData[tableData.moduleschedulerid] = false;
            if (data.companyid == null || data.companyid == undefined || data.companyid == "") {
                scheduleshowwarning();
                $scope.msgwarning ="plese select company";
                chkValidateUpload = 1;
            }
            if (data.userid == null || data.userid == undefined || data.userid == "") {
                scheduleshowwarning();
                $scope.msgwarning ="plese select user";
                chkValidateUpload = 1;
            }
            //if (data.active == null || data.active == undefined) {
            //    alert("plese fill active");
            //    chkValidateUpload = 1;
            //}
            //if (data.moduleserverip == null || data.moduleserverip == undefined || data.moduleserverip == "") {
            //    alert("plese fill moduleserver ip");
            //    chkValidateUpload = 1;
            //}
            if (chkValidateUpload == 0) {

                if (data.useralertsettingid == null || data.useralertsettingid == "" || data.useralertsettingid == undefined) {
                    //insert


                    ModuleschedulerService.useralertsetting("0", $scope.moduleschedulerid, data.companyid, data.userid, data.email, data.notification, data.sms, data.active, loginuserid)
                        .success(function (data, status, headers, config) {
                            //debugger
                            if (data.useralertsetting[0].messageid == "1") {
                                $scope.alerteditshow[tableData] = false;
                                $scope.alertenabledEdit[tableData] = false;
               
                                scheduleshowAlert();
                                $scope.msgsuccess = data.useralertsetting[0].message;
                                $scope.getuseralertsetting();
                                $scope.$apply();
                            }
                           

                        })

                }
                else {
                    //update
                    ModuleschedulerService.useralertsetting(data.useralertsettingid, data.moduleschedulerid, data.companyid, data.userid, data.email, data.notification, data.sms, data.active, loginuserid)
                        .success(function (data, status, headers, config) {
                            //debugger
                            if (data.useralertsetting[0].messageid == "2") {
                                $scope.alerteditshow[tableData] = false;
                                $scope.alertenabledEdit[tableData] = false;
                                scheduleshowAlert();
                                $scope.msgsuccess = data.useralertsetting[0].message;
                                $scope.getuseralertsetting(); $scope.$apply();
                            }

                        })
                }

            }

        };

        $scope.scheduerhistory = function () {
            debugger;
            ModuleschedulerService.getmoduleschedulerhistory($scope.scheduler.moduleschedulerid)
                .success(function (data, status, headers, config) {
                    debugger
                    if (data.getmoduleschedulerhistory != undefined) {
                        if (data.getmoduleschedulerhistory.length > 0) {
                            $scope.schedulerhistory = angular.copy(data.getmoduleschedulerhistory);
                            $scope.$apply();
                        }
                    }
                    else { $scope.schedulerhistory = []; $scope.$apply();}
                })  
        }
        // Modulehistory

        $scope.showmoduleuseralerthistroy = function (data) {
            debugger;
            $('#schedulealertmodalclick').trigger('click');

            ModuleschedulerService.getuseralerthistroy(data.moduleschedulerhistoryid,$scope.scheduler.moduleschedulerid)
                .success(function (data, status, headers, config) {
                    debugger
                    if (data.getuseralerthistroy != undefined) {
                        if (data.getuseralerthistroy.length > 0) {
                            $scope.useralerthistroy = angular.copy(data.getuseralerthistroy);
                            $scope.$apply();
                        }
                    }
                    else { $scope.useralerthistroy = []; $scope.$apply(); }
                })  
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

        $("#schedulesuccess-alert").hide();
        function scheduleshowAlert() {
            $("#schedulesuccess-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#schedulesuccess-alert").slideUp(500);
            });
        }
        $("#schedulesuccess-warning").hide();
        function scheduleshowwarning() {
            $("#schedulesuccess-warning").fadeTo(2000, 500).slideUp(500, function () {
                $("#schedulesuccess-warning").slideUp(500);
            });
        }
    }]);
