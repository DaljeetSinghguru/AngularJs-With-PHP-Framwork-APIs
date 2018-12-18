app.service('CompanyService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getcompany = function () {
        
        var data = {};
        data.companyid = 0;
        data.companyname = "";
        data.active = '';
        data.countryid = 0;
        data.contactperson = '';
        data.contactno = '';
        data.emailid = '';
        data.client = '';
        data.helpdeskmailid = '';
        data.welcomemessage = '';
        return $.post(this.baseURl + 'getcompany', data, function (msg) {

        });
    }
    this.getcountry=function() {
        var data = {};
        data.countryid = 0;
        data.description = '';
        data.active = 'true';
        return $.post(this.baseURl + 'getcountry', data, function (msg) {
});
    }
    
    this.insertcompany = function (actionid, companyid, companyname, active, companyaddress, countryid
        , sequenceno, createbyid, lastupdatebyid, contactperson, contactno, emailid, client
        , helpdeskmailid, logourl, welcomemessage) {
        
        var data = {};
        data.actionid = actionid;
        data.companyid = companyid;
        data.companyname = companyname;
        data.active = active;
        data.companyaddress = companyaddress;
        data.countryid = countryid;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.lastupdatebyid = lastupdatebyid;
        data.contactperson = contactperson;
        data.contactno = contactno;
        data.emailid = emailid;
        data.client = client;
        data.helpdeskmailid = helpdeskmailid;
        data.logourl = logourl;
        data.welcomemessage = welcomemessage;
        return $.post(this.baseURl + 'company', data, function (msg) {});
    }
    this.getcompanybysearchtext = function (text) {
        
        var data = {};
        data.companysid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getcompany', data, function (msg) {

        });
    }

    this.InsertImageData = function (logourl, userid,companyid) {
        
        return $.post(this.baseURl + 'uploadcompanylogo', { userid: userid, companyid: companyid, logourl: logourl }, function (msg) {
            
        });
    }
}]);
