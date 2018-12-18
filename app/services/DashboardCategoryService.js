app.service('DashboardCategoryService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getdashboardcategory = function () {
        debugger
        var data = {};
        data.dashboardcategoryid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getdashboardcategory', data, function (msg) {

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
