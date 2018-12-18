app.service('DepartmentroleService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getdepartmentrole = function () {
        debugger
        var data = {};
        data.description = '';
        data.departmentrolesid = 0;
        data.departmentid = 0;
        data.rolesid = 0;
        data.active = '';
        return $.post(this.baseURl + 'getdepartmentrole', data, function (msg) {
        });
    }
    
    this.insertdepartmentrole = function (departmentrolesid, departmentid, rolesid, active, actionid, sequenceno, createbyid, lastupdatebyid) {
        debugger;
        var data = {};
        data.departmentid = departmentid;
        data.rolesid = rolesid;
        data.active = active;
        data.actionid = actionid;
        data.departmentrolesid = departmentrolesid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        return $.post(this.baseURl + 'departmentrole', data, function (msg) {});
    }
    this.getdepartmentrolebysearchtext = function (text) {
        debugger
        var data = {};
        data.description = text;
        data.departmentrolesid = 0;
        data.departmentid = 0;
        data.rolesid = 0;
        data.active = '';
        return $.post(this.baseURl + 'getdepartmentrole', data, function (msg) {

        });
    }


}]);
