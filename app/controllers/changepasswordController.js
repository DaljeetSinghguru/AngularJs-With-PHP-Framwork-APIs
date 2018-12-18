app.controller('changepasswordController', ['$scope', '$location', 'ViewVariablesService', function ($scope, $location, ViewVariablesService) {
    debugger

    $scope.baseURl = ViewVariablesService.GetBaseAddress();
    $('#footermessage2').html(localStorage["footermessage2"]);
    //var logourl = 'assets/img/core/' + localStorage["logourl"];
    var logourl = localStorage["logourl"];
    $("#logoimage").attr("src", logourl);
    $("#companylogo").attr("src", logourl);
    debugger
    localStorage.removeItem('LocalStorageKey');
    var ulEmployees = $('#ulEmployees');
    var loginuserid = localStorage.getItem("loginuserid");

 
    $('#btnReset').click(function () {
      

        if ($("#newpassword").val() != '' && $("#oldpassword").val() != '') {
            var data = {};
            data.userid = loginuserid;////pass userid
            data.newpassword = $("#newpassword").val();
            data.oldpassword = $("#oldpassword").val();
            $.post($scope.baseURl+'changepassword', data, function (msg) {
                debugger
                if (msg.changepassword[0].messageid == "1") {

                    //window.location.replace("http://localhost:55341/#/login");
                    window.location.replace('index.html#/login');
                }
                else {
                    alert("Invalid Credentials.");
                }
            });
        }
        else {
            alert('Please enter old password and new password ');
        }
    });

}]);
