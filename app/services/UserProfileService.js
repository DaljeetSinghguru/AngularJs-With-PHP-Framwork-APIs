app.service('UserProfileService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getUserProfile = function (userid) {
        debugger
        var username = 'Touchstone';
        var data = {};

      

        $.ajax({
            url: "http://192.168.1.76/trusted?username=Touchstone",

            // The name of the callback parameter, as specified by the YQL service
            //jsonp: "callback",

            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",

            // Tell YQL what we want and that we want JSON
            //data: {
            //    username: "Touchstone",
            //    format: "json"
            //},

            // Work with the response
            success: function (response) {
                alert(3);
                console.log(response); // server response
            }
        });

       return $http({
            method: 'POST',
            url: this.baseURl + 'userprofile',
            data: "userid=" + userid,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    }
    this.InsertImageData = function (image, userid) {
        debugger;
        var data = {};
        data.userid = userid;
        data.userimage = image;
       

        return $.post(this.baseURl + 'uploaduserimage1', { userid: userid, userimage: image }, function (msg) {
            debugger
        });
    }


  



}]);
