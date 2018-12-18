app.service('MessagetypeService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getmessagetype = function () {
        debugger
        var data = {};
        data.messagetypeid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getmessagetype', data, function (msg) {

        });
    }
    
    this.insertmessagetype = function (messagetype, active, actionid, messagetypeid, sequenceno, createbyid, lastupdatebyid) {
debugger
        var data = {};
        data.description = messagetype;
        data.active = active;
        data.actionid = actionid;
        data.messagetypeid = messagetypeid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        return $.post(this.baseURl + 'messagetype', data, function (msg) {});
    }
    this.getmessagetypebysearchtext = function (text) {
        debugger
        var data = {};
        data.messagetypeid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getmessagetype', data, function (msg) {

        });
    }


}]);
