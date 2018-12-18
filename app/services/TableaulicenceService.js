app.service('TableaulicenceService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getTableaulicence = function () {
        debugger
        var data = {};
      
       
        data.tableaulicencedetailid =0;
        data.tableaulicencetypeid = 0;
        data.tableaukey = '';
        data.tableauusername = '';
        data.tableaupassword = '';
        data.licencestartdate = '';
        data.licenceenddate = '';
        return $.post(this.baseURl + 'gettableaulicencedetail', data, function (msg) {

        });
    }

    this.insertTableaulicence = function (actionid, tableaulicencedetailid, tableaulicencetypeid, tableaukey, tableauusername, tableauuserpassword,
        licencestartdate, licenceenddate, sequenceno, createbyid, lastupdatebyid ) {

        var data = {};

        

        data.actionid = actionid;
        data.tableaulicencedetailid = tableaulicencedetailid
        data.tableaulicencetypeid = tableaulicencetypeid
        data.tableaukey = tableaukey
        data.tableauusername = tableauusername
        data.tableauuserpassword = tableauuserpassword
        data.licencestartdate = licencestartdate
        data.licenceenddate = licenceenddate
        data.sequenceno = sequenceno
        data.createbyid = createbyid
        data.lastupdatebyid = lastupdatebyid


        

        return $.post(this.baseURl + 'tableaulicencedetail', data, function (msg) {

        });
    }
   

    this.getTableaulicencebysearchtext = function (text) {
        debugger
        var data = {};


        data.tableaulicencedetailid = 0;
        data.tableaulicencetypeid = 0;
        data.tableaukey = '';
        data.tableauusername = text;
        data.tableaupassword = '';
        data.licencestartdate = '';
        data.licenceenddate = '';
        return $.post(this.baseURl + 'gettableaulicencedetail', data, function (msg) {

        });
    }
}]);
