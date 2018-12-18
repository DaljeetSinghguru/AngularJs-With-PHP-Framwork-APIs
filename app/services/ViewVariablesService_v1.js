app.service('ViewVariablesService', ['$http', function ($http) {
    debugger


    this.GetimageuploadURL = function () {
        return "http://192.168.1.234/team/uploads/";
    }
    this.GetBaseAddress = function () {
        return "http://192.168.1.234/team/index.php/web_api/";
    }

    this.GetAddressofTableau = function () {
        return "http://192.168.1.81:8000/trusted";
    }

    


}]);