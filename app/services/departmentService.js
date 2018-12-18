app.service('departmentService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getdepartment = function () {
        debugger
        var data = {};
        data.departmentid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getdepartment', data, function (msg) {

        });
    }

    this.insertdepartment = function (department, active, actionid, departmentid, sequenceno, createbyid, lastupdatebyid) {

        var data = {};
        data.description = department;
        data.active = active;
        data.actionid = actionid;
        data.departmentid = departmentid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        return $.post(this.baseURl + 'department', data, function (msg) {});
    }
    this.getdepartmentbysearchtext = function (text) {
        debugger
        var data = {};
        data.departmentid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getdepartment', data, function (msg) {

        });
    }


}]);
