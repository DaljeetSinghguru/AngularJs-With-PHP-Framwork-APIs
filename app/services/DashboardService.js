app.service('DashboardService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.AddressofTableau = ViewVariablesService.GetAddressofTableau();
    this.getdashboard = function () {
        debugger
        var data = {};
        data.username = "Touchstone";
        data.url = this.AddressofTableau;
        return $.post(this.baseURl + 'getkey', data, function (msg) {

        });
    }
    this.getmenu = function () {
        debugger
        var data = {};
        data.menuid = 0;
        data.parentmenuid =0;
        data.description = '';
        data.pagename = 'dashboardcategory';
        data.Actie = 'true';
        return $.post(this.baseURl + 'getmenu', data, function (msg) {

        });
    }
    this.insertdashboardcategory = function (dashboardcategory, active, actionid, dashboardcategoryid, sequenceno, createbyid, lastupdatebyid) {
debugger
        var data = {};
        data.description = dashboardcategory;
        data.active = active;
        data.actionid = actionid;
        data.dashboardcategoryid = dashboardcategoryid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        return $.post(this.baseURl + 'dashboardcategory', data, function (msg) {});
    }
    this.getdashboardcategorybysearchtext = function (text) {
        debugger
        var data = {};
        data.dashboardcategoryid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getdashboardcategory', data, function (msg) {

        });
    }


}]);
