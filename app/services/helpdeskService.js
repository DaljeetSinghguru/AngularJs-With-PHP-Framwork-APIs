app.service('helpdeskService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    
    this.inserthelpdesk = function (HelpDeskremarks, id ) {

        var data = {};
        data.remark = HelpDeskremarks;
        data.actionid = 1;
        data.helpdeskid = 0;
        data.fromuserid = id;
        data.touserid = 1;
        data.status = 1;
        data.active = "true";
        data.sequenceno = "1";
        data.createbyid = id;
        data.lastupdatebyid = 0;
        
        return $.post(this.baseURl + 'helpdesk', data, function (msg) {

        });
    }
    

        this.gethelpdesk = function (id) {
            debugger
            var data = {};
            data.helpdeskid = 0;
            data.fromuserid = id;
            data.touserid = 0;
            data.remark = null;
            data.status = null;
            data.active = null;
            return $.post(this.baseURl + 'gethelpdesk', data, function (msg) {

            });
        }


}]);
