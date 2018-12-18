app.service('ModulesService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getmodules = function () {
        debugger
        var data = {};
        data.modulesid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getmodules', data, function (msg) {

        });
    }
    
    this.insertmodules = function (modules, active, actionid, modulesid, sequenceno, createbyid, lastupdatebyid) {
debugger
        var data = {};
        data.description = modules;
        data.active = active;
        data.actionid = actionid;
        data.modulesid = modulesid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        return $.post(this.baseURl + 'modules', data, function (msg) {});
    }
    this.getmodulesbysearchtext = function (text) {
        debugger
        var data = {};
        data.modulesid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getmodules', data, function (msg) {

        });
    }
   
    

}]);
