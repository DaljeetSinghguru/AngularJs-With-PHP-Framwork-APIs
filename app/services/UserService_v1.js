app.service('UserService', ['$http', '$location', 'ViewVariablesService', function ($http, $location, ViewVariablesService) {
    debugger
    //this.baseURl = ViewVariablesService.GetBaseAddress();
    //this.websiteDomain = ViewVariablesService.GetWebsiteDomain();
    //var UserToken;
    //var UserTokenIsSet;



    //this.GetUserName = function () {
    //    return this.GetCookieValue('name');
    //}

    //this.GetUserEmail = function () {
    //    return this.GetCookieValue('email');
    //}

    //this.GetUserId = function () {
    //    return this.GetCookieValue('UserId');
    //}

    //this.GetCookieValue = function (name) {

    //    return $.cookie(name);
    //}

    //this.GetTokensignUp = function (name) {

    //    return $.cookie(name);
    //}
    //this.SetCookieValue = function (name, value) {
    //    $.cookie(name, value);
    //}


    //this.SetCookieValueWithExpiration = function (name, value) {
    //    $.cookie(name, value, { expires: 9999 });

    //}





    //var Tokenapiurl = "http://novaqualqmsapi.azurewebsites.net/api/UsersApi/";

    //this.ChangePasswordAfterLogin = function (data) {
    //    UserToken = "";
    //    UserTokenIsSet = false;
    //    var method = 'POST';
    //    var url = this.baseURl + 'UsersApi/changePasswordAfterLogin';

    //    return $http({ method: method, url: url, data: data });//.

    //}

    //this.GetLoggedInUserInfo = function () {
    //    UserToken = "";
    //    UserTokenIsSet = false;
    //    var method = 'POST';
    //    var url = this.baseURl + 'UsersApi/GetLoggedInUserInfo';

    //    return $http({ method: method, url: url });//.

    //}

    //this.SignIn = function (CurrentUserName, CurrentPassword) {
    //    UserToken = "";
    //    UserTokenIsSet = false;
    //    var method = 'POST';
    //    var url = this.baseURl + 'UsersApi/GetUserAuthentication?UserName=' + CurrentUserName + '&Password=' + CurrentPassword;

    //    return $http({ method: method, url: url });//.

    //}

    //this.forgotPassword = function (userName) {
    //    var method = 'POST';
    //    var url = this.baseURl + 'UsersApi/ForgotPassword';

    //    return $http({
    //        method: method, url: url,
    //        data: { email: userName }
    //    });//.

    //}

    //this.auth = function (request, callback) {
    //    return $http({
    //        method: 'POST',
    //        url: this.websiteDomain + 'token',
    //        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //        transformRequest: function (obj) {
    //            var str = [];
    //            for (var p in obj) {
    //                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //            }
    //            return str.join("&");
    //        },
    //        data: { userName: request.username, password: request.password, grant_type: 'password' }
    //    });
    //};

    //this.ChangePassword = function (OldPassword, NewPassword) {

    //    var list = {

    //        UserId: this.GetUserId(),
    //        CurrentPassword: OldPassword,
    //        NewPassword: NewPassword
    //    }


    //    var method = 'POST';
    //    var url = this.baseURl + "UsersApi/ChangePassword";


    //    return $http({ method: method, url: url, data: list });

    //}


    //this.ResetPassword = function (userId, newPassword) {
    //    var param = { UserId: userId, NewPassword: newPassword };


    //    var method = 'POST';
    //    var url = this.baseURl + "UsersApi/ResetPassword";


    //    return $http({ method: method, url: url, data: param });

    //}

    //this.GetEmployeesByCompanyIdIncludeViewableCompanies = function (CompanyId) {

    //    var method = 'POST';
    //    var url = tokenapiurl + 'GetEmployeesByCompanyIdIncludeViewableCompanies';
    //    var params = {

    //        CompanyId: CompanyId
    //    }

    //    return $http({ method: method, url: url, params: params });//.

    //}



    //this.Register = function (FirstName, LastName, UserName, Password, Email) {


    //    var method = 'POST';
    //    var url = tokenapiurl + 'RegisterNewUser';
    //    var params = {
    //        FirstName: FirstName,
    //        LastName: LastName,
    //        UserName: UserName,
    //        Password: Password,
    //        EmailAddress: Email

    //    }

    //    return $http({ method: method, url: url, params: params });



    //}

    ////GetCookieValue
    ////SetCookieValue

    //this.IsTokenSet = function () {
    //    return this.GetCookieValue('TokenIsSet');
    //}

    //this.GetToken = function () {
    //    UserToken = this.GetCookieValue('Token');
    //    UserTokenIsSet = this.GetCookieValue('TokenIsSet');

    //    if (UserTokenIsSet == false || UserTokenIsSet == undefined) {
    //    }

    //    return UserToken;
    //}

    //this.SetToken = function (Token, TokenIsSet, UserName, DefaultCompanyId, DefaultCompanyIsSet) {
    //    UserToken = Token;
    //    UserTokenIsSet = TokenIsSet;
    //    this.SetCookieValue('Token', Token);
    //    this.SetCookieValue('TokenIsSet', TokenIsSet);
    //    this.SetCookieValue('name', UserName);
    //    this.SetCookieValue('DefaultCompanyId', DefaultCompanyId);
    //    this.SetCookieValue('DefaultCompanyIsSet', DefaultCompanyIsSet);


    //}

    //this.SetTokenWithMenu = function (Token, TokenIsSet, UserName, DefaultCompanyId, DefaultCompanyIsSet, Menu, email, UserId) {
    //    UserToken = Token;
    //    UserTokenIsSet = TokenIsSet;
    //    this.SetCookieValue('Token', Token);
    //    this.SetCookieValue('TokenIsSet', TokenIsSet);
    //    this.SetCookieValue('name', UserName);
    //    this.SetCookieValue('DefaultCompanyId', DefaultCompanyId);
    //    this.SetCookieValue('DefaultCompanyIsSet', DefaultCompanyIsSet);
    //    this.SetCookieValue('Menu', Menu);
    //    this.SetCookieValue('email', email);
    //    this.SetCookieValue('UserId', UserId);


    //}
    //this.SetTokensignUp = function (setTokanforSignup) {

    //    this.SetCookieValue('setTokanforSignup', setTokanforSignup);



    //}

    //this.SetTokenWithExpDate = function (Token, TokenIsSet, UserName, DefaultCompanyId, DefaultCompanyIsSet) {



    //    UserToken = Token;
    //    UserTokenIsSet = TokenIsSet;
    //    this.SetCookieValueWithExpiration('Token', Token);
    //    this.SetCookieValueWithExpiration('TokenIsSet', TokenIsSet);
    //    this.SetCookieValueWithExpiration('name', UserName);
    //    this.SetCookieValueWithExpiration('DefaultCompanyId', DefaultCompanyId);
    //    this.SetCookieValueWithExpiration('DefaultCompanyIsSet', DefaultCompanyIsSet);


    //}

    //this.SetTokenAndMenuWithExpDate = function (Token, TokenIsSet, UserName, DefaultCompanyId, DefaultCompanyIsSet, Menu, email, UserId) {



    //    UserToken = Token;
    //    UserTokenIsSet = TokenIsSet;
    //    this.SetCookieValueWithExpiration('Token', Token);
    //    this.SetCookieValueWithExpiration('TokenIsSet', TokenIsSet);
    //    this.SetCookieValueWithExpiration('name', UserName);
    //    this.SetCookieValueWithExpiration('DefaultCompanyId', DefaultCompanyId);
    //    this.SetCookieValueWithExpiration('DefaultCompanyIsSet', DefaultCompanyIsSet);
    //    this.SetCookieValueWithExpiration('email', email);
    //    this.SetCookieValueWithExpiration('UserId', UserId);
    //    this.SetCookieValueWithExpiration('Menu', Menu);


    //}


    //this.GetMenu = function (CompanyId) {
    //    //  $scope.UserMenuSet.push({ CompanyId: results.data[i].Id, Menu: menuItem });
    //    var menuSet = JSON.parse(this.GetCookieValue('Menu'));
    //    var menu = {};
    //    for (var i = 0; i < menuSet.length; i++) {
    //        if (CompanyId == menuSet[i].CompanyId) {
    //            menu = menuSet[i].Menu;
    //        }
    //    }

    //    return menu;

    //}


    //this.GetFirstMenu = function () {

    //    var menu = {};
    //    try {
    //        //  $scope.UserMenuSet.push({ CompanyId: results.data[i].Id, Menu: menuItem });
    //        var menuSet = JSON.parse(this.GetCookieValue('Menu'));

    //        for (var i = 0; i < menuSet.length; i++) {
    //            if (i == 0) {
    //                menu = menuSet[i].Menu;
    //            }
    //        }

    //    }
    //    catch (err) {
    //    }

    //    return menu;

    //}

    //this.GetDefaultCompanyId = function () {
    //    return this.GetCookieValue('DefaultCompanyId');
    //}

    //this.GetDefaultCompanyIsSet = function () {
    //    return this.GetCookieValue('DefaultCompanyIsSet');
    //}


    //this.GetUserToken = function () {
    //    var IsLoggedIn = this.GetCookieValue('TokenIsSet');
    //    var Token = this.GetCookieValue('Token');
    //    console.log("Is Logged In : " + IsLoggedIn);
    //    if (IsLoggedIn == "false") {
    //        //console.log("Move to /login");
    //    }
    //    else {
    //        //console.log("Currently Logged in");
    //    }
    //    return Token;
    //}





    //this.GetCurrentToken = function () {
    //    var Token = this.GetCookieValue('Token');
    //    var temp = this.GetCookieValue('TokenIsSet');
    //    if (temp === "false") {
    //        //console.log("Move to /login");
    //    }
    //    else {
    //        //console.log("Currently Logged in");
    //    }
    //    return Token;
    //}





    ////UserService this.GetUserSitePermissions = function ( CompanyId) {
    //// UserPermission
    ////List<SitePermission> GetUserSitePermissions(string Guid CompanyId)


    //this.GetUsersByCompanyId = function (companyId) {

    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/GetUsersByCompany?CompanyId=' + companyId });

    //}


    //this.GetAllUsers = function () {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/SelectAllUser' });

    //}

    //this.InsertUsers = function (userList) {
    //    var param = {
    //        EmailAddress: userList.EmailAddress,
    //        FirstName: userList.FirstName,
    //        LastName: userList.LastName,
    //        Password: userList.Password,
    //        UserName: userList.UserName
    //    };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/RegisterNewUserReturnCreatedUser', data: param });
    //};


    //this.GetUserMenu = function (CompanyId) {

    //    return $http({ method: 'GET', url: this.baseURl + 'MenusApi/SelectAllMenu' });
    //}

    //this.GetNonProcessMenuByCompanyIdandUserId = function (userId, companyId) {
    //    return $http({
    //        method: 'GET', url: this.baseURl + 'UsersApi/GetNonProcessMenuByCompanyIdandUserId?CompanyId='
    //        + companyId + '&UserId=' + userId
    //    });
    //}


    //this.GetUserView = function () {
    //    return $http({ method: 'GET', url: this.baseURl + 'ViewsApi/SelectAllView' });
    //}

    //this.MergeMenuAndViews = function (menus, views) {
    //    console.log("MergeMenuAndViews");
    //    console.log(menus);
    //    console.log(views);
    //    var userMenu = menus.filter(function (obj) {
    //        if (obj.ParentMenuId == null) {
    //            return true;
    //        }
    //        return false;
    //    });

    //    var userSubMenu = menus.filter(function (obj) {
    //        if (obj.ParentMenuId != null) {
    //            return true;
    //        }
    //        return false;
    //    });

    //    userMenu = userMenu.map(function (item, index) {
    //        var result = $.grep(views, function (e) {
    //            return e.ViewId == item.ViewId;
    //        });
    //        var route = '';
    //        if (result[0]) {
    //            route = result[0].AngularRoute;
    //        }
    //        return {
    //            'MenuId': item.MenuId,
    //            'Icon': item.Icon,
    //            'Name': item.Name,
    //            'Order': '1',
    //            'CompanyId': '65BE4FFD-8E65-4A26-BCA3-745B5A249885',
    //            'ParentMenuId': item.ParentMenuId,
    //            'AngularRoute': route,
    //            'ViewId': item.ViewId
    //        };

    //    });

    //    userSubMenu = userSubMenu.map(function (item, index) {
    //        var result = $.grep(views, function (e) {
    //            return e.ViewId == item.ViewId;
    //        });
    //        var route = '';
    //        if (result[0]) {
    //            route = result[0].AngularRoute;
    //        }
    //        return {
    //            'MenuId': item.MenuId,
    //            'Icon': item.Icon,
    //            'Name': item.Name,
    //            'Order': '1',
    //            'CompanyId': '65BE4FFD-8E65-4A26-BCA3-745B5A249885',
    //            'ParentMenuId': item.ParentMenuId,
    //            'AngularRoute': route,
    //            'ViewId': item.ViewId
    //        };

    //    });

    //    return {
    //        userMenu: userMenu,
    //        userSubMenu: userSubMenu
    //    };
    //}

    //this.DeleteUsers = function (userList) {
    //    var param = { items: userList };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/DeleteUser', data: param });
    //};

    //this.GetMenuByUserAndCompany = function (userId, CompanyId) {

    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/GetMenuByCompanyIdandUserId?CompanyId=' + CompanyId + '&UserId=' + userId });

    //}

    //this.DeepDeleteUsers = function (userList, companyId) {
    //    var param = { items: userList, companyId: companyId };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/DeepDeleteUser', data: param });

    //}


    //this.RegisterUser = function (firstName, lastName, email, username, password, companyid, Active, TimeZone, Note, LocationId, passwordChangeOption, office, teamWork) {

    //    var param = { "FirstName": firstName, "LastName": lastName, "UserName": username, "Password": password, "EmailAddress": email, "CompanyId": companyid, "Active": Active, "TimeZone": TimeZone, "Note": Note, "LocationId": LocationId, "PasswordChangeOption": passwordChangeOption, "Office": office, "TeamWork": teamWork };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/RegisterNewUserReturnCreatedUser', data: param });

    //}

    //this.AccociateComanyWithUser = function (userId, companyId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/AssociateUser_with_Company?UserId=' + userId + '&CompanyId=' + companyId });
    //}

    //this.UpdateUser = function (userlist) {
    //    var param = { items: userlist };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/UpdateUser', data: param });
    //}

    //this.GetUserByIdIncludeChildren = function (userId) {
    //    var param = {
    //        "includeList": [
    //            "Departments", "Phones", "Roles", "Titles", "Companies"
    //        ],
    //        "QueryParameters": [
    //            {
    //                "FieldName": "UserId",
    //                "Value": userId,
    //                "Type": "guid"
    //            },

    //        ],

    //    };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/Get_User_Include_SelectedChildren', data: param });
    //}

    //this.SaveUserPhone = function (phones) {
    //    var param = { items: phones };
    //    return $http({ method: 'POST', url: this.baseURl + 'CompanyPhonesApi/InsertCompanyPhone', data: param });
    //}

    //this.DeleteUserPhone = function (phones) {
    //    var param = { items: phones };
    //    return $http({ method: 'POST', url: this.baseURl + 'CompanyPhonesApi/DeepDeleteCompanyPhone', data: param });
    //}
    //this.GetUserByIdIncludeRelated = function (userId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/Get_User_By_UserID_Include_Related?UserID=' + userId });
    //}

    //this.CompanySignUp = function (list) {

    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/CompanySignup', data: list });
    //}

    //this.GetModulesForSignup = function () {
    //    return $http({ method: 'GET', url: this.baseURl + 'ModulesApi/SelectModuleForSignup' });
    //}

    //this.ResetPasswordByEmail = function (Code, Email) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/ResetPasswordByEmail?Code=' + Code + '&Email=' + Email });
    //}
    //this.ChangePasswordEmail = function (email, password) {
    //    var data = {
    //        Email: email,
    //        Password: password
    //    }
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/ChangePasswordEmail', data: data });
    //}

    //this.AssociateModuleToCompany = function (CId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/AssociateModuleToCompany?companyId=' + CId });
    //}
    //this.AssociateUserToCompany = function (userId, companyId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/AssociateUserToCompany?userId=' + userId + '&companyId=' + companyId });
    //}
    //this.GetUserDetails = function (email) {
    //    return $http({ method: 'GET', url: this.baseURl + 'Office365Api/GetUserDetails?email=' + email });
    //}
    //this.GetFolder = function (userName, passWord, userId) {
    //    var param = { "userName": userName, "passWord": passWord, "UserId": userId }
    //    return $http({ method: 'POST', url: this.baseURl + 'Office365Api/GetFolder', data: param });
    //}
    //this.DispalyMonitorFolder = function (UserId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'Office365Api/DispalyMonitorFolder?UserId=' + UserId });
    //}
    //this.UpdateFolder = function (FolderId) {
    //    return $http({ method: 'POST', url: this.baseURl + 'Office365Api/UpdateFolder', data: FolderId });
    //}
    //this.GetAllUsers = function (companyId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/GetAllUsers?companyId=' + companyId });
    //}
    //this.AssociateUsers_with_Company = function (data) {

    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/AssociateUsers_with_Company', data: data });
    //}
    //this.SendMailtoAssociateUser = function (email, companyId) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/SendMailtoAssociateUser?email=' + email + '&companyId=' + companyId });
    //}

    //this.CheckUserExitsOrNot = function (email, companyid) {
    //    var param = { "EmailAddress": email, "CompanyId": companyid };
    //    return $http({ method: 'POST', url: this.baseURl + 'UsersApi/CheckUserExitsOrNot', data: param });

    //}
    //this.GetSyncedFolders = function (email) {
    //    return $http({ method: 'GET', url: this.baseURl + 'Office365Api/GetSyncedFolder?email=' + email });
    //}

    ////this.GetUserFolders = function () {
    ////    return $http({ method: 'GET', url: this.baseURl + 'Office365Api/GetUserFolder' });'}bmiller@sterlingrp.com Buck3y303.
    ////}
    //this.GetUserFolders = function (email) {
    //    return $http({ method: 'GET', url: this.baseURl + 'Office365Api/GetUserFolder?email=' + email });
    //}

    //this.UpdateUserFolders = function (arrRepeated) {

    //    return $http({ method: 'POST', url: this.baseURl + 'Office365Api/UpdateUserFolder', data: arrRepeated });

    //}

    //this.DeleteUserFolder = function (ID) {

    //    return $http({ method: 'GET', url: this.baseURl + 'Office365Api/DelteUserFolder?id=' + ID });

    //}

    //this.GetAllowDashboardForUser = function (Id) {

    //    return $http({ method: 'GET', url: this.baseURl + 'RolesApi/GetAllowDashboardForUser?userId=' + Id });

    //}

    //this.GetAllowRecipeTabs = function (Id) {

    //    return $http({ method: 'GET', url: this.baseURl + 'RolesApi/GetAllowRecipeTabs?userId=' + Id });

    //}
    //this.GetAllChildNodes = function (Id) {

    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/GetAllChildNodes?Id=' + Id });

    //}
    //this.GetAllDesignerForCompany = function (Id) {
    //    return $http({ method: 'GET', url: this.baseURl + 'UsersApi/GetAllDesignerForCompany?companyId=' + Id });
    //}
}]);

