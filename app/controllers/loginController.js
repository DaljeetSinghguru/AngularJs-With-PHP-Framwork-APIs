app.controller('loginController', ['$scope', '$location', 'ViewVariablesService', function ($scope, $location, ViewVariablesService) {
    

    $scope.baseURl = ViewVariablesService.GetBaseAddress();
    $scope.checkconnection = false;
    $scope.getcompanylogo = function () {
       
       var data = {};
      

       $.ajax({
           async: true,
           type: "POST",
           url: $scope.baseURl + 'getcompanylogo',
           data: data,
           contentType: "application/x-www-form-urlencoded",
           dataType: "json",
           success: function (msg) {
                if (msg.message == "Login Successfully.") {
               if (msg.getcompanylogo[0] != "") {
                   // set user id into localstorage
                   // msg.data[0].loginuserid;
                   localStorage.setItem("logourl", msg.getcompanylogo[0].flogourl);
                   var d = new Date();
                   var n = d.getFullYear();
                   var footermessage2 = "Copyright " + d.getFullYear() + " " + msg.getcompanylogo[0].ffootermessage2;
                   localStorage.setItem("footermessage2", footermessage2);
                   $('#footermessage2').html(footermessage2);
                    $('#footermessage').html(msg.getcompanylogo[0].ffootermessage);
                   //var logourl = 'assets/img/core/' + msg.getcompanylogo[0].flogourl;
                  var logourl = msg.getcompanylogo[0].flogourl;
                   //$scope.logogurl1 = msg.getcompanylogo[0].flogourl;

                   $("#companylogo").attr("src", logourl);
                   //System down message
                   if (msg.getcompanylogo[0].fdownmessage != "") {
                       $scope.checkconnection = true;
                       $scope.systemdownmessage = msg.getcompanylogo[0].fdownmessage;
                   }
                   $scope.$apply();
               }

           }
           else {
                    $scope.checkconnection = true;
                    $scope.systemdownmessage = "Server is not responding.Pleas try after some time";
           }
           }
       });

   }
    $scope.getcompanylogo();
    $('#btn').click(function () {
        
       

        var data = {};
        data.username = $("#txtName").val();
        data.password = $("#txtpassword").val();

        if ($("#txtName").val() != '' && $("#txtpassword").val() != '') {
            $.post($scope.baseURl+'login', data, function (msg) {
               


                if (msg.data[0].message == "Invalid UserId Password")
                {
                    $scope.checkconnection = true;
                    $scope.systemdownmessage = msg.data[0].message;
                }
                else if (msg.data[0].message != "Sucessfully")
                {
                    $scope.checkconnection = true;
                    $scope.systemdownmessage = msg.data[0].message;
                }
                else if (msg.data[0].message == "Sucessfully")
                {
                    // set user id into localstorage
                    // msg.data[0].loginuserid;
                    $scope.checkconnection = false;
                    $scope.systemdownmessage ="";
                    localStorage.setItem("loginuserid", msg.data[0].loginuserid);
                    //localStorage.setItem("logourl", msg.data[0].flogourl);
                    localStorage.setItem("loginusername", msg.data[0].floginusername);
                    localStorage.setItem("role", msg.data[0].frole);
                    localStorage.setItem("headermessage", msg.data[0].fwelcomemessage);
                    localStorage.setItem("userimages", msg.data[0].userimages);
                    localStorage.setItem("footermessage", msg.data[0].ffootermessage);
                    localStorage.setItem("footermessage2", msg.data[0].ffootermessage2);
                    localStorage.setItem("gst", msg.data[0].fgst);
                    // msg.data[0].message;
                    window.location.replace('app.html#/home');
                }
                $scope.$apply();
            });
        }
        else {
        $scope.checkconnection = true;
        $scope.systemdownmessage = "Please enter userid and password"; }

    });






    
}]);
