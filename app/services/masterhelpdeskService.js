app.service('masterhelpdeskService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    
    this.insertmessage = function (GetHelpDeskremarks, id ) {

        var data = {};
        data.remark = GetHelpDeskremarks;
        data.actionid = 1;
        data.helpdeskid = 0;
        data.fromuserid = id;
        data.touserid = 1;
        data.status = "new";
        data.active = 0;
        data.sequenceno = "1";
        data.createbyid = id;
        data.lastupdatebyid = 0;
        return $.post(this.baseURl + 'helpdesk', data, function (msg) {
        });
    }
    this.gethelpdesk = function () {
        debugger
        var data = {};
        data.helpdeskid = 0;
        data.fromuserid = 0;
        data.touserid = 0;
        data.remark = null;
        data.status = null;
        data.active = null;
        return $.post(this.baseURl + 'gethelpdesk', data, function (msg) {

        });
    }
    
    this.gethelpdesksearch = function (text) {
        debugger
        var data = {};
        data.helpdeskid = 0;
        data.fromuserid = 0;
        data.touserid = 0;
        data.remark = null;
        data.status = null;
        data.active = null;
        return $.post(this.baseURl + 'gethelpdesk', data, function (msg) {

        });
    }
}]);
