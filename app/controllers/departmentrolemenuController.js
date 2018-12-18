app.controller('departmentrolemenuController', ['$scope', '$http', 'departmentrolemenuService', 'departmentService', 'RoleService','$route',
    function ($scope, $http, departmentrolemenuService, departmentService, RoleService, $route) {
        var loginuserid = localStorage.getItem("loginuserid");
        $scope.menudata = [];
        departmentService.getdepartment()
            .success(function (data, status, headers, config) {
                
                $scope.Department = data.getdepartment;
                RoleService.getrole()
                    .success(function (data, status, headers, config) {

                        $scope.Role = data.getrole;
                        $scope.$apply();
                    })
            })
     
        $scope.GetMenuData = function () {
            debugger
            $scope.departmentid;
            $scope.rolesid;

           
            departmentrolemenuService.getdepartmentrolemenu($scope.departmentid, $scope.rolesid)
                .success(function (data, status, headers, config) {
                    debugger
                    $scope.nodesdepartmentrolemenu = data.getdepartmentrolemenu;
                    $scope.$apply();
                })


        }

        
        $scope.updatemapping = function () {
            var chkValidateUpload = 0;
            $scope.departmentid;
            $scope.rolesid;
            var menuselecteddepartmentrolemenu = [];
            $.each($("input[name='treeviewnodedepartmentrolemenu']:checked"), function () {
                menuselecteddepartmentrolemenu.push($(this).val());
            });
            if (menuselecteddepartmentrolemenu.length == 0) {
                debugger
                //showwarning();
                $scope.msgwarning = "Please select Atleast One Menu";
                chkValidateUpload = 1;
            }
            ///department validation start
            if ($scope.departmentid == null || $scope.departmentid == undefined || $scope.departmentid == "") {
               // showwarning();
                $scope.msgwarning = "Please select  Department";
                chkValidateUpload = 1;
            }
            ///role validation start
            if ($scope.rolesid == null || $scope.rolesid == undefined || $scope.rolesid == "") {
                //showwarning();
                $scope.msgwarning = "Please select Role";
                chkValidateUpload = 1;
            }

            if (chkValidateUpload == 0) {
                var menuids = menuselecteddepartmentrolemenu.join();
               
                departmentrolemenuService.insertdepartmentrolemenu($scope.departmentid, $scope.rolesid, menuids, loginuserid)
                    .success(function (data, status, headers, config) {
                        debugger
                        $route.reload();
                    })
            }
        }
       



    }]);
