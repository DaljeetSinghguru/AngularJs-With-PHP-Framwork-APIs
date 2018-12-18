app.service('TableaulicenceTypeService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getTableaulicenceType = function () {
        debugger
        var data = {};
      
        data.tableaulicencetypeid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getTableaulicenceType', data, function (msg) {

        });
    }


    
    this.getTableaulicencekeys = function (data1) {
        debugger
        var data = {};


        data.tableaulicencedetailid = 0;
        data.tableaulicencetypeid = data1;
        data.tableaukey = '';
        data.tableauusername = '';
        data.tableaupassword = '';
        data.licencestartdate = '';
        data.licenceenddate = '';
        return $.post(this.baseURl + 'gettableaulicencedetail', data, function (msg) {

        });
    }
    this.getTableaulicencesingledetail = function (data1) {
        debugger
        var data = {};


        data.tableaulicencedetailid = data1;
        data.tableaulicencetypeid = 0;
        data.tableaukey = '';
        data.tableauusername = '';
        data.tableaupassword = '';
        data.licencestartdate = '';
        data.licenceenddate = '';
        return $.post(this.baseURl + 'gettableaulicencedetail', data, function (msg) {

        });
    }

    this.inserttableaulicencetype = function (tableaulicencetype, active, actionid, tableaulicencetypeid,  sequenceno, createbyid, lastupdatebyid ) {

        var data = {};

        data.tableaulicencetypeid = tableaulicencetypeid;
        data.description = tableaulicencetype;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.actionid = actionid;
        data.active = active;
        data.lastupdatebyid = lastupdatebyid;
        
        

        return $.post(this.baseURl + 'TableaulicenceType', data, function (msg) {

        });
    }
    this.gettableaulicencetypebysearchtext = function (text) {
        debugger
        var data = {};

        data.tableaulicencetypeid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getTableaulicenceType', data, function (msg) {

        });
    }

}]);
