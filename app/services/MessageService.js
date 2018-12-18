app.service('MessageService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getmessage = function (messageid, messagetypeid, description, touserid, active) {
        debugger;
        var data = {};
        data.messageid = 0;
        data.messagetypeid = 0;
        data.description = "";
        data.touserid = touserid;
        data.active = '';

        return $.post(this.baseURl + 'getmessage', data, function (msg) {

        });
    }

    this.insertmessage = function (messagetypeid, message, touserid, fromuserid, action, messageid, lastupdatebyid,active) {
        debugger;
        var data = {};
        data.messageid = messageid;
        data.messagetypeid = messagetypeid;
        data.description = message;
        data.touserid = touserid;
        data.createbyid = fromuserid;
        data.actionid = action;
        data.active = active;
        data.sequenceno = '1';
        data.lastupdatebyid = lastupdatebyid;


      


        return $.post(this.baseURl + 'message', data, function (msg) {

        });
    }
    this.getmessagesearchtext = function (text) { 
        debugger
    var data = {};
    data.messageid = "0";
    data.messagetypeid = "0";
    data.description = text;
    data.touserid = "0";
    data.active = "";

    return $.post(this.baseURl + 'getmessage', data, function (msg) {

    });
}
}]);
