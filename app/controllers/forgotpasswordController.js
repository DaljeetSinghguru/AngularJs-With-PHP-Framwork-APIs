app.controller('forgotpasswordController', ['$scope', '$location', 'ViewVariablesService', function ($scope, $location, ViewVariablesService) {
    debugger
    $scope.baseURl = ViewVariablesService.GetBaseAddress();
    $('#footermessage2').html(localStorage["footermessage2"]);
   // var logourl = 'assets/img/core/' + localStorage["logourl"];
    var logourl =  localStorage["logourl"];
    $("#logoimage").attr("src", logourl);
    debugger
    localStorage.removeItem('LocalStorageKey');
    var ulEmployees = $('#ulEmployees');

    $('#btnforget').click(function () {

        if ($("#emailaddress").val() != '') {
            var data = {};
            data.emailid = $("#emailaddress").val();


            $.post($scope.baseURl +'forgetpassword', data, function (msg) {
                debugger
                var s = msg.message;
                if (s.match(/field is required.*/)) {
                    alert('Please enter email address'); 
                }
               
                else {
                    // msg.data[0].message;
                    //window.location.replace("http://localhost:18281/login.html");
                    window.location.replace('index.html#/login');
                }
            });
        } else { alert('Please enter email address'); }
    });

}]);
