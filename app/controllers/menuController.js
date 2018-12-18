app.controller('menuController', ['$scope', '$http', 'menuService',
    function ($scope, $http, menuService) {
        debugger
        $scope.menudata = [];
        menuService.getmenu()
            .success(function (data, status, headers, config) {
                debugger
                $scope.menudata = data.getmenu;
                $scope.$apply();

            })
        setTimeout(function () {
            $('#container').jstree({
                "core": {
                    "check_callback": true, "data": $scope.menudata
                },
                "contextmenu": {
                    "items": function ($node) {
                        var tree = $("#container").jstree(true);
                        return {
                            "Create": {
                                "separator_before": false,
                                "separator_after": false,
                                "label": "Create",
                                "action": function (obj) {
                                    debugger
                                    $node = tree.create_node($node);
                                    tree.edit($node);
                                }
                            },
                            "Rename": {
                                "separator_before": false,
                                "separator_after": false,
                                "label": "Rename",
                                "action": function (obj) {
                                    debugger
                                    tree.edit($node);
                                }
                            },
                            "Remove": {
                                "separator_before": false,
                                "separator_after": false,
                                "label": "Remove",
                                "action": function (obj) {
                                    debugger
                                    tree.delete_node($node);
                                }
                            }
                        };
                    }
                },// so that operations work
                "plugins": ["dnd", "contextmenu"]
            });
        }, 1000);
        $('#container').on("select_node.jstree", function (e, data) {
            debugger;
            $scope.productId = data.node.id;
            $scope.menuid = data.node.original.menuid;
            $scope.parentmenu = data.node.original.parentmenu;
            $scope.parentmenuid = data.node.original.parentmenuid;
            $scope.active = data.node.original.active;
            $scope.text = data.node.original.text;
            $scope.sequenceno = data.node.original.sequenceno;
            $scope.pagename = data.node.original.pagename;
            $scope.help = data.node.original.help;

            $scope.addchildclicked = false;
            $scope.$apply();

        });
        $scope.addchildclicked = false;
        $scope.addchild = function () {
            $scope.addchildclicked = true;
            $scope.textontop = "Add Child Menu :" + $scope.text;
            $scope.menu = {};
            $scope.$apply();
        }
        var loginuserid = localStorage.getItem("loginuserid");
        $scope.Savemenu = function () {
            debugger
           

          //insert update data  menu
            $scope.menu;
            $scope.parentmenuid;
            $scope.menuid;

            /////////////////////insert Same level NEW Menu
            $scope.actionid="1";
           
            $scope.parentmenuid =$scope.menuid;
            $scope.description = $scope.menu.description;
            $scope.pagename = $scope.menu.pagename;
            $scope.help = $scope.menu.help;
            $scope.active="true";
            $scope.sequenceno = $scope.menu.sequenceno ;
            $scope.createbyid = loginuserid;

            menuService.insertmenu($scope.actionid,  $scope.parentmenuid, $scope.description, $scope.pagename, $scope.help, $scope.active, $scope.sequenceno, $scope.createbyid )
                .success(function (data, status, headers, config) {
                    debugger
                  

                })

        }

        $scope.menu = {};
        $scope.editmenu = function () {
            debugger
            $scope.textontop = "Edit Menu :"+$scope.text;
            $scope.addchildclicked = true;
            $scope.menu.description = $scope.text;
            $scope.menu.sequenceno = $scope.sequenceno;
            $scope.menu.help = $scope.help;
            $scope.menu.icon = $scope.icon;
            $scope.menu.pagename = $scope.pagename;
            $scope.$apply();
        }


        $scope.addsamelevel = function () {
            $scope.addchildclicked = true;
            $scope.textontop = "Add Same Level New Menu :" + $scope.text;
            $scope.menu = {};
            $scope.$apply();
        }




    }]);
