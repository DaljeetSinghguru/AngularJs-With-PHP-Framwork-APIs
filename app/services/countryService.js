app.service('countryService', ['$http', 'ViewVariablesService', function ($http, ViewVariablesService) {
    this.baseURl = ViewVariablesService.GetBaseAddress();
    this.getcountry = function () {
        debugger
        var data = {};
      
        data.countryid = 0;
        data.description = "";
        data.active = '';
        return $.post(this.baseURl + 'getcountry', data, function (msg) {

        });
    }

    this.insertcountry = function (country, active,actionid,countryid,  sequenceno, createbyid, lastupdatebyid ) {

        var data = {};

        data.countryid = countryid;
        data.description = country;
        data.sequenceno = sequenceno;
        data.createbyid = createbyid;
        data.actionid = actionid;
        data.active = active;
        data.lastupdatebyid = lastupdatebyid;
        
        

        return $.post(this.baseURl + 'country', data, function (msg) {

        });
    }
    this.getcountrybysearchtext = function (text) {
        debugger
        var data = {};

        data.countryid = 0;
        data.description = text;
        data.active = '';
        return $.post(this.baseURl + 'getcountry', data, function (msg) {

        });
    }

}]);
