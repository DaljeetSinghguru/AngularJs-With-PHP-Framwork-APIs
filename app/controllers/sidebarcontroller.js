app.controller('sidebarcontroller', ['$scope', '$http',
    function ($scope, $http) {
        debugger

        $scope.url = "http://localhost:23202/app.html#";


        //var loginuserid = localStorage.getItem("loginuserid");
        //var data = {};
        //data.userid = loginuserid;////pass userid

        //     $.post('http://192.168.1.234/team/index.php/web_api/assignmenu', data, function (msg) {
        //         debugger

        //         // msg.data[0].message;

        //         var aa = [];
        //         function search(nameKey, myArray) {
        //             for (var i = 0; i < myArray.length; i++) {
        //                 if (myArray[i].parentmenuid === nameKey) {

        //                     myArray[i];
        //                     aa.push({ 'menuid': myArray[i].menuid, 'menu': myArray[i].menu, 'ChildFields': myArray[i].menu })

        //                     for (var j = 0; j < myArray.length; j++) {

        //                     }
        //                 }
        //             }

        //         }

        //         var array = msg.assignmenu;

        //         var resultObject = search("0", array);


        //         //let arr = msg.assignmenu;

        //         //let obj = arr.find(o => o.parentmenuid === '0');

        //         //console.log(obj);

        //         //function getMenu("0", $scope.BindtaskMenu);
        //     });

    }]);
