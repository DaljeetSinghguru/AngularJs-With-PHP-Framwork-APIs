app.service('departmentrolemenuService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getmenuhelp = function (pageName) {
        debugger
        var data = {};
        data.pagename = pageName;
        data.menuid = 0;
        data.parentmenuid = 0;
        data.description = null;
        data.active = true;

        return $.post(this.baseURl + 'getmenu', data, function (msg) {

        });
    }

    this.getdepartmentrolemenu = function (departmentid,roleid) {
        var data = {};
        data.departmentrolesmenuid = 0;
        data.departmentid = departmentid;
        data.rolesid = roleid;
        data.menuid = 0;
        data.active = true;
        data.parentmenuid = 0;
        return $.post(this.baseURl + 'getdepartmentrolemenu', data, function (msg) {
        });
    }
    
    this.insertdepartmentrolemenu = function (departmentid, rolesid, selectedElmsIds, loginuserid) {
        var data = {};
        data.departmentid = departmentid;
        data.rolesid = rolesid;
        data.menuid = selectedElmsIds;
        data.active = true;
        data.sequenceno = 0;
        data.createbyid = loginuserid;
        
        return $.post(this.baseURl + 'departmentrolemenu', data, function (msg) {
        });
    }

}]);
