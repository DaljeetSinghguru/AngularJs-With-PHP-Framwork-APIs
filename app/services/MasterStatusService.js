app.service('MasterStatusService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getstatus = function () {
        debugger
        var data = {};
        data.statusid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getstatus', data, function (msg) {

        });
    }
   
    this.insertstatus = function (status, active, actionid, statusid, sequenceno, createbyid, lastupdatebyid) {
debugger
        var data = {};
        data.description = status;
        data.active = active;
        data.actionid = actionid;
        data.statusid = statusid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
       return $.post(this.baseURl + 'status', data, function (msg) {});
    }
    this.getstatusbysearchtext = function (text) {
        debugger
        var data = {};
        data.statusid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getstatus', data, function (msg) {

        });
    }


}]);
