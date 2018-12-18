app.service('UserStatusService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getstatus = function () {
        debugger
        var data = {};
        data.statusid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getuserstatus', data, function (msg) {

        });
    }
   
    this.insertstatus = function (userstatus, active, actionid, userstatusid, sequenceno, createbyid, lastupdatebyid, accessstartdate, accessenddate) {
debugger
        var data = {};
        data.description = userstatus;
        data.active = active;
        data.actionid = actionid;
        data.userstatusid = userstatusid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        data.accessstartdate = accessstartdate;
        data.accessenddate = accessenddate;
        return $.post(this.baseURl + 'userstatus', data, function (msg) {});
    }
    this.getstatusbysearchtext = function (text) {
        debugger
        var data = {};
        data.userstatusid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getuserstatus', data, function (msg) {

        });
    }


}]);
