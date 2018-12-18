app.controller('CompanyController', ['$scope', '$http', 'CompanyService','menuService', '$route', '$rootScope',
    function ($scope, $http, CompanyService, menuService, $route, $rootScope) {
        $scope.Message = [];
        $scope.editingData = {};
        $scope.showpopup = false;
        $scope.getcompany = function () {
            debugger

            CompanyService.getcompany()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Message = data.getcompany;
                    $scope.empoyees = angular.copy($scope.Message);
                    $scope.search = "";
                    $scope.$apply();

                })

        }
        $scope.getcompany();
        $scope.pageName = "mastercompany";
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

        
        $scope.editEmployee = function (index) {

            console.log("edit index" + index);
            $scope.editshow[index] = false;
            $scope.enabledEdit[index] = true;



        }
        var loginuserid = localStorage.getItem("loginuserid");
        $scope.SaveCompnay = function () {
            debugger
            var chkValidateUpload = 0;
           
            if ($scope.companymodal.companyname == null || $scope.companymodal.companyname == undefined || $scope.companymodal.companyname == "") {
                showwarning();
                $scope.msgwarning ="plese fill company";
                chkValidateUpload = 1;
            }
            if ($scope.companymodal.active == null || $scope.companymodal.active == undefined) {
                showwarning();
                $scope.msgwarning ="plese fill active";
                chkValidateUpload = 1;
            }
          
            if (chkValidateUpload == 0) {

                if ($scope.companymodal.companyid == null || $scope.companymodal.companyid == "" || $scope.companymodal.companyid == undefined) {
                    //insert


                    CompanyService.insertcompany("1", "0", $scope.companymodal.companyname, $scope.companymodal.active, $scope.companymodal.companyaddress, $scope.ddlcountry, $scope.companymodal.sequenceno
                        , loginuserid, "0", $scope.companymodal.contactperson
                        , $scope.companymodal.contactno, $scope.companymodal.emailid, $scope.companymodal.client, $scope.companymodal.helpdeskmailid, $scope.companymodal.logourl
                        , $scope.companymodal.welcomemessage)
                        .success(function (data, status, headers, config) {
                            if (status == "success") {
                                if (data.company[0].messageid == "1") {
                                    showAlert();
                                    $scope.msgsuccess = data.company[0].message;
                                    $scope.getcompany();
                                } else {

                                    showwarning();
                                    $scope.msgwarning = data.company[0].message;
                                }
                            } 


                        })

                }
                else {
                    //update
                    CompanyService.insertcompany("2", $scope.companymodal.companyid, $scope.companymodal.companyname, $scope.companymodal.active, $scope.companymodal.companyaddress, $scope.ddlcountry, $scope.companymodal.sequenceno
                        ,"0", loginuserid, $scope.companymodal.contactperson
                        , $scope.companymodal.contactno, $scope.companymodal.emailid, $scope.companymodal.client, $scope.companymodal.helpdeskmailid, $scope.companymodal.logourl
                        , $scope.companymodal.welcomemessage)
                        .success(function (data, status, headers, config) {
                            debugger
                            if (status == "success") {
                                if (data.company[0].messageid == "2") {
                                    showAlert();
                                    $scope.msgsuccess = data.company[0].message;
                                    $scope.getcompany();
                                }
                                else {

                                    showwarning();
                                    $scope.msgwarning = data.company[0].message;
                                    $scope.$apply();
                                }
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
                CompanyService.getcompanybysearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        debugger
                        $scope.Message = data.getcompany;
                        $scope.empoyees = angular.copy($scope.Message);

                        $scope.$apply();
                    })
            }
        }
        $scope.Cancel = function () { $route.reload(); }
        $scope.getcountry = function () {
            debugger
            CompanyService.getcountry()
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.Countrys = data.getcountry;
                    $scope.$apply();
 })

        }
        $scope.getcountry();
        $scope.companymodal = {};
        $scope.showmodal = function (data) {
            $('#modalclick').trigger('click');
            $scope.companymodal = data;
            $scope.companymodal.companyid = data.companyid;
            $scope.companymodal.companyname = data.companyname;
            $scope.companymodal.active = data.active;
            $scope.companymodal.companyaddress = data.companyaddress;
            $scope.companymodal.country = data.country;
            $scope.companymodal.countryid = data.countryid;
            $scope.companymodal.contactperson = data.contactperson;
            $scope.companymodal.contactno = data.contactno;
            $scope.companymodal.emailid = data.emailid;
            $scope.companymodal.client = data.client;
            $scope.companymodal.helpdeskmailid = data.helpdeskmailid;
            $scope.companymodal.logourl = data.logourl;
            $scope.companymodal.welcomemessage = data.welcomemessage;
            $scope.companymodal.sequenceno = data.sequenceno;
            $scope.ddlcountry = data.countryid;
            $scope.buttonText = "Update";
            
            //alert(data.logourl);
            if (data.logourl != "") {
                $scope.WhenImageIsUploaded = true;
                $scope.WhenNoImageIsUploaded = false;
                $scope.companymodal.logourl = data.url + data.logourl;
            }
            else {
                $scope.WhenNoImageIsUploaded = true;
                $scope.WhenImageIsUploaded = false;
            }

           
        }
        $scope.isImageUpload = "";
        $scope.userid = localStorage.getItem("loginuserid");
        $scope.imageUpload = function (event) {
            
            $scope.EFV_PPI_ImageUpload = false;
            var files = event.target.files; //FileList object
            if (files[0].type.indexOf('image') === -1) {
                toaster.pop('alert', "Alert", "Only images are allowed, no other format accept rather than .jpeg, .jpg and .png");
            }
            else {
                $scope.isImageUpload = event.target.files;
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
                        var imagefile = userimage.substr(mm + 1)


                        //SAVE image FILE AT BACKEND 
                        //SEND HRUSERID AND IMAGE IN FORM DATA AND SAVE THAT Seprately


                        CompanyService.InsertImageData(imagefile, $scope.userid, $scope.companymodal.companyid).success(function (data, status, headers, config) {
                            if (status == "success") {
                                if (data != "") {
                                    
                                    //alert(data);
                                    //alert(data.uploaduserimage);
                                    $scope.companymodal.logourl = data.uploaduserimage[0].userimages;

                                }
                            }
                        })
                    }, 1000);
                }
                // }
            }

        }

        // APPEND THE SELECTED IMAGE
        $scope.imageIsLoaded = function (e) {
            $scope.$apply(function () {
                
                $scope.WhenNoImageIsUploaded = false;
                $scope.WhenImageIsUploaded = true;
                $scope.stepsModel = [];
                $scope.stepsModel.push(e.target.result);
            });
        }
        $scope.addCompany = function () {
            $('#modalclick').trigger('click');
          $scope.companymodal = {};
            $scope.companymodal.companyid = null;
            $scope.companymodal.companyname = "";
            $scope.companymodal.active = "t";
            $scope.companymodal.companyaddress = "";
            $scope.companymodal.country = "";
            $scope.companymodal.countryid = "";
            $scope.companymodal.contactperson = "";
            $scope.companymodal.contactno = "";
            $scope.companymodal.emailid = "";
            $scope.companymodal.client = "";
            $scope.companymodal.helpdeskmailid = "";
            $scope.companymodal.logourl = "";
            $scope.companymodal.welcomemessage = "";
            $scope.companymodal.sequenceno = "";
           /* $scope.ddlcountry = ""*/;
            $scope.buttonText = "Save";
            $scope.$apply();
        }
        $scope.closepopup= function(){
            $scope.showpopup = false;
            $scope.$apply();
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
