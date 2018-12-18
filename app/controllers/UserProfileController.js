app.controller('UserProfileController', ['$scope', '$http', 'UserProfileService', 'menuService',
    function ($scope, $http, UserProfileService, menuService) {
        $scope.userid = localStorage.getItem("loginuserid");
        $scope.pageName = "userprofile";
        $scope.getmenu = function () {
            //

            menuService.getmenuhelp($scope.pageName)
                .success(function (data, status, headers, config) {
                    
                    $scope.Message = data.getmenu;
                    $scope.menuhelp = data.getmenu[0].help;
                    $scope.$apply();

                })

        }
        $scope.getmenu();
        $scope.getUserProfile = function () {
            UserProfileService.getUserProfile($scope.userid)
                .success(function (data, status, headers, config) {
                    if (status == "200") {
                        if (data != "") {
                            $scope.UserProfile = data.userprofile[0];
                            $scope.UserProfile.firstname = $scope.UserProfile.firstname;
                            $scope.UserProfile.lastname = $scope.UserProfile.lastname;
                            $scope.UserProfile.mobile = $scope.UserProfile.mobile;
                            $scope.UserProfile.email = $scope.UserProfile.email;
                            $scope.UserProfile.company = $scope.UserProfile.company;
                            $scope.UserProfile.department = $scope.UserProfile.department;
                            $scope.UserProfile.roles = $scope.UserProfile.roles;
                            $scope.UserProfile.username = $scope.UserProfile.username;
                            $scope.UserProfile.accessstartdate = $scope.UserProfile.accessstartdate;
                            if ($scope.UserProfile.userimage != "") {
                                $scope.WhenImageIsUploaded = true;
                                $scope.WhenNoImageIsUploaded = false;
                                $scope.UserProfile.userimage = $scope.UserProfile.userimage;
                            }
                            else {
                                $scope.WhenNoImageIsUploaded = true;
                                $scope.WhenImageIsUploaded = false;
                            }
                            $('#menuhelp').html(localStorage.getItem('menuhelp'));
                        }
                    }
                })

            //nationalofthecountry
        }
        $scope.getUserProfile();
        $scope.isImageStuUpload = "";
        $scope.imageUpload = function (event) {
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
                        var imagefile = userimage.substr(mm + 1)


                        //SAVE image FILE AT BACKEND 
                        //SEND HRUSERID AND IMAGE IN FORM DATA AND SAVE THAT Seprately


                        UserProfileService.InsertImageData(imagefile, $scope.userid).success(function (data, status, headers, config) {
                            if (status == "success") {
                                if (data != "") {
                                    //alert(data);
                                    //alert(data.uploaduserimage);
                                    $scope.UserProfile.userimage = data.uploaduserimage[0].userimages;
                                
                                    localStorage.setItem("userimages", $scope.UserProfile.userimage);
                                    
                                    $("#loginuserimage").attr("src", $scope.UserProfile.userimage);
                                    $scope.$apply();
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
                $rootScope.stepsModel = [];
                $rootScope.stepsModel.push(e.target.result);
            });
        }
    }]);
