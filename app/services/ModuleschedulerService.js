app.service('ModuleschedulerService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getmodulescheduler = function () {
        debugger
        var data = {};
        data.description = '';
        data.schedulername = '';
        data.modulesid = 0;
        data.moduleserverip = '';
        data.synched = '';
        return $.post(this.baseURl + 'getmodulescheduler', data, function (msg) {
        });
    }
    this.getmenu = function () {
        debugger
        var data = {};
        data.menuid = 0;
        data.parentmenuid =0;
        data.description = '';
        data.pagename = 'modulescheduler';
        data.Actie = 'true';
        return $.post(this.baseURl + 'getmenu', data, function (msg) {
        });
    }
    this.insertmodulescheduler = function (moduleschedulerid, schedulername, modulesid, moduleserverip, dependencymoduleid, active, loginuserid) {
        debugger;
        var data = {};
        data.moduleschedulerid = moduleschedulerid;
        data.schedulername = schedulername;
        data.modulesid = modulesid;
        data.moduleserverip = moduleserverip;
        data.dependencymoduleid = dependencymoduleid;
        data.active = active;
        data.loginuserid = loginuserid;
       return $.post(this.baseURl + 'modulescheduler', data, function (msg) {});
    }
    this.getmoduleschedulerbysearchtext = function (text) {
        debugger
        var data = {};
        data.description = text;
        data.schedulername = '';
        data.modulesid = 0;
        data.moduleserverip = '';
        data.synched = '';
        return $.post(this.baseURl + 'getmodulescheduler', data, function (msg) {

        });
    }
    this.getscheduleroccurs = function () {
        debugger
        var data = {};
        data.scheduleroccursid = 0;
        data.description = '';
        data.active = '';
        return $.post(this.baseURl + 'getscheduleroccurs', data, function (msg) {

        });
    }
    this.getscheduler = function (moduleschedulerid) {
        debugger
        var data = {};
        data.moduleschedulerid = moduleschedulerid;
        
        return $.post(this.baseURl + 'getscheduler', data, function (msg) {
        });
    }

    this.insertscheduler = function (schedulerid, moduleschedulerid, scheduleroccurid, recursevery
        , schedulertime, crontabsyntax, command, active, loginuserid, monday, tuesday, wednesday
        , thursday, friday, saturday, sunday) {
        debugger;
        var data = {};
        data.schedulerid = schedulerid;
        data.moduleschedulerid = moduleschedulerid;
        data.scheduleroccurid = scheduleroccurid;
        data.recursevery = recursevery;
        data.schedulertime = schedulertime;
        data.crontabsyntax = crontabsyntax;
        data.command = command;
        data.active = active;
        data.loginuserid = loginuserid;
        data.monday = monday;
        data.tuesday = tuesday;
        data.wednesday = wednesday;
        data.thursday = thursday;
        data.friday = friday;
        data.saturday = saturday;
        data.sunday = sunday;
        return $.post(this.baseURl + 'scheduler', data, function (msg) { });
    }
    
     this.getuseralertsetting = function (moduleschedulerid) {
        debugger
        var data = {};
        data.moduleschedulerid = moduleschedulerid;

        return $.post(this.baseURl + 'getuseralertsetting', data, function (msg) {
        });
     }
     this.getusers = function () {
         debugger
         var data = {};
         data.description = "";
         data.company = 0;
         data.name = "";
         data.department = "0";
         data.role = "0";
         data.tableaulicencetypeid = "0";
         data.userid = "0";
         return $.post(this.baseURl + 'getusers', data, function (msg) {
         });
     }
     this.useralertsetting = function (useralertsettingid, moduleschedulerid, companyid, userid, email, notification, sms, active, loginuserid) {
         debugger
         var data = {};
         data.useralertsettingid = useralertsettingid;
         data.moduleschedulerid = moduleschedulerid;
         data.companyid = companyid;
         data.userid = userid;
         data.email = email;
         data.notification = notification;
         data.active = active;
         data.sms = sms;
         data.loginuserid = loginuserid;
         return $.post(this.baseURl + 'useralertsetting', data, function (msg) {
         });
     }
     this.getmoduleschedulerhistory = function (moduleschedulerid) {
         debugger
         var data = {};
         data.moduleschedulerid = moduleschedulerid;

         return $.post(this.baseURl + 'getmoduleschedulerhistory', data, function (msg) {
         });
     }
     this.getuseralerthistroy = function (moduleschedulerhistoryid, moduleschedulerid) {
         debugger
         var data = {};
         data.moduleschedulerhistoryid = moduleschedulerhistoryid;
         data.moduleschedulerid = moduleschedulerid;

         return $.post(this.baseURl + 'getuseralerthistroy', data, function (msg) {

         });
     }
}]);
