app.service('RoleService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getrole = function () {
        debugger
        var data = {};
        data.rolesid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getrole', data, function (msg) {
        });
    }



    
    this.getdepartmentrolemenu = function () {
        debugger
        var data = {};
        data.departmentrolesmenuid = 0;
        data.departmentid = 1;
        data.rolesid = 1;
        data.menuid = 0;
        data.description = true;
        data.parentmenuid = 0;
        return $.post(this.baseURl + 'getdepartmentrolemenu', data, function (msg) {
        });
    }


    this.getuserdepartmentrolemenu = function () {
        debugger
        var data = {};
        data.departmentrolesmenuid = 0;
        data.departmentid = 1;
        data.rolesid = 1;
        data.menuid = 0;
        data.description = true;
        data.parentmenuid = 0;
        return $.post(this.baseURl + 'getuserdepartmentrolemenu', data, function (msg) {
        });
    }


    this.getuserdepartmentrolemenuonlydashboard = function () {
            debugger
            var data = {};
            data.departmentrolesmenuid = 0;
            data.departmentid = 1;
            data.rolesid = 1;
            data.menuid = 0;
            data.description = true;
            data.parentmenuid = 1;
            return $.post(this.baseURl + 'getuserdepartmentrolemenu', data, function (msg) {
            });
        }
    
    this.getmasterrole = function (departmentid) {
        debugger
        var data = {};
        data.rolesid = 0;
        data.departmentid = departmentid ; 
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getroledepartmentwise', data, function (msg) {
        });
    }
    this.getmenu = function () {
        debugger
        var data = {};
        data.menuid = 0;
        data.parentmenuid =0;
        data.description = '';
        data.pagename = 'masterrole';
        data.Actie = 'true';
        return $.post(this.baseURl + 'getmenu', data, function (msg) {
        });
    }
    this.insertrole = function (role, active, actionid, roleid, sequenceno, createbyid, lastupdatebyid) {

        var data = {};
        data.description = role;
        data.active = active;
        data.actionid = actionid;
        data.rolesid = roleid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        return $.post(this.baseURl + 'role', data, function (msg) {});
    }
    this.getrolebysearchtext = function (text) {
        debugger
        var data = {};
        data.rolesid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getrole', data, function (msg) {

        });
    }


}]);
