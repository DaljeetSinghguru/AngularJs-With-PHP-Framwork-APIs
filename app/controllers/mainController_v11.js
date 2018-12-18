app.controller('maincontroller', ['$scope',
    function ($scope) {
        



        $scope.srcForLogo = "Images/touchstone.png";
        $scope.CompanyTagLine = "Welcome!"
        //$scope.Companies = [];

        //$scope.initDone = false;

        //$scope.SelectedCompany = { Value: '', Id: "00000000-0000-0000-0000-000000000000" };

        //$scope.CompanyLoading = false;

        //console.log("maincontroller Loaded ");

        //$scope.CollectionType = "Collection";

        //$scope.CollectionActionType = "";

        //$scope.DetailActionType = "";


        //$scope.UserName = "";
        //$scope.IsLoggedIn = false;
        //$scope.UserToken = "";
        //$scope.setSelectedTab = 1;


        //$scope.DefaultCompanyId;
        //$scope.DefaultCompanyIsSet = false;

        //$scope.SetShowTree = function (Show) {

        //    $scope.ShowTree = Show;
        //    $scope.ShowLargeColumn = !$scope.ShowTree;
        //}



        //$scope.UserMenu = {};// UserService.GetFirstMenu();// $scope.SetMenu();

        //$scope.Users = [];

        //$scope.TaskCategories = [];

        //$scope.GetToken = function () {

        //    if (localStorage.getItem("IsPasswordChange") == "true") {
        //        UserService.SetToken("", false, "", $scope.DefaultCompanyId, false);
        //        UserService.SetTokensignUp(false);
        //    }
        //    $scope.IsLoggedIn = UserService.IsTokenSet();
        //    $scope.UserToken = UserService.GetToken();
        //    $scope.UserName = UserService.GetUserName();
        //    $scope.DefaultCompanyId = UserService.GetDefaultCompanyId();
        //    $scope.DefaultCompanyIsSet = UserService.GetDefaultCompanyIsSet();

        //    if ($scope.IsLoggedIn == "false" || $scope.IsLoggedIn == undefined) {
        //        window.location.replace('index.html');
        //    }
        //    else {

        //    }
        //    return $scope.Token;
        //}


        //$scope.GetToken();



        //$scope.opneSecondLevel = function () {


        //    if ($scope.lastSelected) {
        //        $scope.lastSelected.selected = '';

        //    }
        //    this.selected = 'selected';
        //    $scope.lastSelected = this;


        //}
        //$scope.opneSecondLevelTop = function () {


        //    if ($scope.lastSelected) {
        //        $scope.lastSelected.selectedTop = '';
        //        $('.selectedTop').css('display', 'none');


        //    }
        //    this.selectedTop = 'selectedTop';
        //    $scope.lastSelected = this;
        //    $('.selectedTop').css('display', 'block');



        //}

        //$scope.GetSubMenu = function (menuId) {
        //    return $scope.UserSubMenu.filter(function (obj) {
        //        if (obj.ParentMenuId == menuId) {
        //            return true;
        //        }
        //        return false;
        //    });
        //}



        //$scope.Compare = function (a, b) {
        //    if (parseInt(a.Order) > parseInt(b.Order))
        //        return 1;
        //    else if (parseInt(a.Order) < parseInt(b.Order))
        //        return -1;
        //    else
        //        return 0;
        //}

        //$scope.MenuLoaded = false;

        //$scope.GetUserMenu = function (CompanyId) {
        //    if (UserService.GetUserId()) {
        //        UserService.GetNonProcessMenuByCompanyIdandUserId(UserService.GetUserId(), CompanyId).success(function (menus) {
        //            UserService.GetUserView().success(function (views) {
        //                console.log('Menu Loaded');
        //                $scope.MenuLoaded = true;

        //                // menus = menus.sort($scope.Compare);
        //                var data = UserService.MergeMenuAndViews(menus, views);
        //                $scope.UserMenu = data.userMenu;
        //                $scope.UserSubMenu = data.userSubMenu;
        //            });
        //        });
        //    }
        //};


        //$scope.CompanyTagLine = "";

        //$scope.GetCompanyTagLine = function (Id) {
        //    CompanyService.GetCompanyByCompanyId(Id).success(function (data) {

        //        $scope.CompanyTagLine = data.TagLine;
        //        if (data.Companylogo) {
        //            $scope.srcForLogo = ViewVariablesService.GetWebsiteDomain() + "CompanyLogo/" + data.Companylogo;
        //            $scope.logoName = data.Companylogo;
        //        }
        //    });
        //};



        //$scope.CompanyIdIsSet = function () {

        //    var IdIsSet = true;

        //    if ($scope.SelectedCompany == null || $scope.SelectedCompany == undefined) {
        //        IdIsSet = false;
        //    }
        //    else if ($scope.SelectedCompany.Id == null || $scope.SelectedCompany.Id == undefined) {
        //        IdIsSet = false;
        //    }
        //    else if ($scope.SelectedCompany.Id == "00000000-0000-0000-0000-000000000000") {
        //        IdIsSet = false;
        //    }
        //    return IdIsSet;
        //};

        //$scope.treeData = new kendo.data.HierarchicalDataSource({ data: [] });

        //$scope.LoadEmptyTree = function () {
        //    $scope.treeData = new kendo.data.HierarchicalDataSource({ data: [] });

        //};



        //$scope.Logout = function () {
        //    //console.log("LOGOUT CALLED.");
        //    UserService.SetToken("", false, "", $scope.DefaultCompanyId, false);
        //    UserService.SetTokensignUp(false);
        //    window.location.replace('index.html');
        //};

        //$scope.ClearView = function () {
        //    $location.path('home');
        //};



        //$scope.ClearAll = function () {
        //    //console.log("ClearAll CALLED.");
        //    $scope.LoadEmptyTree();
        //    $scope.ClearView();
        //};

        //$scope.CompanyComboOptions = {
        //    dataTextField: "Value",
        //    dataValueField: "Id",
        //    dataSource: $scope.Companies,
        //    change: function (e) {
        //        $scope.OnCompanyChange();
        //    },
        //    select: function () {

        //    }

        //};

        //$scope.SelectedCompanyIndex = 0;

        //$scope.GetViewableCompanyList = function () {
        //    $scope.CompanyLoading = true;


        //    UserCompanyService.GetUsersViewableCompanies($scope.UserToken).then(function (results) {
        //        if (results.data[0]) {

        //            var UserCompanies = results.data[0].Companies;

        //            $scope.Companies = [];
        //            var companyId = UserService.GetCookieValue("DefaultCompanyId");
        //            var index = 0;
        //            for (var i = 0; i < UserCompanies.length; i++) {
        //                if (UserCompanies[i].Name) {
        //                    if (UserCompanies[i].CompanyId == companyId) {
        //                        $scope.SelectedCompanyIndex = index;
        //                    }
        //                    $scope.Companies.push({ "Id": UserCompanies[i].CompanyId, "Value": UserCompanies[i].Name, "DefaultCountry": UserCompanies[i].DefaultCountry });
        //                    index++;
        //                }
        //            }
        //            $scope.SetSelectedCompany();
        //            $scope.SetMenuOrientation();
        //            $scope.ClearAll();
        //            $scope.CompanyLoading = false;
        //            $scope.SelectCompanyModel = {
        //                Id: $scope.SelectedCompany.Id,
        //                Value: $scope.SelectedCompany.Value,
        //                DefaultCountry: $scope.SelectedCompany.DefaultCountry
        //            }
        //            UserService.GetUsersByCompanyId($scope.SelectedCompany.Id).success(function (data) {
        //                $scope.Users = data;
        //            });
        //            TaskService.GetTaskCategoryByCompany($scope.SelectedCompany.Id).success(function (data) {
        //                $scope.TaskCategories = data;
        //            });
        //        }
        //    },
        //        function (errorPayload) {
        //            $scope.CompanyLoading = false;
        //        })

        //};



        //$scope.SetSelectedCompany = function () {

        //    $scope.SelectedCompany = $scope.Companies[$scope.SelectedCompanyIndex];
        //    $scope.GetUserMenu($scope.SelectedCompany.Id);
        //    $scope.GetCompanyTagLine($scope.SelectedCompany.Id);
        //    ViewVariablesService.SetSelectedCompany($scope.SelectedCompany);
        //}

        //$scope.SetMenuOrientation = function () {
        //    if ($scope.SelectedCompany.Value == "Knooby") {
        //        $scope.selectedValue = "Knooby";
        //    }
        //    else {
        //        $scope.selectedValue = '';

        //    }
        //    $(".dropdown").removeClass("open");
        //    $scope.ClearTabs();
        //}



        //$scope.Completed = 0;






        //$scope.GetGridDefaults = function () {

        //    UserSettingService.GetDefaultColumns().success(function (data) {

        //        data = data.filter(function (obj) {
        //            if (obj.CompanyId == null) {
        //                return true;
        //            }
        //            return false;
        //        });
        //        UserSettingService.DefaultColumns = data;
        //        $scope.Completed = $scope.Completed + 1;
        //    });
        //}
        //$scope.GetUserDefaults = function () {
        //    UserSettingService.GetGridSettingForUser("", UserService.GetUserId()).success(function (data) {
        //        UserSettingService.UserColumns = data;
        //        $scope.Completed = $scope.Completed + 1;
        //    });
        //}

        //if (UserService.GetUserId()) {
        //    $scope.GetViewableCompanyList();
        //    $scope.GetGridDefaults();
        //    $scope.GetUserDefaults();
        //}


        //$scope.$watch("Completed", function (newValue, oldValue) {
        //    if (newValue == 2) {
        //        $scope.$broadcast('mainControllerLoaded');
        //        $scope.initDone = true;
        //    }

        //});


        //$scope.selectedValue = '';
        //$scope.OnCompanyChange = function () {
        //    $scope.UserMenu = {};
        //    $scope.ClearView();
        //    $scope.showMenu = false
        //    $scope.SelectedCompany.Id = $scope.SelectCompanyModel.Id;
        //    $scope.SelectedCompany.Value = $scope.SelectCompanyModel.Value;
        //    $scope.SelectedCompany.DefaultCountry = $scope.SelectCompanyModel.DefaultCountry;

        //    if ($scope.CompanyIdIsSet()) {
        //        ViewVariablesService.SetSelectedCompany($scope.SelectedCompany);
        //        $scope.GetUserMenu($scope.SelectedCompany.Id);
        //        $scope.GetCompanyTagLine($scope.SelectedCompany.Id);
        //        UserService.SetCookieValue("DefaultCompanyId", $scope.SelectedCompany.Id);

        //        $scope.SetMenuOrientation();
        //        $scope.GetGridDefaults();
        //        $scope.GetUserDefaults();
        //        UserService.GetUsersByCompanyId($scope.SelectedCompany.Id).success(function (data) {
        //            $scope.Users = data;
        //        });

        //        TaskService.GetTaskCategoryByCompany($scope.SelectedCompany.Id).success(function (data) {
        //            $scope.TaskCategories = data;
        //        });
        //    }

        //};



        //$scope.getTemplate = function (link) {
        //    if (link != null) {
        //        var route = $route.routes["/" + link];
        //        if (route)
        //            return route.templateUrl;
        //        return null;
        //    }

        //}


        //$scope.openPasswordModal = function () {
        //    var modalInstance = $modal.open({
        //        templateUrl: 'changePassword.html',
        //        controller: 'updatepasswordController',
        //    });
        //}

        //$scope.openopc = function () {
        //    $scope.addTab('OPC', 'OPCLinkOld')
        //}
        //$scope.tabOptions = {
        //    select: function (e) {

        //        var title = e.item.innerHTML;
        //        var myregexp = /<span[^>]+?class="k-link".*?>([\s\S]*?)<\/span>/g;
        //        var match = myregexp.exec(title);
        //        var result = "";
        //        while (match != null) {
        //            result += RegExp.$1;
        //            match = myregexp.exec(title);
        //        }
        //        result = result.replace('<i class="fa fa-home fa-4"></i>', '');
        //        //console.log(result);
        //        document.title = 'IMS : ' + result;
        //        $scope.$broadcast('tabOpened');



        //    },


        //};

        //$scope.ClearTabs = function ($event, tabname) {

        //    var length = $('#mainTabs li').length;
        //    if (length > 1) {
        //        $('#mainTabs li').each(function () {
        //            if (length > 0) {
        //                $scope.tabstrip.select(length);
        //                var tab = $scope.tabstrip.select();
        //                $scope.tabstrip.remove(tab);
        //            }
        //            length = length - 1;
        //        });
        //    }
        //    if ($scope.tabstrip) {
        //        $scope.tabstrip.select(0);
        //    }
        //}


        ////$scope.closeTab = function ($event, tabname) {
        ////    var tabName = tabname;

        ////    if (tabName.trim() == 'Manual Entry') {

        ////        var selectedTab = $($event.target.parentNode);
        ////        $rootScope.$broadcast('ManualEntry', selectedTab);

        ////    }
        ////    else if (tabName.trim() == 'Sales Goals') {

        ////        var selectedTab = $($event.target.parentNode);
        ////        $rootScope.$broadcast('CloseSalesGoals', selectedTab);

        ////    }
        ////    else if (tabName.trim() == 'Products Search') {

        ////        var selectedTab = $($event.target.parentNode);
        ////        $rootScope.$broadcast('CloseProductsSearch', selectedTab);

        ////    }
        ////    else if (tabName.trim() == 'Suppliers') {

        ////        var selectedTab = $($event.target.parentNode);
        ////        $rootScope.$broadcast('CloseSuppliers', selectedTab);

        ////    }
        ////    else if (tabName.trim() == 'Brands') {

        ////        var selectedTab = $($event.target.parentNode);
        ////        $rootScope.$broadcast('CloseBrands', selectedTab);

        ////    }
        ////    else if (tabName.trim() == 'Trade Show') {

        ////        var selectedTab = $($event.target.parentNode);
        ////        $rootScope.$broadcast('CloseTradeShow', selectedTab);

        ////    }

        ////    else {
        ////        var menuList = $('#mainTabs li');
        ////        var selectedTab = $($event.target.parentNode);
        ////        var index = (menuList.index(selectedTab));
        ////        if (index > 0) {
        ////            $scope.tabstrip.select(index);
        ////            var tab = $scope.tabstrip.select();
        ////            $('div.tooltip').remove();
        ////            $scope.tabstrip.remove(tab);
        ////            $scope.tabstrip.select(index - 1);
        ////        }
        ////    }

        ////};




        //$scope.kendomenu = {
        //    openOnClick: true

        //};

        //$scope.CloseHover = function () {
        //    $('body').trigger('click');

        //};


        //$scope.resetNotification = {
        //    position: {
        //        top: 30,
        //        right: 30
        //    },
        //    height: 60,
        //    templates: [{
        //        type: "error",
        //        template: "<div style='' class='wrong-pass'><img src='image/error-icon.png' style='margin-top:15px; margin-right:15px; width:30px;'/><p style='padding:10px;'>#= message #</p></div>"
        //    }]
        //}

        //$scope.closeCurrentTab = function () {

        //    var menuList = $('#mainTabs li');

        //    var selectedTab = $('.k-state-active');
        //    var index = (menuList.index(selectedTab));
        //    // console.log(index);
        //    if (index > 0) {
        //        $scope.tabstrip.select(index);
        //        var tab = $scope.tabstrip.select();
        //        $('div.tooltip').remove();
        //        $scope.tabstrip.remove(tab);
        //        $scope.tabstrip.select(index - 1);
        //    }
        //};

        ////functions for handling the right side comment 



        //$scope.IsChatShown = false;
        //$scope.CurrentLeadId = '';
        //$scope.AllComment = [];
        //$scope.AllTasks = [];
        //$scope.AllReplies = [];
        //$scope.searchText = "";
        //$scope.CurrentOpportunity = {};
        //$scope.RelatedContent = 'Comment';

        //$scope.FullUserName = UserService.GetUserName();
        //if ($scope.UserName[0]) {
        //    $scope.UserName = $scope.UserName[0].charAt(0) + $scope.UserName[1].charAt(0);
        //}

        //$scope.$on('onLeadSelected', function (event, data) {

        //    $scope.CurrentLeadId = data.data.OpportunityId;
        //    $scope.ShowActivity();

        //});

        //$scope.onChatIconClicked = function () {
        //    $scope.IsChatShown = !$scope.IsChatShown;
        //    if ($scope.IsChatShown == true) {
        //        $('#leadsSplitter').find('#secondPane').width($('#secondPane').width() - 300);
        //    }
        //    else {
        //        $('#leadsSplitter').find('#secondPane').width($('#secondPane').width() + 300);

        //    }
        //    $scope.ShowActivity();

        //}

        //$scope.ShowActivity = function () {

        //    if ($scope.IsChatShown == true && $scope.CurrentLeadId != '') {
        //        $scope.GetOpportunitySource();
        //        $scope.GetOpportunityResults();
        //        QuestionnairesSalesService.GetOpportunityById($scope.CurrentLeadId).success(function (data) {
        //            $scope.OpportunityProjectId = data.ProjectId;
        //            $scope.CurrentOpportunity = [data];

        //            $scope.GetActivityByOpportunity();
        //        });

        //    }
        //}

        //$scope.GetActivityByOpportunity = function () {
        //    $scope.AllComment = [];
        //    $scope.AllReplies = [];
        //    $scope.AllTasks = [];
        //    $scope.AllActivity = [];

        //    QuestionnairesSalesService.GetActivityByOpportunity($scope.CurrentLeadId).success(function (data, status, headers, config) {
        //        for (var i = 0; i < data.length; i++) {
        //            if (data[i].ParentActivityId == null) {
        //                $scope.AllComment.push({
        //                    "ActivityId": data[i].ActivityId,
        //                    "ParentActivityId": data[i].ParentActivityId,
        //                    "CreatedBy": data[i].CreatedBy,
        //                    "ActivityDescription": data[i].ActivityDescription,
        //                    "CreatedOn": data[i].CreatedOn,
        //                    "OpporutnityId": data[i].OpporutnityId,
        //                    "Type": "Comment"
        //                });
        //                $scope.AllActivity.push({
        //                    "ActivityId": data[i].ActivityId,
        //                    "ParentActivityId": data[i].ParentActivityId,
        //                    "CreatedBy": data[i].CreatedBy,
        //                    "ActivityDescription": data[i].ActivityDescription,
        //                    "CreatedOn": data[i].CreatedOn,
        //                    "OpporutnityId": data[i].OpporutnityId,
        //                    "Type": "Comment"
        //                });
        //            }
        //            else {
        //                $scope.AllReplies.push({ "ActivityId": data[i].ActivityId, "ParentActivityId": data[i].ParentActivityId, "CreatedBy": data[i].CreatedBy, "ActivityDescription": data[i].ActivityDescription, "CreatedOn": data[i].CreatedOn, "OpporutnityId": data[i].OpporutnityId });
        //            }
        //        }
        //        TaskService.GetTasksByOpportunity($scope.CurrentLeadId).success(function (tasks) {

        //            for (var i = 0; i < tasks.length; i++) {
        //                $scope.AllTasks.push({
        //                    "ActivityId": tasks[i].TaskId,
        //                    "ParentActivityId": null,
        //                    "CreatedBy": null,
        //                    "ActivityDescription": tasks[i].Title,
        //                    "CreatedOn": tasks[i].EndDate,
        //                    "OpporutnityId": null,
        //                    "Type": "Task"
        //                });
        //                $scope.AllActivity.push({
        //                    "ActivityId": tasks[i].TaskId,
        //                    "ParentActivityId": null,
        //                    "CreatedBy": null,
        //                    "ActivityDescription": tasks[i].Title,
        //                    "CreatedOn": tasks[i].EndDate,
        //                    "OpporutnityId": null,
        //                    "Type": "Task"
        //                });
        //            }

        //        });
        //    });

        //}

        //$scope.postComment = function () {

        //    var date = new Date();
        //    if ($scope.Description.trim() != "") {
        //        var descriptionData = [{
        //            "ActivityDescription": $scope.Description.trim(),
        //            "ActivityId": "",
        //            "ActivityType": '',
        //            "CreatedBy": $scope.UserId,
        //            "CreatedOn": date,
        //            "OpportunityId": $scope.CurrentOpportunityId,
        //            "CompanyId": $scope.SelectedCompany.Id,
        //            "ParentActivityId": ''

        //        }];
        //        //Found error in Track JS so for that reason i coomment this  "Cannot read property '0' of undefined" https://my.trackjs.com/details/fc0534ed69f44f79bda7d5a2d237bf17#telemetry
        //        //QuestionnairesSalesService.InsertActivity(descriptionData).success(function (data, status, headers, config) {

        //        //    $scope.AllComment.push({
        //        //        "ActivityId": data[0].ActivityId,
        //        //        "ParentActivityId": data[0].ParentActivityId,
        //        //        "CreatedBy": data[0].CreatedBy,
        //        //        "ActivityDescription": data[0].ActivityDescription,
        //        //        "CreatedOn": data[0].CreatedOn,
        //        //        "OpportunityId": data[0].OpporutnityId,
        //        //        "Type": "Comment"
        //        //    });
        //        //    $scope.Description = "";
        //        //});
        //    }



        //}

        //$scope.Reply = {
        //    Comment: ''
        //};
        //$scope.ReplyToComment = function (parentId) {
        //    var date = new Date();

        //    var descriptionData = [{
        //        "ActivityDescription": $scope.Reply.Comment,
        //        "ActivityId": "",
        //        "ActivityType": '',
        //        "CreatedBy": $scope.UserId,
        //        "CreatedOn": date,
        //        "OpportunityId": $scope.CurrentOpportunityId,
        //        "CompanyId": $scope.SelectedCompany.Id,
        //        "ParentActivityId": parentId

        //    }];

        //    QuestionnairesSalesService.InsertActivity(descriptionData).success(function (data, status, headers, config) {
        //        $scope.Reply.Comment = "";
        //        $scope.AllReplies.push({ "ActivityId": data[0].ActivityId, "ParentActivityId": data[0].ParentActivityId, "CreatedBy": data[0].CreatedBy, "ActivityDescription": data[0].ActivityDescription, "CreatedOn": data[0].CreatedOn, "OpportunityId": data[0].OpportunityId });
        //    });
        //};

        //$scope.ShowCommentFilter = false;
        //$scope.FindActivityTextIndex = -1;
        //$scope.FindCommentTextIndex = -1;
        //$scope.FindTaskTextIndex = -1;

        //$scope.openFind = function ($event) {
        //    $event.stopPropagation();
        //    $event.preventDefault();
        //    $scope.ShowCommentFilter = true;
        //}

        //$scope.closeFind = function () {
        //    $scope.searchText = "";
        //    $scope.searchTextChat = "";
        //    $scope.searchTextActivity = "";
        //    $scope.ShowCommentFilter = false;
        //}

        //$scope.editorOptions = {
        //    tools: ["bold", "italic", "underline", "foreColor", "createLink", "unlink", "insertUnorderedList", "insertOrderedList"]
        //};

        //$scope.AddTask = {};
        //$scope.addTask = function () {

        //    if ($scope.CurrentLeadId) {
        //        $scope.TitleTask = "Add Task";
        //        $scope.AddTask.OpportunityId = $scope.CurrentLeadId;
        //        $scope.AddTask.AssignedTo = UserService.GetUserId();
        //        $scope.addTaskModal = $modal.open({
        //            scope: $scope,
        //            templateUrl: 'app/views/amz/OpportunityTaskPopup.html',
        //            keyboard: false
        //        });
        //    }
        //}

        //$scope.cancelTask = function () {
        //    if ($scope.addTaskModal) {
        //        $scope.addTaskModal.dismiss('cancel');
        //    }
        //}

        //$scope.GetTaskCategoryName = function (id) {

        //    return $.grep($scope.TaskCategories, function (e) {
        //        return e.TaskCategoryId == id;
        //    })[0].Name;

        //}

        //$scope.frmAddTaskSubmit = function (model, form) {
        //    console.log(model);
        //    if (form.$valid) {

        //        var taskCategory = "";
        //        if (model.TaskCategory) {
        //            taskCategory = $scope.GetTaskCategoryName(model.TaskCategory);
        //        }

        //        var title = taskCategory + ' with ' + model.Contact;

        //        var task = {
        //            "Title": title,
        //            "EndDate": model.EndDate,
        //            "Description": model.Description,
        //            "TaskCategoryId": model.TaskCategory

        //        };
        //        if (!$scope.OpportunityProjectId) {
        //            var project = [{
        //                Title: title,
        //                CompanyId: $scope.SelectedCompany.Id
        //            }];
        //            ProjectService.SaveProject(project).success(function (data) {
        //                $scope.OpportunityProjectId = data[0].ProjectId;
        //                $scope.CurrentOpportunity.ProjectId = data[0].ProjectId;
        //                QuestionnairesSalesService.UpdateOpportunity([$scope.CurrentOpportunity]).success(function () {
        //                    $scope.SaveTasks(task, model.AssignedTo);
        //                });
        //            });
        //        }
        //        else {
        //            $scope.SaveTasks(task, model.AssignedTo);
        //        }

        //    }
        //}

        //$scope.SaveTasks = function (model, userId) {
        //    model.ProjectId = $scope.OpportunityProjectId;
        //    model.OpportunityId = $scope.CurrentOpportunityId;
        //    model.UserId = UserService.GetUserId();

        //    TaskService.SaveTask([model]).success(function (data) {
        //        $scope.AllComment.push({
        //            "ActivityId": data[0].TaskId,
        //            "ParentActivityId": null,
        //            "CreatedBy": null,
        //            "ActivityDescription": data[0].Title,
        //            "CreatedOn": null,
        //            "OpporutnityId": null,
        //            "Type": "Task"
        //        });

        //        var assignments = [{
        //            "UserId": userId,
        //            "TaskId": data[0].TaskId,
        //            "AssignmentValue": 1
        //        }]
        //        TaskService.SaveAssignments(assignments);
        //        $scope.cancelTask();
        //    });
        //}

        //$scope.scrollbarConfig = {
        //    autoResize: true, // If true, will listen for DOM elements being added or removed inside the scroll container
        //    direction: 'vertical', // The direction of the scrollbar
        //    scrollbar: {
        //        width: 6, // Width (thickness. Is actually height on horizontal scrollbars) of the scrollbar
        //        hoverWidth: 8, // Width on scrollbar hover
        //        color: 'rgba(0,0,0, .6)', // Background color of the scrollbar
        //        show: false // If true, scrollbar will always be visible
        //    },
        //    scrollbarContainer: {
        //        width: 12, // Width of the container surrounding the scrollbar. Becomes visible on hover
        //        color: 'rgba(0,0,0, .1)' // Background color of the scrollbar container
        //    },
        //    scrollTo: 'end' // Scroll to the 'start' or 'end' on initialization and content changes. Pixel values may also be given.
        //}

        //$scope.setChatHeight = function () {
        //    $timeout(function () {
        //        var height = document.getElementById("chatScrollWrapper").scrollHeight;
        //        document.getElementById("chatScrollWrapper").scrollTop = height;
        //    }, 10);

        //};

        //$scope.filterActivity = function () {
        //    $timeout(function () {
        //        var results = $('#chatScrollWrapper').find('span.highlighted');
        //        $(results[0]).addClass('highlightedSelected');
        //        var test = $('.highlightedSelected')[0].offsetTop;
        //        $('#chatScrollWrapper').scrollTop(test + 300);
        //        console.log(test)
        //    }, 10);
        //}

        //$scope.OpportunitySource = [];
        //$scope.GetOpportunitySource = function () {
        //    OpportunitiesService.GetOpportunitiesSourceByCompanyId($scope.SelectedCompany.Id)
        //        .success(function (data) {
        //            $scope.OpportunitySource = [];
        //            $.each(data, function (key, value) {
        //                $scope.OpportunitySource.push({ "Title": value.Title, "Id": value.OpportunitySourceId });
        //            });
        //            console.log($scope.OpportunitySource)
        //        });
        //}
        //$scope.OpportunityResults = [];
        //$scope.GetOpportunityResults = function () {
        //    OpportunitiesService.GetOpportunitiesResultByCompanyId($scope.SelectedCompany.Id)
        //        .success(function (data) {
        //            $scope.OpportunityResults = [];
        //            $.each(data, function (key, value) {
        //                $scope.OpportunityResults.push({ "Title": value.Result, "Id": value.OpportunityResultId });
        //            });
        //        });
        //}


        //$scope.SouresListOptions = {
        //    dataTextField: "Title",
        //    dataValueField: "Id",
        //    dataSource: $scope.OpportunitySource,
        //    change: function (e) {
        //        $rootScope.$broadcast('onFilterChanged', {
        //            'Source': $scope.Source,
        //            'Status': $scope.Status,
        //        });
        //    },
        //};

        //$scope.StatusListOptions = {
        //    dataTextField: "Title",
        //    dataValueField: "Id",
        //    dataSource: $scope.OpportunityResults,
        //    change: function (e) {
        //        $rootScope.$broadcast('onFilterChanged', {
        //            'Source': $scope.Source,
        //            'Status': $scope.Status,
        //        });
        //    },
        //};

        //$scope.clearFilter = function () {
        //    $rootScope.$broadcast('onFilterCleared', {});
        //};

        //$scope.stopCloseTogger = function (e) {
        //    $('.myopen').addClass('open');
        //    e.stopPropagation();
        //};

        //$scope.SetTokensignUp = 'false';
        //$scope.SetTokensignUp = UserService.GetTokensignUp("setTokanforSignup");
        //if ($scope.SetTokensignUp == 'true') {
        //    $timeout(function () {
        //        $scope.addTab('Company List', 'app/views/amz/CompanyOrganizationView.html')
        //    }, 3000);
        //}




        //$scope.tabs = [
        //    { link: '#/home', label: 'Dashboard' }
        //];


        //$scope.selectedTab = $scope.tabs[0];


        //$scope.setSelectedTab = function (tab) {
        //    $scope.selectedTab = tab;
        //}

        //$scope.tabClass = function (tab) {
        //    if ($scope.selectedTab == tab) {
        //        return "active";
        //    } else {
        //        return "";
        //    }
        //}

        //function setActiveTab() {
        //    var hash = window.location.hash;
        //    var index = $scope.tabs.map(function (x) { return x.link; }).indexOf(hash);
        //    if (index > -1) {
        //        $scope.setSelectedTab = $scope.tabs[index];
        //    }
        //};

        //$scope.closeTab = function ($event, tabname) {
        //    // debugger

        //    var tabName = tabname;

        //    if (tabName.trim() == '#/SalesSummaryManualEntry') {


        //        $rootScope.$broadcast('ManualEntry', tabName);

        //    }
        //    //else if (tabName.trim() == '#/SalesGoals') {


        //    //    $rootScope.$broadcast('CloseSalesGoals', tabName);

        //    //}
        //    else if (tabName.trim() == '#/productsearch') {

        //        $interval.cancel($rootScope.promiseProductSearchInterval);
        //        $scope.TabClosed(tabName);

        //    }
        //    else if (tabName.trim() == '#/ecommercesuppliers') {


        //        $interval.cancel($rootScope.promiseSupplierInterval);
        //        $scope.TabClosed(tabName);
        //    }
        //    else if (tabName.trim() == '#/brandsview') {


        //        $interval.cancel($rootScope.promiseBrandInterval);
        //        $scope.TabClosed(tabName);

        //    }
        //    else if (tabName.trim() == '#/showview') {


        //        $interval.cancel($rootScope.promiseTradeShowInterval);
        //        $scope.TabClosed(tabName);

        //    }
        //    else {
        //        $scope.TabClosed(tabName);
        //    }
        //}
        //$scope.TabClosed = function (tabname) {
        //    var index = $scope.tabs.map(function (x) { return x.link; }).indexOf(tabname);
        //    console.log(index);
        //    $scope.tabs.splice(index, 1);
        //    $scope.selectedTab = $scope.tabs[index - 1];
        //    $scope.tabClass($scope.selectedTab);
        //    $rootScope.$broadcast('ClearFilterCache', {});
        //    $location.path($scope.selectedTab.link.replace('#/', ''));
        //}
        //$scope.addTab = function (title, route) {

        //    var hash = '#/' + route;
        //    $scope.SetTokensignUp = 'false';
        //    var index = $scope.tabs.map(function (x) { return x.link; }).indexOf(hash);
        //    if (index == -1) {
        //        $scope.tabs.push({
        //            link: hash,
        //            label: title
        //        });
        //        var newIndex = $scope.tabs.map(function (x) { return x.link; }).indexOf(hash);
        //        $scope.selectedTab = $scope.tabs[newIndex];
        //        $location.path("/" + route);
        //    }
        //    else {
        //        $scope.selectedTab = $scope.tabs[index];
        //        $location.path("/" + route);
        //        $scope.tabClass($scope.tabs[index]);

        //    }

        //};

        //$scope.GetAllowDashboardForUser = function () {
        //    UserService.GetAllowDashboardForUser(UserService.GetUserId()).success(function (data, status, headers, config) {
        //        SharedService.SetBuyerDashboardAllowed(data.IsBuyerDashboardAllowed);
        //        SharedService.SetSalesDashboardAllowed(data.IsSalesDashboardAllowed);

        //        //if (data == null)
        //        //    $scope.tabs = [];
        //        //else {

        //        //    var isBuyerAllowed = data.filter(function (e) { return e.DashboardType == 0 && e.IsDisplay == true }).length > 0;
        //        //    var isSalesAllowed = data.filter(function (e) { return e.DashboardType == 1 && e.IsDisplay == true }).length > 0;

        //        //    if (!isBuyerAllowed && !isSalesAllowed)
        //        //        $scope.tabs = [];
        //        //    //checking if buyer dashboard is allowed to display
        //        //    SharedService.SetBuyerDashboardAllowed(data.filter(function (e) { return e.DashboardType == 0 && e.IsDisplay==true }).length > 0);
        //        //    SharedService.SetSalesDashboardAllowed(data.filter(function (e) { return e.DashboardType == 1 && e.IsDisplay == true }).length > 0);
        //        //}
        //    });
        //}
        //$scope.GetAllowRecipeTabs = function () {

        //    UserService.GetAllowRecipeTabs(UserService.GetUserId()).success(function (data, status, headers, config) {
        //        SharedService.SetRecipeTabAllowed(data.IsRecipeAllowed);
        //        SharedService.SetProcessTabAllowed(data.IsProcessAllowed);
        //    });
        //}
        //$scope.GetAllowRecipeTabs();
        //$scope.GetAllowDashboardForUser();

    }]);
