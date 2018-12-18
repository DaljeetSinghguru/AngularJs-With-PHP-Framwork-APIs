app.controller('usermanagementController', ['$scope', '$http','ViewVariablesService', 'usermanagementService', 'menuService', 'CompanyService', 'departmentService', 'RoleService', 'TableaulicenceTypeService', '$route', 'UserProfileService',
    function ($scope, $http, ViewVariablesService, usermanagementService, menuService, CompanyService, departmentService, RoleService, TableaulicenceTypeService, $route, UserProfileService) {
        $scope.imageuploadURL = ViewVariablesService.GetimageuploadURL();
        $scope.messageid = 0;
        $scope.messagetypeid = 0;
        $scope.description = "";
        $scope.touserid = 0;
        $scope.active = "";
        $scope.Message = [];
        $scope.editingData = {};
        $scope.pageName = "usermanagement";
        $scope.dashboardshow = true;
        $scope.tableaushow = true;
        $scope.menushow = true;
        $scope.departmentshow = true;
        $scope.getuser = function () {
            usermanagementService.getuser().success(function (data, status, headers, config) {

                $scope.users = data.getusers;
                // $scope.users = angular.copy($scope.Message);
                $scope.$apply();
            })
        }
        $scope.getuser();
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

        $scope.searchme = function () {
            debugger;
            if ($scope.search) {
                debugger;
                usermanagementService.getuserbysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.users = data.getusers;
                        // $scope.users = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
        }
        $scope.showhidedashboard = function () {
            if ($scope.dashboardshow == false) {
                $scope.dashboardshow = true;
                $scope.tableaushow = false;
                $scope.menushow = false;
                $scope.departmentshow = false;
            }
            else {
                $scope.dashboardshow = false;
                $scope.tableaushow = false;
                $scope.menushow = false;
                $scope.departmentshow = false;
            }
        }
        $scope.showhidemenu = function () {
            if ($scope.menushow == false) {
                $scope.dashboardshow = false;
                $scope.tableaushow = false;
                $scope.menushow = true;
                $scope.departmentshow = false;
            }
            else {
                $scope.dashboardshow = false;
                $scope.tableaushow = false;
                $scope.menushow = false;
                $scope.departmentshow = false;
            }
        }

        $scope.showhidetableau = function () {
            if ($scope.tableaushow == false) {
                $scope.dashboardshow = false;
                $scope.tableaushow = true;
                $scope.menushow = false;
                $scope.departmentshow = false;
            }
            else {
                $scope.dashboardshow = false;
                $scope.tableaushow = false;
                $scope.menushow = false;
                $scope.departmentshow = false;
            }
        }

        $scope.showhidedeparment = function () {
            if ($scope.departmentshow == false) {
                $scope.dashboardshow = false;
                $scope.tableaushow = false;
                $scope.menushow = false;
                $scope.departmentshow = true;
            } else {
                $scope.dashboardshow = false;
                $scope.tableaushow = false;
                $scope.menushow = false;
                $scope.departmentshow = false;
            }

        }
        $scope.example14model = [];
        $scope.example14settings = {
            scrollableHeight: '200px',
            scrollable: true,
            // enableSearch: true
        };


        //get tableau type

        TableaulicenceTypeService.getTableaulicenceType()
            .success(function (data, status, headers, config) {

                $scope.tableaulicencetypes = data.gettableaulicencetype;

            })


       ///get menu without dashboard
        RoleService.getuserdepartmentrolemenu()
            .success(function (data, status, headers, config) {

                $scope.nodes = data.getuserdepartmentrolemenu;
            })
        ///get menu without dashboard
        RoleService.getuserdepartmentrolemenuonlydashboard()
            .success(function (data, status, headers, config) {

                $scope.nodes1 = data.getuserdepartmentrolemenu;
            })
        ///get department
        $scope.getusertdepartment = function () {
            debugger;
            departmentService.getdepartment()
            .success(function (data, status, headers, config) {

                $scope.department = data.getdepartment;

                ///get roles
                RoleService.getmasterrole(0)
                    .success(function (data, status, headers, config) {

                        $scope.roles = data.getroledepartmentwise;

                        ///get company
                        CompanyService.getcompany()
                            .success(function (data, status, headers, config) {

                                $scope.company = data.getcompany;
                                ///get list of user grid
                                usermanagementService.getuser().success(function (data, status, headers, config) {

                                    $scope.users = data.getusers;
                                    $scope.WhenImageIsUploaded = true;
                                    // $scope.users = angular.copy($scope.Message);
                                    $scope.$apply();
                                })
                            })
                    })
            })
        }
        $scope.myFunc = function (data) {


        }
        $scope.departmentchange = function (data) {

            $scope.changeddepartmentid = data;

            ///get role by departmentid
            RoleService.getmasterrole(data)
                .success(function (data, status, headers, config) {

                    $scope.roles = data.getroledepartmentwise;
                    $scope.$apply();
                })

        }

        $scope.tableaulicencetypeschange = function (data) {
            $scope.changedtableaulicencetypesid = data;
            //get licence keys 

            TableaulicenceTypeService.getTableaulicencekeys(data)
                .success(function (data, status, headers, config) {

                    $scope.tableaulicencekeys = data.gettableaulicencedetail;
                    $scope.$apply();
                })
        }


        $scope.tableaulicencekeyschange = function (data) {
            $scope.changedtableaulicencekeysid = data;
            TableaulicenceTypeService.getTableaulicencesingledetail(data)
                .success(function (data, status, headers, config) {

                    $scope.tableaudetail = {};
                    $scope.tableaudetail.startdate = data.gettableaulicencedetail[0].licencestartdate;
                    $scope.tableaudetail.enddate = data.gettableaulicencedetail[0].licenceenddate;
                    $scope.tableaudetail.username = data.gettableaulicencedetail[0].tableauusername;

                    $scope.tableaudetail.password = data.gettableaulicencedetail[0].tableaupassword;

                    $scope.$apply();
                })
        }
        $scope.isImageStuUpload = "";
        $scope.imageUpload = function (event) {
            ;
            $scope.EFV_PPI_ImageUpload = false;
            var files = event.target.files; //FileList object
            if (files[0].type.indexOf('image') === -1) {
                toaster.pop('alert', "Alert", "Only images are allowed, no other format accept rather than .jpeg, .jpg and .png");
            }
            else {
                $scope.isImageStuUpload = event.target.files;
                //for (var i = 0; i < files.length; i++) {
                if (files.length > 0) {
                    var file = files[0];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = $scope.imageIsLoaded;
                    //reader.onload = function () {

                    setTimeout(function () {
                        var userimage = reader.result;
                        var mm = userimage.indexOf(',');
                        $scope.imagefile = userimage.substr(mm + 1)
                        //SAVE image FILE AT BACKEND 
                        //SEND HRUSERID AND IMAGE IN FORM DATA AND SAVE THAT Seprately


                    }, 1000);
                }
                // }
            }

        }
        $scope.imageIsLoaded = function (e) {
            $scope.$apply(function () {
                ;
                $scope.WhenNoImageIsUploaded = false;
                $scope.WhenImageIsUploaded = true;
                $scope.stepsModel = [];
                $scope.stepsModel.push(e.target.result);
            });
        }
        
        $scope.enabledEdit = [];
        $scope.editshow = [];
        $scope.showpopup = false;
        $scope.addEmployee = function () {

            $scope.showpopup = true;
            //var emp = {
            //    message: "", createdate: "", touser: "",
            //    fromuser: "", messagetype: "", messageid: "", disableEdit: false
            //};
            //$scope.countries.push(emp);
            //$scope.editshow[$scope.countries.length - 1] = true;
            //$scope.enabledEdit[$scope.countries.length - 1] = true;
        }
        $scope.editEmployee = function (index) {
            console.log("edit index" + index);
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = true;
        }
        var loginuserid = localStorage.getItem("loginuserid");

        $scope.deleteEmployee = function (index) {
            $scope.countries.splice(index, 1);
        }

        $scope.submitEmployee = function () {
            console.log("form submitted:" + angular.toJson($scope.countries));
        }

        $scope.opensearchfilter = function () {
            

        }

        $scope.Cancel = function () { $route.reload(); }

        $scope.yourArray = [];
        $scope.saveuser = function (data) {
            debugger

           

            var chkValidateUpload = 0;
            var rolesselected = [];
            var menuselected = [];
            var menuselectedtree11dashboard = [];

            $.each($("input[name='tree11']:checked"), function () {
                menuselected.push($(this).val());

            });
            $.each($("input[name='tree11dashboard']:checked"), function () {
                menuselectedtree11dashboard.push($(this).val());
            });

            $.each($("input[name='sport']:checked"), function () {
                rolesselected.push($(this).val());
            });



            if (rolesselected.length == 0) {
                debugger
                showwarning();
                $scope.msgwarning = "plese select Role";
                chkValidateUpload = 1;
            }

            if (menuselectedtree11dashboard.length == 0) {
                debugger
                showwarning();
                $scope.msgwarning = "Plese select At least One Menu";
                chkValidateUpload = 1;
            }
            if (menuselected.length == 0) {
                debugger
                showwarning();
                $scope.msgwarning = "plese select atleast One Dashboard";
                chkValidateUpload = 1;
            }
          
            if (data.firstname == null || data.firstname == undefined || data.firstname == "") {
                showwarning();
                $scope.msgwarning = "plese fill firstname";
                chkValidateUpload = 1;
            }
            if (data.lastname == null || data.lastname == undefined || data.lastname == "") {
                showwarning();
                $scope.msgwarning = "plese fill lastname";
                chkValidateUpload = 1;
            }
            if (data.email == null || data.email == undefined || data.email == "") {
                showwarning();
                $scope.msgwarning = "plese fill email";
                chkValidateUpload = 1;
            }
            if (data.mobile == null || data.mobile == undefined || data.mobile == "") {
                showwarning();
                $scope.msgwarning = "plese fill mobile";
                chkValidateUpload = 1;
            }
            if (data.startdate == null || data.startdate == undefined || data.startdate == "") {
                showwarning();
                $scope.msgwarning = "plese fill User Acess Start date";
                chkValidateUpload = 1;
            }
            if (data.enddate == null || data.enddate == undefined || data.enddate == "") {
                showwarning();
                $scope.msgwarning = "plese fill User Acess End date";
                chkValidateUpload = 1;
            }
            if (data.username == null || data.username == undefined || data.username == "") {
                showwarning();
                $scope.msgwarning = "plese fill User Name";
                chkValidateUpload = 1;
            }
            if (data.password == null || data.password == undefined || data.password == "") {
                showwarning();
                $scope.msgwarning = "plese fill User password";
                chkValidateUpload = 1;
            }
            if (data.active == null || data.active == undefined || data.active == "") {
                showwarning();
                $scope.msgwarning = "plese select active";
                chkValidateUpload = 1;
            }
            if (data.companyid == null || data.companyid == undefined || data.companyid == "") {
                showwarning();
                $scope.msgwarning = "plese select Company";
                chkValidateUpload = 1;
            }
          
            if ($scope.imagefile == null || $scope.imagefile == undefined || $scope.imagefile == "") {
                showwarning();
                $scope.msgwarning = "plese select  Image";
                chkValidateUpload = 1;
            }
            if ($scope.imagefile == null || $scope.imagefile == undefined || $scope.imagefile == "") {
                showwarning();
                $scope.msgwarning = "plese select  Image";
                chkValidateUpload = 1;
            }

           


            ///department validation start
         if ($scope.changeddepartmentid == null || $scope.changeddepartmentid == undefined || $scope.changeddepartmentid == "") {
             if (data.departmentid == null || data.departmentid == undefined || data.departmentid == "") {
                 showwarning();
                 $scope.msgwarning = "plese select  department";
                 chkValidateUpload = 1;
             }
             else {
                 $scope.changeddepartmentid = data.departmentid;
                 
             }
         }
         
             ///department validation end

         ///tableaulicence key validation start
         if ($scope.changedtableaulicencekeysid == null || $scope.changedtableaulicencekeysid == undefined || $scope.changedtableaulicencekeysid == "") {
             if (data.tableaulicencedetailid == null || data.tableaulicencedetailid == undefined || data.tableaulicencedetailid == "") {
                 showwarning();
                 $scope.msgwarning = "plese select  tableaulicence Key";
                 chkValidateUpload = 1;
             }
             else {
                 $scope.changedtableaulicencekeysid = data.tableaulicencedetailid;

             }
         }

             ///tableaulicence key validation end

         ///tableaulicencetypeid validation start
         if ($scope.changedtableaulicencetypesid == null || $scope.changedtableaulicencetypesid == undefined || $scope.changedtableaulicencetypesid == "") {
             if (data.tableaulicencetypeid == null || data.tableaulicencetypeid == undefined || data.tableaulicencetypeid == "") {
                 showwarning();
                 $scope.msgwarning = "plese select  tableaulicence type";
                 chkValidateUpload = 1;
             }
             else {
                 $scope.changedtableaulicencetypesid = data.tableaulicencetypeid;

             }
         }

             ///tableaulicence key validation end



            debugger
            if (chkValidateUpload == 0) {
                var menuselected = menuselected.join();
                var menuselectedtree11dashboard = menuselectedtree11dashboard.join();
                var rolesselected = rolesselected.join();

                if (data.userid == null || data.userid == "" || data.userid == undefined) {

                    usermanagementService.insertuser(0, loginuserid, data.firstname, data.lastname, data.email, data.mobile, data.startdate, data.enddate, data.username, data.password, data.active, data.companyid)
                        .success(function (data, status, headers, config) {
                            debugger
                            ///////////////////////  update image
                            UserProfileService.InsertImageData($scope.imagefile, data.users[0].finsertuserid).success(function (data1, status, headers, config) { });
                            ///////link department and role id;
                            //data.users[0].finsertuserid
                            //$scope.changeddepartmentid;
                            //rolesselected;
                            usermanagementService.updatedepatemntrole(data.users[0].finsertuserid, $scope.changeddepartmentid, rolesselected, loginuserid).success(function (data2, status, headers, config) { });
                            /////////////////////////link menu 
                            //data.users[0].finsertuserid
                            //nodes
                            usermanagementService.updateusermenu(data.users[0].finsertuserid, menuselected, loginuserid).success(function (data3, status, headers, config) { });
                            ////////////////////////////link tableau detail
                            //data.users[0].finsertuserid
                            //changedtableaulicencekeysid
                            //changedtableaulicencetypesid
                            usermanagementService.updatetableaulicenceuser(data.users[0].finsertuserid, $scope.changedtableaulicencekeysid, loginuserid, $scope.tableaudetail.startdate, $scope.tableaudetail.enddate).success(function (data4, status, headers, config) { });
                            /////////////////////////link dashboard
                            //data.users[0].finsertuserid
                            //nodes1
                            usermanagementService.updateusermenudashboard(data.users[0].finsertuserid, menuselectedtree11dashboard, loginuserid).success(function (data5, status, headers, config) {
                                $scope.getuser();
                                $('#modalclick').trigger('click');
                            });
                        })
                }
                else {
                    debugger
                    usermanagementService.insertuser(data.userid, loginuserid, data.firstname, data.lastname, data.email, data.mobile, data.startdate, data.enddate, data.username, data.password, data.active, data.companyid)
                        .success(function (data, status, headers, config) {
                            debugger
                            ///////////////////////  update image
                            UserProfileService.InsertImageData($scope.imagefile, data.users[0].finsertuserid).success(function (data1, status, headers, config) { });
                            ///////link department and role id;
                            //data.users[0].finsertuserid
                            //$scope.changeddepartmentid;
                            //rolesselected;
                            usermanagementService.updatedepatemntrole(data.users[0].finsertuserid, $scope.changeddepartmentid, rolesselected, loginuserid).success(function (data2, status, headers, config) { });
                            /////////////////////////link menu 
                            //data.users[0].finsertuserid
                            //nodes
                            usermanagementService.updateusermenu(data.users[0].finsertuserid, menuselected, loginuserid).success(function (data3, status, headers, config) { });
                            ////////////////////////////link tableau detail
                            //data.users[0].finsertuserid
                            //changedtableaulicencekeysid
                            //changedtableaulicencetypesid
                            usermanagementService.updatetableaulicenceuser(data.users[0].finsertuserid, $scope.changedtableaulicencekeysid, loginuserid, $scope.tableaudetail.startdate, $scope.tableaudetail.enddate).success(function (data4, status, headers, config) { });
                            /////////////////////////link dashboard
                            //data.users[0].finsertuserid
                            //nodes1
                            usermanagementService.updateusermenudashboard(data.users[0].finsertuserid, menuselectedtree11dashboard, loginuserid).success(function (data5, status, headers, config) {
                                $scope.getuser();
                                $('#modalclick').trigger('click');
                            });
                        })
                }
            }
        }



        $scope.example2settings = {
            displayProp: 'id'
        };

        $("#select_all").change(function () {

            var status = this.checked;
            $('.chk').each(function () {
                this.checked = status;
            });
        });

        $('.chk').change(function () { //".checkbox" change

            //uncheck "select all", if one of the listed checkbox item is unchecked
            if (this.checked == false) { //if this item is unchecked
                $("#select_all")[0].checked = false; //change "select all" checked status to false
            }

            //check "select all" if all checkbox items are checked
            if ($('.chk:checked').length == $('.chk').length) {
                $("#select_all")[0].checked = true; //change "select all" checked status to true
            }
        });



        $scope.checkChange = function (node) {

            if (node.children) {
                parentCheckChange(node);
            }
        }
        $scope.myClick = function (node) {
            //alert('Clicked [' + node.name + '] state is [' + node.checked + ']');

            //var confirm = dialog.confirm('Editar', node);
            //confirm.result.then(function (btn) {
            //});
        };
        $scope.myClickdashboard = function (node) {
            //alert('Clicked [' + node.name + '] state is [' + node.checked + ']');

            //var confirm = dialog.confirm('Editar', node);
            //confirm.result.then(function (btn) {
            //});
        };



        $scope.tableaudetail = {};

        $scope.openmenu = function (data) {
            $scope.getusertdepartment();
            usermanagementService.getsingleuserdetail(data.userid).success(function (datauser, status, headers, config) {

                $scope.users1 = datauser.getusers[0];
                $scope.emp = angular.copy($scope.users1);
                $scope.tableaudetail.username = $scope.emp.tableauusername;
                $scope.tableaudetail.password = $scope.emp.tableauuserpassword;
                $scope.tableaudetail.startdate = $scope.emp.licencestartdate;
                $scope.tableaudetail.enddate = $scope.emp.licenceenddate;
                TableaulicenceTypeService.getTableaulicencekeys($scope.emp.tableaulicencetypeid)
                    .success(function (data, status, headers, config) {

                        $scope.tableaulicencekeys = data.gettableaulicencedetail;

                    })
                usermanagementService.getuserdepartmentroles(data.userid, $scope.users1.departmentid).success(function (datadepartment, status, headers, config) {
                    $scope.roles = datadepartment.getuserdepartmentroles;


                    usermanagementService.getusermenu(data.userid)
                        .success(function (datausermenu, status, headers, config) {

                            $scope.nodes = datausermenu.getusermenu;

                            usermanagementService.getusermenudashboard(data.userid)
                                .success(function (datausermenudashboard, status, headers, config) {
                                    $scope.nodes1 = datausermenudashboard.getusermenu;

                                    $scope.$apply();
                                    $("#addnewemp").click();
                                })
                        })
                })
            })
        }
        $scope.n = function () {
            $scope.emp = {};
            $scope.getusertdepartment();
            $("#addnewemp1").click();
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
