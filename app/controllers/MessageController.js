
app.controller('MessageController', ['$scope', '$http', 'MessageService', '$route', '$rootScope', 'menuService',
    function ($scope, $http, MessageService, $route, $rootScope, menuService) {
        var loginusername = localStorage.getItem("loginusername");
        $scope.loginuserid = localStorage.getItem("loginuserid");
       
        $scope.Message = [];
        $scope.editingData = {};
        $scope.disable = 1;
        $scope.pageName = "messageview";
        menuService.getmenuhelp($scope.pageName)
            .success(function (data, status, headers, config) {
                
                $scope.menuhelp = data.getmenu[0].help;
                $scope.$apply();
            })
        $scope.getmessage = function () {
            MessageService.getmessage($scope.messageid, $scope.messagetypeid, $scope.description, $scope.loginuserid, "true")
                .success(function (data, status, headers, config) {
                    if (data.getmessage != undefined) {
                        $scope.Message = data.getmessage;
                        $scope.empoyees = angular.copy($scope.Message);
                        // if ($scope.$$phase) {
                        $scope.$apply();
                    }
                    //}
                })
 }
        $scope.getmessage();
     

      $scope.enabledEdit = [];
        $scope.editshow = [];
      
        $scope.addEmployee = function () {
            var date = new Date();
            var emp = {
                message: "", createdate: date, touser: "",
                fromuser: loginusername, messagetype: "", messageid: "", disableEdit: false
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
        $scope.update = function (tableData, data) {
            
            var chkValidateUpload = 0;
            $scope.editingData[tableData.countryid] = false;
           
            MessageService.insertmessage(data.messagetypeid, data.message, $scope.loginuserid, $scope.loginuserid, "2", data.messageid, $scope.loginuserid,data.active)
                        .success(function (data, status, headers, config) {
                            
                            $scope.getmessage();
                        })
               
        };


      
        $scope.deleteEmployee = function (index) {
            $scope.empoyees.splice(index, 1);
        }

        $scope.submitEmployee = function () {

            console.log("form submitted:" + angular.toJson($scope.empoyees));
        }

        $scope.searchme = function () {
            
            if ($scope.search) {
                MessageService.getmessagesearchtext($scope.search)
                    .success(function (data, status, headers, config) {
                        
                        $scope.Message = data.getmessage;
                        $scope.empoyees = angular.copy($scope.Message);
                        $scope.$apply();
                    })
            }
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
    