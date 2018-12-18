app.service('menuService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getmenuhelp = function (pageName) {
        debugger
        var data = {};
        data.pagename = pageName;
        data.menuid = 0;
        data.parentmenuid = -1;
        data.description = null;
        data.active = true;

        return $.post(this.baseURl + 'getmenu', data, function (msg) {

        });
    }

    this.getmenu = function () {
        debugger
        var data = {};
        data.pagename = null;
        data.menuid = 0;
        data.parentmenuid = 0;
        data.description = null;
        data.active = true;

        return $.post(this.baseURl + 'getmenu', data, function (msg) {

        });
    }

    this.insertmenu = function (action,  parentmenuid, description, pagename, help, active, sequenceno, createbyid) {
        debugger;
        var data = {};
       
        data.actionid = action;
        data.menuid = "";
        data.parentmenuid = parentmenuid;
        data.description = description;
        data.pagename = pagename;
        data.help = help;
        data.active =active;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;




        return $.post(this.baseURl + 'message', data, function (msg) {

        });
    }

}]);
