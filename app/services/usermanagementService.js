app.service('usermanagementService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
     this.getuser = function () {
         
        var data = {};
        data.userid = 0;
        data.description = "";
        data.company = 0;
        data.name = "";
        data.department = "0";
        data.role = "0";
        data.tableaulicencetypeid = "0";
        return $.post(this.baseURl + 'getusers', data, function (msg) {
        });
    }
    this.getuserbysearchtext = function (searchtext) {
        debugger;
        var data = {};
        data.userid = 0;
        data.description = searchtext;
        data.company = 0;
        data.name = "";
        data.department = "0";
        data.role = "0";
        data.tableaulicencetypeid = "0";
        return $.post(this.baseURl + 'getusers', data, function (msg) {
        });
    }

    this.insertuser = function (userid, logineduserid, firstname, lastname, email, mobile, accessstartdate, accessenddate, username, userpassword, active, companyid) {
         
        var data = {};
        data.userid = userid;
        data.logineduserid = logineduserid;
        data.firstname = firstname;
        data.lastname = lastname;
        data.email = email;
        data.mobile = mobile;
        data.accessstartdate = accessstartdate;
        data.accessenddate = accessenddate;
        data.username = username;
        data.userpassword = userpassword;
        data.active = active;
        data.companyid = companyid;
       
        return $.post(this.baseURl + 'users', data, function (msg) { });
    }


    this.getsingleuserdetail = function (id) {
         
        var data = {};
        data.userid = id;
        data.description = "";
        data.company = 0;
        data.name = "";
        data.department = "0";
        data.role = "0";
        data.tableaulicencetypeid = "0";
        return $.post(this.baseURl + 'getusers', data, function (msg) {
        });
    }


    this.updatedepatemntrole = function (finsertuserid, changeddepartmentid, rolesselected, loginuserid) {
         
        var data = {};
        data.departmentrolesid = 0;
        data.userid = finsertuserid;
        data.loginuserid = loginuserid;
        data.departmentid = changeddepartmentid;
        data.rolesid = rolesselected;
        data.active = true;
        return $.post(this.baseURl + 'userdepartmentroles', data, function (msg) { });
    }

    this.updateusermenu = function (finsertuserid, nodes, loginuserid) {
         
        var data = {};
        data.menuid = nodes;
        data.userid = finsertuserid;
        data.loginuserid = loginuserid;
        data.active = true;
        return $.post(this.baseURl + 'usermenu', data, function (msg) { });
    }

    this.updatetableaulicenceuser = function (finsertuserid, changedtableaulicencekeysid, loginuserid, startdate, enddate) {
         
        var data = {};
        data.tableaulicencedetailid = changedtableaulicencekeysid;
     
        data.userid = finsertuserid;
        data.loginuserid = loginuserid;
        data.active = true;
        data.startdate = startdate;
        data.enddate = enddate;
        return $.post(this.baseURl + 'tableaulicenceuser', data, function (msg) { });
    }
    this.updateusermenudashboard = function (finsertuserid, nodes, loginuserid) {
         
        var data = {};
        data.menuid = nodes;
        data.userid = finsertuserid;
        data.loginuserid = loginuserid;
        data.active = true;
        return $.post(this.baseURl + 'usermenudashboard', data, function (msg) { });
    }
    
    this.getuserdepartmentroles = function (userid, departmentid) {
         
        var data = {};
        data.userid = userid;
        data.departmentid = departmentid;
    
        return $.post(this.baseURl + 'getuserdepartmentroles', data, function (msg) { });
    }





    this.getusermenu = function (userid) {
         
        var data = {};
        data.userid = userid;
        data.parentmenuid = 0;
        return $.post(this.baseURl + 'getusermenu', data, function (msg) {
        });
    }


    this.getusermenudashboard = function (userid) {
         
        var data = {};
        data.userid = userid;
        data.parentmenuid = 1;
        return $.post(this.baseURl + 'getusermenu', data, function (msg) {
        });
    }


}]);
