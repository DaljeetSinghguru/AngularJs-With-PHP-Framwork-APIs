var app = angular.module('webApp', [
    'ngRoute', 'ui.bootstrap',
]);

//app.config(['$httpProvider', function ($httpProvider) {
//    debugger
//    $httpProvider.interceptors.push('httpInterceptor');

//}]);

app.config(['$routeProvider', function ($routeProvider) {
    
    // $httpProvider.interceptors.push('httpInterceptor');

    $routeProvider
        .when('/home', {
            templateUrl: 'Dashboard1.html',
            contrller: 'loginController'
        })
        .when('/dashboardreport', {
            templateUrl: 'Dashboard2.html',
            contrller: 'loginController'
        })
        .when('/helpdesk', {
            templateUrl: 'helpdeskview.html',
            contrller: 'UserProfileController'
        })
        .when('/masterhelpdesk', {
            templateUrl: 'masterhelpdeskview.html',
            contrller: 'UserProfileController'
        })
        .when('/masterstatus', {
            templateUrl: 'MasterStatusview.html',
            contrller: 'UserProfileController'
        })
       
        .when('/userprofile', {
            templateUrl: 'UserProfile.html',
            contrller: 'UserProfileController'
        })
        .when('/faq', {
            templateUrl: 'faqview.html',
            contrller: 'UserProfileController'
        })
        .when('/mastercountry', {
            templateUrl: 'countryview.html',
            contrller: 'UserProfileController'
        })
		   .when('/masterrolemenu', {
            templateUrl: 'departmentrolemenuview.html',
            contrller: 'departmentrolemenuController'
        })
        .when('/masterdepartment', {
            templateUrl: 'departmentview.html',
            contrller: 'UserProfileController'
        })
        .when('/masterrole', {
            templateUrl: 'roleview.html',
            contrller: 'RoleController'
        })
        .when('/mastermessagetype', {
            templateUrl: 'messagetypeview.html',
            contrller: 'MessagetypeController'
        })
        .when('/mastermodule', {
            templateUrl: 'Modulesview.html',
            contrller: 'ModulesController'
        })
        .when('/dashboardcategory', {
            templateUrl: 'DashboardCategoryview.html',
            contrller: 'DashboardCategoryController'
        })
        .when('/departmentrole', {
            templateUrl: 'Departmentroleview.html',
            contrller: 'DepartmentroleController'
        })
        .when('/mastercompany', {
            templateUrl: 'Companyview.html',
            contrller: 'CompanyController'
        })
		 .when('/usermanagement', {
            templateUrl: 'usermanagementview.html',
            contrller: 'usermanagementController'
        })
        .when('/ForgetPassword', {
            templateUrl: 'app/views/ForgetPassword.html',
        })
        .when('/messageview', {
            templateUrl: 'messageview.html',
        })
		 .when('/mastermenu', {
            templateUrl: 'menuview.html',
        })
        .when('/masteruserstatus', {
            templateUrl: 'UserStatusview.html',
        })
        //.when('/resetpassword/:code', {
        //    templateUrl: 'app/views/ResetPassword.html',
        //})
        .when('/resetpassword/', {
            url: '?Code&Email',
            templateUrl: 'app/views/ResetPassword.html',
        })
        .when('/mastertableaulicence', {
            templateUrl: 'Tableaulicenceview.html',
            contrller: 'TableaulicenceController'
        })
        .when('/tableaulicencetype', {
            templateUrl: 'TableaulicenceTypeview.html',
            contrller: 'TableaulicenceTypeController'
        })
        .when('/modulescheduler', {
            templateUrl: 'ModuleschedulerView.html',
            contrller: 'ModuleschedulerController'
        })
        .when('/changepassword/', {
            templateUrl: 'app/views/changepassword.html',
            contrller: 'ChangePasswordController',
        })
        .otherwise({
            redirectTo: '/home'
        });



}]);

app.directive('treeViewmenu', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            localNodes: '=model',
            localClick: '&click'
        },
        link: function (scope, tElement, tAttrs, transclude) {

            var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels;
            var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
            scope.showItems = [];

            scope.showHide = function (ulId) {
                var hideThis = document.getElementById(ulId);
                var showHide = angular.element(hideThis).attr('class');
                angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
            }

            scope.showIcon = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            scope.checkIfChildren = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            /////////////////////////////////////////////////
            /// SELECT ALL CHILDRENS
            // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
            function parentCheckChange(item) {
                for (var i in item.children) {
                    item.children[i].checked = item.checked;
                    if (item.children[i].children) {
                        parentCheckChange(item.children[i]);
                    }
                }
            }

            scope.checkChange = function (node) {
                debugger
                if (node.children) {
                    parentCheckChange(node);
                }
            }
            /////////////////////////////////////////////////
            function functions(data) {
                debugger
                alert(data);
            }
            function renderTreeView(collection, level, max) {
                var text = '';
                text += '<li  ng-repeat="n in ' + collection + '" >';
                text += '<span ng-show=showIcon(n) class="show-hide" ng-click=showHide(n.id)><i class="fa fa-plus-square"></i></span>';
                text += '<span ng-show=!showIcon(n) style="padding-right: 13px"></span>';
                //if (hasCheckBox) {
                //    text += '<input class="tree-checkbox" name="treeviewnodedepartmentrolemenu" type=checkbox value="{{n.id}}" ng-model=n.checked ng-change=checkChange(n)>';
                //}
                //text += '<span class="edit" ng-click=localClick({node:n})><i class="fa fa-pencil"></i></span>'
                text += '<span ng-click="functions(n.id)">{{n.id}}</span>';
                text += '<label>{{n.text}}</label>';
                if (level < max) {
                    text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>' + renderTreeView('n.children', level + 1, max) + '</ul></li>';
                } else {
                    text += '</li>';
                }

                return text;
            }// end renderTreeView();

          
            try {
                var text = '<ul class="tree-view-wrapper">';
                text += renderTreeView('localNodes', 1, maxLevels);
                text += '</ul>';
                tElement.html(text);
                $compile(tElement.contents())(scope);
            }
            catch (err) {
                tElement.html('<b>ERROR!!!</b> - ' + err);
                $compile(tElement.contents())(scope);
            }
        }
    };
});

app.directive('treeViewdepartmentrolemenu', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            localNodes: '=model',
            localClick: '&click'
        },
        link: function (scope, tElement, tAttrs, transclude) {

            var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels;
            var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
            scope.showItems = [];

            scope.showHide = function (ulId) {
                var hideThis = document.getElementById(ulId);
                var showHide = angular.element(hideThis).attr('class');
                angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
            }

            scope.showIcon = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            scope.checkIfChildren = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            /////////////////////////////////////////////////
            /// SELECT ALL CHILDRENS
            // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
            function parentCheckChange(item) {
                for (var i in item.children) {
                    item.children[i].checked = item.checked;
                    if (item.children[i].children) {
                        parentCheckChange(item.children[i]);
                    }
                }
            }

            scope.checkChange = function (node) {
                debugger
                if (node.children) {
                    parentCheckChange(node);
                }
            }
            /////////////////////////////////////////////////

            function renderTreeView(collection, level, max) {
                var text = '';
                text += '<li ng-repeat="n in ' + collection + '" >';
                text += '<span ng-show=showIcon(n) class="show-hide" ng-click=showHide(n.id)><i class="fa fa-plus-square"></i></span>';
                text += '<span ng-show=!showIcon(n) style="padding-right: 13px"></span>';
                if (hasCheckBox) {
                    text += '<input class="tree-checkbox" name="treeviewnodedepartmentrolemenu" type=checkbox value="{{n.id}}" ng-model=n.checked ng-change=checkChange(n)>';
                }
                text += '<span class="edit" ng-click=localClick({node:n})><i class="fa fa-pencil"></i></span>'
                text += '<label>{{n.text}}</label>';
                if (level < max) {
                    text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>' + renderTreeView('n.children', level + 1, max) + '</ul></li>';
                } else {
                    text += '</li>';
                }

                return text;
            }// end renderTreeView();

            try {
                var text = '<ul class="tree-view-wrapper">';
                text += renderTreeView('localNodes', 1, maxLevels);
                text += '</ul>';
                tElement.html(text);
                $compile(tElement.contents())(scope);
            }
            catch (err) {
                tElement.html('<b>ERROR!!!</b> - ' + err);
                $compile(tElement.contents())(scope);
            }
        }
    };
});

app.directive('treeViewdashboard', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            localNodes: '=model',
            localClick: '&click'
        },
        link: function (scope, tElement, tAttrs, transclude) {

            var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels;
            var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
            scope.showItems = [];

            scope.showHide = function (ulId) {
                var hideThis = document.getElementById(ulId);
                var showHide = angular.element(hideThis).attr('class');
                angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
            }

            scope.showIcon = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            scope.checkIfChildren = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            /////////////////////////////////////////////////
            /// SELECT ALL CHILDRENS
            // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
            function parentCheckChange(item) {
                for (var i in item.children) {
                    item.children[i].checked = item.checked;
                    if (item.children[i].children) {
                        parentCheckChange(item.children[i]);
                    }
                }
            }

            scope.checkChange = function (node) {
                debugger
                if (node.children) {
                    parentCheckChange(node);
                }
            }
            /////////////////////////////////////////////////

            function renderTreeView(collection, level, max) {
                var text = '';
                text += '<li ng-repeat="n in ' + collection + '" >';
                text += '<span ng-show=showIcon(n) class="show-hide" ng-click=showHide(n.id)><i class="fa fa-plus-square"></i></span>';
                text += '<span ng-show=!showIcon(n) style="padding-right: 13px"></span>';
                if (hasCheckBox) {
                    text += '<input class="tree-checkbox" name="tree11dashboard" type=checkbox value="{{n.id}}" ng-model=n.checked ng-change=checkChange(n)>';
                }
                text += '<span class="edit" ng-click=localClick({node:n})><i class="fa fa-pencil"></i></span>'
                text += '<label>{{n.text}}</label>';
                if (level < max) {
                    text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>' + renderTreeView('n.children', level + 1, max) + '</ul></li>';
                } else {
                    text += '</li>';
                }

                return text;
            }// end renderTreeView();

            try {
                var text = '<ul class="tree-view-wrapper">';
                text += renderTreeView('localNodes', 1, maxLevels);
                text += '</ul>';
                tElement.html(text);
                $compile(tElement.contents())(scope);
            }
            catch (err) {
                tElement.html('<b>ERROR!!!</b> - ' + err);
                $compile(tElement.contents())(scope);
            }
        }
    };
});


app.directive('treeView', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            localNodes: '=model',
            localClick: '&click'
        },
        link: function (scope, tElement, tAttrs, transclude) {

            var maxLevels = (angular.isUndefined(tAttrs.maxlevels)) ? 10 : tAttrs.maxlevels;
            var hasCheckBox = (angular.isUndefined(tAttrs.checkbox)) ? false : true;
            scope.showItems = [];

            scope.showHide = function (ulId) {
                var hideThis = document.getElementById(ulId);
                var showHide = angular.element(hideThis).attr('class');
                angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));
            }

            scope.showIcon = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            scope.checkIfChildren = function (node) {
                if (!angular.isUndefined(node.children)) return true;
            }

            /////////////////////////////////////////////////
            /// SELECT ALL CHILDRENS
            // as seen at: http://jsfiddle.net/incutonez/D8vhb/5/
            function parentCheckChange(item) {
                for (var i in item.children) {
                    item.children[i].checked = item.checked;
                    if (item.children[i].children) {
                        parentCheckChange(item.children[i]);
                    }
                }
            }

            scope.checkChange = function (node) {
                debugger
                if (node.children) {
                    parentCheckChange(node);
                }
            }
            /////////////////////////////////////////////////

            function renderTreeView(collection, level, max) {
                var text = '';
                text += '<li ng-repeat="n in ' + collection + '" >';
                text += '<span ng-show=showIcon(n) class="show-hide" ng-click=showHide(n.id)><i class="fa fa-plus-square"></i></span>';
                text += '<span ng-show=!showIcon(n) style="padding-right: 13px"></span>';
                if (hasCheckBox) {
                    text += '<input class="tree-checkbox" name="tree11" type=checkbox value="{{n.id}}" ng-model=n.checked ng-change=checkChange(n)>';
                }
                text += '<span class="edit" ng-click=localClick({node:n})><i class="fa fa-pencil"></i></span>'
                text += '<label>{{n.text}}</label>';
                if (level < max) {
                    text += '<ul id="{{n.id}}" class="hide" ng-if=checkIfChildren(n)>' + renderTreeView('n.children', level + 1, max) + '</ul></li>';
                } else {
                    text += '</li>';
                }

                return text;
            }// end renderTreeView();

            try {
                var text = '<ul class="tree-view-wrapper">';
                text += renderTreeView('localNodes', 1, maxLevels);
                text += '</ul>';
                tElement.html(text);
                $compile(tElement.contents())(scope);
            }
            catch (err) {
                tElement.html('<b>ERROR!!!</b> - ' + err);
                $compile(tElement.contents())(scope);
            }
        }
    };
});
 app.directive('renderIframely', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, element, attrs) {
            $timeout(function () {
                // Run code after element is rendered                        
                window.iframely && iframely.load();
            }, 0, false);
        }
    };
}])
app.directive('mfDropdownStaticInclude', ['$compile', function ($compile) {
    return function (scope, element, attrs) {
        var template = attrs.mfDropdownStaticInclude;
        var contents = element.html(template).contents();
        $compile(contents)(scope);
    };
}]);

app.directive('ngDropdownMultiselect', ['$filter', '$document', '$compile', '$parse', function ($filter, $document, $compile, $parse) {
    return {
        restrict: 'AE',
        scope: {
            selectedModel: '=',
            options: '=',
            extraSettings: '=',
            events: '=',
            searchFilter: '=?',
            translationTexts: '=',
            groupBy: '@',
            disabled: "="
        },
        template: function (element, attrs) {
            var checkboxes = attrs.checkboxes ? true : false;
            var groups = attrs.groupBy ? true : false;

            var template = '<div class="multiselect-parent btn-group dropdown-multiselect" ng-class="{open: open}">';
            template += '<button ng-disabled="disabled" type="button" class="dropdown-toggle" ng-class="settings.buttonClasses" ng-click="toggleDropdown()">{{getButtonText()}}&nbsp;<span class="caret"></span></button>';
            template += '<ul class="dropdown-menu dropdown-menu-form" ng-if="open" ng-style="{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\', overflow: \'auto\' }" >';
            template += '<li ng-if="settings.showCheckAll && settings.selectionLimit !== 1"><a ng-keydown="keyDownLink($event)" data-ng-click="selectAll()" tabindex="-1" id="selectAll"><span class="glyphicon glyphicon-ok"></span>  {{texts.checkAll}}</a>';
            template += '<li ng-if="settings.showUncheckAll"><a ng-keydown="keyDownLink($event)" data-ng-click="deselectAll();" tabindex="-1" id="deselectAll"><span class="glyphicon glyphicon-remove"></span>   {{texts.uncheckAll}}</a></li>';
            template += '<li ng-if="settings.selectByGroups && ((settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll)" class="divider"></li>';
            template += '<li ng-if="settings.selectByGroups && ((settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll)" class="divider"></li>';
            template += '<li ng-repeat="currentGroup in settings.selectByGroups track by $index" ng-click="selectCurrentGroup(currentGroup)"><a ng-class="{\'dropdown-selected-group\': selectedGroup === currentGroup}" tabindex="-1">{{::texts.selectGroup}} {{::getGroupLabel(currentGroup)}}</a></li>';
            template += '<li ng-if="settings.selectByGroups && settings.showEnableSearchButton" class="divider"></li>';
            template += '<li ng-if="settings.showEnableSearchButton && settings.enableSearch"><a ng-keydown="keyDownLink($event); keyDownToggleSearch();" ng-click="toggleSearch($event);" tabindex="-1">{{texts.disableSearch}}</a></li>';
            template += '<li ng-if="settings.showEnableSearchButton && !settings.enableSearch"><a ng-keydown="keyDownLink($event); keyDownToggleSearch();" ng-click="toggleSearch($event);" tabindex="-1">{{texts.enableSearch}}</a></li>';
            template += '<li ng-if="(settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll || settings.showEnableSearchButton" class="divider"></li>';
            template += '<li ng-if="settings.enableSearch"><div class="dropdown-header"><input type="text" class="form-control searchField" ng-keydown="keyDownSearchDefault($event); keyDownSearch($event, input.searchFilter);" ng-style="{width: \'100%\'}" ng-model="input.searchFilter" placeholder="{{texts.searchPlaceholder}}" /></li>';
            template += '<li ng-if="settings.enableSearch" class="divider"></li>';

            if (groups) {
                template += '<li ng-repeat-start="option in orderedItems | filter:getFilter(input.searchFilter)" ng-show="getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)" role="presentation" class="dropdown-header">{{ getGroupLabel(getPropertyForObject(option, settings.groupBy)) }}</li>';
                template += '<li ng-class="{\'active\': isChecked(getPropertyForObject(option,settings.idProp)) && settings.styleActive}" ng-repeat-end role="presentation">';
            } else {
                template += '<li ng-class="{\'active\': isChecked(getPropertyForObject(option,settings.idProp)) && settings.styleActive}" role="presentation" ng-repeat="option in options | filter:getFilter(input.searchFilter)">';
            }

            template += '<a ng-keydown="option.disabled || keyDownLink($event)" role="menuitem" class="option" tabindex="-1" ng-click="option.disabled || setSelectedItem(getPropertyForObject(option,settings.idProp), false, true)" ng-disabled="option.disabled">';

            if (checkboxes) {
                template += '<div class="checkbox"><label><input class="checkboxInput" type="checkbox" ng-click="checkboxClick($event, getPropertyForObject(option,settings.idProp))" ng-checked="isChecked(getPropertyForObject(option,settings.idProp))" /> <span mf-dropdown-static-include="{{settings.template}}"></div></label></span></a>';
            } else {
                template += '<span data-ng-class="{\'glyphicon glyphicon-ok\': isChecked(getPropertyForObject(option,settings.idProp))}"> </span> <span mf-dropdown-static-include="{{settings.template}}"></span></a>';
            }

            template += '</li>';

            template += '<li class="divider" ng-show="settings.selectionLimit > 1"></li>';
            template += '<li role="presentation" ng-show="settings.selectionLimit > 1"><a role="menuitem">{{selectedModel.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}}</a></li>';

            template += '</ul>';
            template += '</div>';

            element.html(template);
        },
        link: function ($scope, $element, $attrs) {
            var $dropdownTrigger = $element.children()[0];

            $scope.toggleDropdown = function () {
                if ($scope.open) {
                    $scope.close()
                } else { $scope.open = true }
                if ($scope.settings.keyboardControls) {
                    if ($scope.open) {
                        if ($scope.settings.selectionLimit === 1 && $scope.settings.enableSearch) {
                            setTimeout(function () {
                                angular.element($element)[0].querySelector('.searchField').focus();
                            }, 0);
                        } else {
                            setTimeout(function () {
                                angular.element($element)[0].querySelector('.option').focus();
                            }, 0);
                        }
                    }
                }
            };

            $scope.checkboxClick = function ($event, id) {
                $scope.setSelectedItem(id, false, true);
                $event.stopImmediatePropagation();
            };

            $scope.externalEvents = {
                onItemSelect: angular.noop,
                onItemDeselect: angular.noop,
                onSelectAll: angular.noop,
                onDeselectAll: angular.noop,
                onInitDone: angular.noop,
                onMaxSelectionReached: angular.noop,
                onSelectionChanged: angular.noop,
                onClose: angular.noop
            };

            $scope.settings = {
                dynamicTitle: true,
                scrollable: false,
                scrollableHeight: '300px',
                closeOnBlur: true,
                displayProp: 'label',
                idProp: 'id',
                externalIdProp: 'id',
                enableSearch: false,
                selectionLimit: 0,
                showCheckAll: true,
                showUncheckAll: true,
                showEnableSearchButton: false,
                closeOnSelect: false,
                buttonClasses: 'btn btn-default',
                closeOnDeselect: false,
                groupBy: $attrs.groupBy || undefined,
                groupByTextProvider: null,
                smartButtonMaxItems: 0,
                smartButtonTextConverter: angular.noop,
                styleActive: false,
                keyboardControls: false,
                template: '{{getPropertyForObject(option, settings.displayProp)}}',
                searchField: '$'
            };

            $scope.texts = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: 'Select',
                dynamicButtonTextSuffix: 'checked',
                disableSearch: 'Disable search',
                enableSearch: 'Enable search',
                selectGroup: 'Select all:'
            };

            $scope.input = {
                searchFilter: $scope.searchFilter || ''
            };

            if (angular.isDefined($scope.settings.groupBy)) {
                $scope.$watch('options', function (newValue) {
                    if (angular.isDefined(newValue)) {
                        $scope.orderedItems = $filter('orderBy')(newValue, $scope.settings.groupBy);
                    }
                });
            }

            $scope.$watch('selectedModel', function (newValue) {
                if (!Array.isArray(newValue)) {
                    $scope.singleSelection = true;
                } else {
                    $scope.singleSelection = false;
                }
            });

            $scope.close = function () {
                $scope.open = false;
                $scope.externalEvents.onClose();
            }

            $scope.selectCurrentGroup = function (currentGroup) {
                $scope.selectedModel.splice(0, $scope.selectedModel.length);
                if ($scope.orderedItems) {
                    $scope.orderedItems.forEach(function (item) {
                        if (item[$scope.groupBy] === currentGroup) {
                            $scope.setSelectedItem($scope.getPropertyForObject(item, $scope.settings.idProp), false, false)
                        }
                    });
                }
                $scope.externalEvents.onSelectionChanged();
            };

            angular.extend($scope.settings, $scope.extraSettings || []);
            angular.extend($scope.externalEvents, $scope.events || []);
            angular.extend($scope.texts, $scope.translationTexts);

            $scope.singleSelection = $scope.settings.selectionLimit === 1;

            function getFindObj(id) {
                var findObj = {};

                if ($scope.settings.externalIdProp === '') {
                    findObj[$scope.settings.idProp] = id;
                } else {
                    findObj[$scope.settings.externalIdProp] = id;
                }

                return findObj;
            }

            function clearObject(object) {
                for (var prop in object) {
                    delete object[prop];
                }
            }

            if ($scope.singleSelection) {
                if (angular.isArray($scope.selectedModel) && $scope.selectedModel.length === 0) {
                    clearObject($scope.selectedModel);
                }
            }

            if ($scope.settings.closeOnBlur) {
                $document.on('click', function (e) {
                    if ($scope.open) {
                        var target = e.target.parentElement;
                        var parentFound = false;

                        while (angular.isDefined(target) && target !== null && !parentFound) {
                            if (!!target.className.split && contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {
                                if (target === $dropdownTrigger) {
                                    parentFound = true;
                                }
                            }
                            target = target.parentElement;
                        }

                        if (!parentFound) {
                            $scope.$apply(function () {
                                $scope.close();
                            });
                        }
                    }
                });
            }

            $scope.getGroupLabel = function (groupValue) {
                if ($scope.settings.groupByTextProvider !== null) {
                    return $scope.settings.groupByTextProvider(groupValue);
                }

                return groupValue;
            };

            $scope.getButtonText = function () {
                if ($scope.settings.dynamicTitle && ($scope.selectedModel.length > 0 || (angular.isObject($scope.selectedModel) && Object.keys($scope.selectedModel).length > 0))) {
                    if ($scope.settings.smartButtonMaxItems > 0) {
                        var itemsText = [];

                        angular.forEach($scope.options, function (optionItem) {
                            if ($scope.isChecked($scope.getPropertyForObject(optionItem, $scope.settings.idProp))) {
                                var displayText = $scope.getPropertyForObject(optionItem, $scope.settings.displayProp);
                                var converterResponse = $scope.settings.smartButtonTextConverter(displayText, optionItem);

                                itemsText.push(converterResponse ? converterResponse : displayText);
                            }
                        });

                        if ($scope.selectedModel.length > $scope.settings.smartButtonMaxItems) {
                            itemsText = itemsText.slice(0, $scope.settings.smartButtonMaxItems);
                            itemsText.push('...');
                        }

                        return itemsText.join(', ');
                    } else {
                        var totalSelected;

                        if ($scope.singleSelection) {
                            totalSelected = ($scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.idProp])) ? 1 : 0;
                        } else {
                            totalSelected = angular.isDefined($scope.selectedModel) ? $scope.selectedModel.length : 0;
                        }

                        if (totalSelected === 0) {
                            return $scope.texts.buttonDefaultText;
                        } else {
                            return totalSelected + ' ' + $scope.texts.dynamicButtonTextSuffix;
                        }
                    }
                } else {
                    return $scope.texts.buttonDefaultText;
                }
            };

            $scope.getPropertyForObject = function (object, property) {
                if (angular.isDefined(object) && object.hasOwnProperty(property)) {
                    return object[property];
                }

                return undefined;
            };

            $scope.selectAll = function () {
                var searchResult;
                $scope.deselectAll(true);
                $scope.externalEvents.onSelectAll();

                searchResult = $filter('filter')($scope.options, $scope.getFilter($scope.input.searchFilter));
                angular.forEach(searchResult, function (value) {
                    $scope.setSelectedItem(value[$scope.settings.idProp], true, false);
                });
                $scope.externalEvents.onSelectionChanged();
                $scope.selectedGroup = null;
            };

            $scope.deselectAll = function (dontSendEvent) {
                dontSendEvent = dontSendEvent || false;

                if (!dontSendEvent) {
                    $scope.externalEvents.onDeselectAll();
                }

                if ($scope.singleSelection) {
                    clearObject($scope.selectedModel);
                } else {
                    $scope.selectedModel.splice(0, $scope.selectedModel.length);
                }
                if (!dontSendEvent) {
                    $scope.externalEvents.onSelectionChanged();
                }
                $scope.selectedGroup = null;
            };

            $scope.setSelectedItem = function (id, dontRemove, fireSelectionChange) {
                var findObj = getFindObj(id);
                var finalObj = null;

                if ($scope.settings.externalIdProp === '') {
                    finalObj = find($scope.options, findObj);
                } else {
                    finalObj = findObj;
                }

                if ($scope.singleSelection) {
                    clearObject($scope.selectedModel);
                    angular.extend($scope.selectedModel, finalObj);
                    if (fireSelectionChange) {
                        $scope.externalEvents.onItemSelect(finalObj);
                    }
                    if ($scope.settings.closeOnSelect || $scope.settings.closeOnDeselect) $scope.close();
                } else {
                    dontRemove = dontRemove || false;

                    var exists = findIndex($scope.selectedModel, findObj) !== -1;

                    if (!dontRemove && exists) {
                        $scope.selectedModel.splice(findIndex($scope.selectedModel, findObj), 1);
                        $scope.externalEvents.onItemDeselect(findObj);
                        if ($scope.settings.closeOnDeselect) $scope.close();
                    } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.selectedModel.length < $scope.settings.selectionLimit)) {
                        $scope.selectedModel.push(finalObj);
                        if (fireSelectionChange) {
                            $scope.externalEvents.onItemSelect(finalObj);
                        }
                        if ($scope.settings.closeOnSelect) $scope.close();
                        if ($scope.settings.selectionLimit > 0 && $scope.selectedModel.length === $scope.settings.selectionLimit) {
                            $scope.externalEvents.onMaxSelectionReached();
                        }
                    }
                }
                if (fireSelectionChange) {
                    $scope.externalEvents.onSelectionChanged();
                }
                $scope.selectedGroup = null;
            };

            $scope.isChecked = function (id) {
                if ($scope.singleSelection) {
                    return $scope.selectedModel !== null && angular.isDefined($scope.selectedModel[$scope.settings.externalIdProp]) && $scope.selectedModel[$scope.settings.externalIdProp] === getFindObj(id)[$scope.settings.externalIdProp];
                }

                return findIndex($scope.selectedModel, getFindObj(id)) !== -1;
            };

            $scope.externalEvents.onInitDone();

            $scope.keyDownLink = function (event) {
                var sourceScope = angular.element(event.target).scope();
                var nextOption;
                var parent = event.target.parentNode;
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 13 || event.keyCode === 32) { // enter
                    event.preventDefault();
                    if (!!sourceScope.option) {
                        $scope.setSelectedItem($scope.getPropertyForObject(sourceScope.option, $scope.settings.idProp), false, true);
                    } else if (event.target.id === 'deselectAll') {
                        $scope.deselectAll();
                    } else if (event.target.id === 'selectAll') {
                        $scope.selectAll();
                    }
                } else if (event.keyCode === 38) { // up arrow
                    event.preventDefault();
                    if (!!parent.previousElementSibling) {
                        nextOption = parent.previousElementSibling.querySelector('a') || parent.previousElementSibling.querySelector('input');
                    }
                    while (!nextOption && !!parent) {
                        parent = parent.previousElementSibling;
                        if (!!parent) {
                            nextOption = parent.querySelector('a') || parent.querySelector('input');
                        }
                    }
                    if (!!nextOption) {
                        nextOption.focus();
                    }
                } else if (event.keyCode === 40) { // down arrow
                    event.preventDefault();
                    if (!!parent.nextElementSibling) {
                        nextOption = parent.nextElementSibling.querySelector('a') || parent.nextElementSibling.querySelector('input');
                    }
                    while (!nextOption && !!parent) {
                        parent = parent.nextElementSibling;
                        if (!!parent) {
                            nextOption = parent.querySelector('a') || parent.querySelector('input');
                        }
                    }
                    if (!!nextOption) {
                        nextOption.focus();
                    }
                } else if (event.keyCode === 27) {
                    event.preventDefault();

                    $scope.toggleDropdown();
                }
            };

            $scope.keyDownSearchDefault = function (event) {
                var parent = event.target.parentNode.parentNode;
                var nextOption;
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 9 || event.keyCode === 40) { //tab
                    event.preventDefault();
                    setTimeout(function () {
                        angular.element($element)[0].querySelector('.option').focus();
                    }, 0);
                } else if (event.keyCode === 38) {
                    event.preventDefault();
                    if (!!parent.previousElementSibling) {
                        nextOption = parent.previousElementSibling.querySelector('a') || parent.previousElementSibling.querySelector('input');
                    }
                    while (!nextOption && !!parent) {
                        parent = parent.previousElementSibling;
                        if (!!parent) {
                            nextOption = parent.querySelector('a') || parent.querySelector('input');
                        }
                    }
                    if (!!nextOption) {
                        nextOption.focus();
                    }
                } else if (event.keyCode === 27) {
                    event.preventDefault();

                    $scope.toggleDropdown();
                }
            };

            $scope.keyDownSearch = function (event, searchFilter) {
                var searchResult;
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 13) {
                    if ($scope.settings.selectionLimit === 1 && $scope.settings.enableSearch) {
                        searchResult = $filter('filter')($scope.options, $scope.getFilter(searchFilter));
                        if (searchResult.length === 1) {
                            $scope.setSelectedItem($scope.getPropertyForObject(searchResult[0], $scope.settings.idProp), false, true);
                        }
                    } else if ($scope.settings.enableSearch) {
                        $scope.selectAll();
                    }
                }
            };

            $scope.getFilter = function (searchFilter) {
                var filter = {};
                filter[$scope.settings.searchField] = searchFilter;
                return filter;
            };

            $scope.toggleSearch = function ($event) {
                if ($event) {
                    $event.stopPropagation();
                }
                $scope.settings.enableSearch = !$scope.settings.enableSearch;
                if (!$scope.settings.enableSearch) {
                    $scope.input.searchFilter = '';
                }
            };

            $scope.keyDownToggleSearch = function () {
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 13) {
                    $scope.toggleSearch();
                    if ($scope.settings.enableSearch) {
                        setTimeout(
                            function () {
                                angular.element($element)[0].querySelector('.searchField').focus();
                            }, 0
                        );
                    } else {
                        angular.element($element)[0].querySelector('.option').focus();
                    }
                }
            };
        }
    };
}]);

function contains(collection, target) {
    var containsTarget = false;
    collection.some(function (object) {
        if (object === target) {
            containsTarget = true;
            return true;
        }
    });
    return containsTarget;
}

function find(collection, properties) {
    var target;

    collection.some(function (object) {
        var hasAllSameProperties = true;
        Object.keys(properties).forEach(function (key) {
            if (object[key] !== properties[key]) {
                hasAllSameProperties = false;
            }
        });
        if (hasAllSameProperties) {
            target = object;
            return true
        }
    });

    return target;
}

function findIndex(collection, properties) {
    var index = -1;
    var counter = -1;

    collection.some(function (object) {
        var hasAllSameProperties = true;
        counter += 1;
        Object.keys(properties).forEach(function (key) {
            if (object[key] !== properties[key]) {
                hasAllSameProperties = false;
            }
        });
        if (hasAllSameProperties) {
            index = counter;
            return true
        }
    });

    return index;
}
app.directive('jqdatepickerlicenceenddate', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd M yy',
                onSelect: function (date) {

                    scope.emp.licenceenddate = date;
                    scope.$apply();
                }
            });
        }
    };
});

app.directive('jqdatepickeruserstartdate', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd M yy',
                onSelect: function (date) {

                    scope.emp.startdate = date;
                    scope.$apply();
                }
            });
        }
    };
});
app.directive('jqdatepickeruserenddate', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd M yy',
                onSelect: function (date) {

                    scope.emp.enddate = date;
                    scope.$apply();
                }
            });
        }
    };
});
app.directive('jqdatepickerlicencestartdate', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd M yy',
                onSelect: function (date) {

                    scope.emp.licencestartdate = date;
                    scope.$apply();
                }
            });
        }
    };
});
app.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd M yy',
                onSelect: function (date) {
                    
                    scope.emp.accessenddate = date;
                    scope.$apply();
                }
            });
        }
    };
});

app.directive('jqdatepicker1', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'dd M yy',
                onSelect: function (date) {
                    
                    scope.emp.accessstartdate = date;
                    scope.$apply();
                }
            });
        }
    };
});
    //.directive('passwordCheck', function () {
    //return {
    //    restrict: 'A',
    //    require: 'ngModel',
    //    link: function (scope, elem, attrs, ctrl) {
    //        var firstPassword = '#' + attrs.passwordCheck;
    //        elem.add(firstPassword).on('keyup', function () {
    //            scope.$apply(function () {
    //                var v = elem.val() === $(firstPassword).val();
    //                ctrl.$setValidity('pwmatch', v);
    //            });
    //        });
    //    }
    //}

    //});


//var app = angular.module('webApp', [
//    'ngRoute',
 
//]).run(['$rootScope', function ($rootScope, $routeChangeStart) {
//    $rootScope.$on('$routeChangeStart', function (event, next, current) {
//        // console.log(next);
//        // console.log(next.$$route.templateUrl);
//        //if (next.$$route.templateUrl == "app/views/amz/ProductSearchResultsView.html") {
//        //    angular.element('#minovate').addClass("abc");
//        //}
//        //else {
//        //    angular.element('#minovate').removeClass("abc");
//        //}
//    });
//}]);


//app.config(['$routeProvider','$locationProvider', 
//    function ($routeProvider,$locationProvider) {


       



//        $routeProvider
//            .when('/home', {
//                templateUrl: 'Dashboard1.html',
//                contrller: 'app/controllers/DashboardMainController.js'
//            })
            
//            .otherwise({
//                redirectTo: '/home'
//            });



//    }]);



////app.directive('draggable', function () {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element[0].addEventListener('dragstart', scope.handleDragStart, false);
////            element[0].addEventListener('dragend', scope.handleDragEnd, false);
////        }
////    }
////});

////app.directive('droppable', function () {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element[0].addEventListener('drop', scope.handleDrop, false);
////            element[0].addEventListener('dragover', scope.handleDragOver, false);
////        }
////    }

////});

////app.directive('replyComment', ['$compile', function ($compile) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element.bind('click', function () {
////                $(".ParentActivity").remove();
////                var parentId = $(this).data('parent');
////                var strhtml = '<div class="ParentActivity">\
////                           <textarea class="form-control" ng-model="Reply.Comment"></textarea>\
////                           <button class="btn btn-default   pull-right whiteBtn" type="submit"  hide-comment >Cancel  </button>\
////                           <button save-comment data-parent="' + parentId + '" class="btn btn-primary pull-right saveBtn" type="submit">Reply </button>\
////                       </div>';
////                var e = angular.element(strhtml);
////                e = $compile(e)(scope);
////                $(this).parent().parent().parent().parent().append(e);

////            });
////        }
////    }

////}]);

////app.directive('hideComment', ['$compile', function ($compile) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element.bind('click', function () {
////                $(this).parent().remove();
////            });
////        }
////    }
////}]);


////app.directive('saveComment', ['$compile', function ($compile) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element.bind('click', function () {
////                var parentId = $(this).data('parent');
////                scope.ReplyToComment(parentId);
////                $(this).parent().remove();
////            });
////        }
////    }
////}]);




////app.directive('nxEqual', function () {

////    return {
////        require: 'ngModel',
////        link: function (scope, elem, attrs, model) {
////            if (!attrs.nxEqual) {
////                console.error('nxEqual expects a model as an argument!');
////                return;
////            }

////            model.$parsers.push(function (value) {
////                var isValid = value === scope.$eval(attrs.nxEqual);
////                model.$setValidity('nxEqual', isValid);
////                return isValid ? value : undefined;
////            });
////        }
////    };
////});



////app.directive('focusChart', ['$timeout', function ($timeout) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attr) {
////            console.log(attr.focusChart);

////            $(document.body).keydown(function (e) {
////                if (e.altKey && e.keyCode == 87) {
////                    var gantt = scope.TaskChart;
////                    gantt.list.content.find("table").focus();
////                }
////            });
////        },

////    }
////}]);


////app.directive('resizeEditGrid', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();

////                var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 80;
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 500;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});

////app.directive('resizeGrid', function ($timeout) {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            $timeout(SetGridHeight, 1000);
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (searchRowHeight == null) {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 106;
////                } else {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 60;
////                }
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 600;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});


////app.directive('resizeDiv', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetDivHeight(element);
////            $(window).resize(function () {
////                SetDivHeight(element);
////            });
////            function SetDivHeight(element) {
////                var tabsContentHeight = $('#Div1').height();
////                var tabsHeight = $('#mainTabs').height();
////                var searchRowHeight = element.prev().height();

////                var divHeight = tabsContentHeight - searchRowHeight - tabsHeight - 20;
////                if (divHeight < 50) {
////                    divHeight = 575;
////                }
////                element.height(divHeight);
////                element.find("#firstPane").height(divHeight);
////                element.find("#secondPane").height(divHeight);
////                element.find(".k-splitbar").height(divHeight);

////            };

////        }
////    };
////});


////app.directive('resizePriceList', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetDivHeight(element);
////            $(window).resize(function () {
////                SetDivHeight(element);
////            });
////            function SetDivHeight(element) {
////                var tabsContentHeight = $('#Div1').height();
////                var tabsHeight = $('#mainTabs').height();
////                var searchRowHeight = element.prev().height();

////                var divHeight = tabsContentHeight - searchRowHeight - tabsHeight - 20;
////                if (divHeight < 50) {
////                    divHeight = 575;
////                }
////                element.height(divHeight);
////                element.find("#firstPane").height(divHeight);
////                element.find("#secondPane").height(divHeight);
////                element.find(".k-splitbar").height(divHeight);
////            };

////        }
////    };
////});

////app.directive('resizePriceListGrid', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetDivHeight(element);
////            $(window).resize(function () {
////                SetDivHeight(element);
////            });
////            function SetDivHeight(element) {
////                var tabsContentHeight = $('#Div1').height();
////                var tabsHeight = $('#mainTabs').height();
////                var searchRowHeight = element.prev().height();

////                var divHeight = tabsContentHeight - searchRowHeight - tabsHeight - 20;
////                if (divHeight < 50) {
////                    divHeight = 575;
////                }

////                var grid = element.find(".k-grid-content");
////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                grid.height(divHeight - headerHeight - footerHeight - 80);
////            };

////        }
////    };
////});

////app.directive('resizePurchaseOpportunityGrid', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(element);
////            $(window).resize(function () {
////                SetGridHeight(element);
////            });
////            function SetGridHeight(element) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var parentHeight = tabsContentHeight - searchRowHeight - tabsHeight - 35;

////                var grid = element.find(".k-grid-content");
////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (!headerHeight) {
////                    headerHeight = 0;
////                }
////                if (!footerHeight) {
////                    footerHeight = 0;
////                }
////                var gridheight = parentHeight - headerHeight - footerHeight;
////                if (gridheight) {
////                    grid.height(gridheight);
////                }
////                else {
////                    grid.height(500);
////                }


////            };

////        }
////    };
////});



////app.directive('resizeGridBrand', function ($timeout) {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            $timeout(SetGridHeight, 1000);
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (searchRowHeight == null) {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 754;
////                } else {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 754;
////                }
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 600;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});


////app.directive('resizeSplitterGrid', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(element);
////            $(window).resize(function () {
////                SetGridHeight(element);
////            });
////            function SetGridHeight(element) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var parentHeight = tabsContentHeight - searchRowHeight - tabsHeight - 60;

////                var grid = element.find(".k-grid-content");
////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                grid.height(parentHeight - headerHeight - footerHeight - 50);


////            };

////        }
////    };
////});

////app.directive('resizeInnerGrid', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            var padding = attr.resizeInnerGrid;

////            SetGridHeight(element, padding);
////            $(window).resize(function () {
////                SetGridHeight(element, padding);
////            });
////            function SetGridHeight(element, padding) {
////                var parentHeight = $('#Div1').height();
////                var topBarHeight = element.prev().height();
////                if (topBarHeight == 0) { topBarHeight = 46; }
////                var grid = element.find(".k-grid-content");
////                var headerHeight = element.find(".k-grid-header").height();
////                if (headerHeight == 0) { headerHeight = 30; }
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (footerHeight == 0) { footerHeight = 27.3; }
////                parentHeight = parentHeight - headerHeight - footerHeight - topBarHeight - padding - 110;
////                grid.height(parentHeight);
////            };

////        }
////    };
////});




////app.directive('resizeOpportunityGrid', function () {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(element);
////            $(window).resize(function () {
////                SetGridHeight(element);
////            });
////            function SetGridHeight(element) {
////                var parentHeight = tabsContentHeight = $('#Div1').height();
////                var prevHeight = element.prev().height();
////                var grid = element.find(".k-grid-content");
////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                grid.height(parentHeight - headerHeight - footerHeight - prevHeight - 78);


////            };

////        }
////    };
////});

////app.directive('resizeGridTrade', function ($timeout) {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            $timeout(SetGridHeight, 1000);
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (searchRowHeight == null) {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 91;
////                } else {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 91;
////                }
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 600;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});


////app.directive('resizeGridPlantype', function ($timeout) {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            $timeout(SetGridHeight, 1000);
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (searchRowHeight == null) {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 220;
////                } else {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 220;
////                }
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 600;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});

////app.directive('resizeGridPlan', function ($timeout) {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            $timeout(SetGridHeight, 1000);
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (searchRowHeight == null) {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
////                } else {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
////                }
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 600;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});
////app.directive('resizeGridDashboard', function ($timeout) {
////    return {
////        restrict: 'A',
////        priority: 10,
////        link: function (scope, element, attr) {
////            SetGridHeight(attr.resizeGrid);
////            $(window).resize(function () {
////                SetGridHeight(attr.resizeGrid);
////            });
////            $timeout(SetGridHeight, 1000);
////            function SetGridHeight(padding) {

////                tabsContentHeight = $('#Div1').height();
////                tabsHeight = $('#mainTabs').height();
////                searchRowHeight = element.prev().height();

////                var headerHeight = element.find(".k-grid-header").height();
////                var footerHeight = element.find(".k-grid-pager").height();
////                if (searchRowHeight == null) {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
////                } else {
////                    var gridHeight = tabsContentHeight - searchRowHeight - headerHeight - footerHeight - 115;
////                }
////                if (padding) {
////                    gridHeight = gridHeight - padding;
////                }
////                console.log(padding);
////                var grid = element.find(".k-grid-content");
////                if (gridHeight <= 0) {
////                    gridHeight = 600;
////                }
////                grid.height(gridHeight);
////            };

////        }
////    };
////});


////app.directive('scrollOnClick', function () {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attr) {
////            element.on('click', function () {
////                $(".modal").animate({ scrollTop: element.offset().top + 100 }, "slow");
////            });

////        }
////    };
////});


////app.directive('passwordCheck', function () {
////    return {
////        restrict: 'A',
////        require: 'ngModel',
////        link: function (scope, elem, attrs, ctrl) {
////            var firstPassword = '#' + attrs.passwordCheck;
////            elem.add(firstPassword).on('keyup', function () {
////                scope.$apply(function () {
////                    var v = elem.val() === $(firstPassword).val();
////                    ctrl.$setValidity('pwmatch', v);
////                });
////            });
////        }
////    }

////});

////app.directive('tooltipclickable', function () {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element.tooltip({ trigger: "click" });
////        }
////    };
////});

////app.directive("enterTab", function () {

////    return {
////        restrict: "A",
////        "link": function (scope, element, attrs) {

////            $('input,select').on("focus keypress", function (e) {

////                var inputs = $(this).closest('form').find(':input:visible,select:visible,textarea:visible');
////                var nextInput = inputs.eq(inputs.index(this) + 1);
////                if (e.keyCode === 13) {
////                    nextInput.focus();
////                    if (nextInput.attr('type') !== "submit")
////                        e.preventDefault();
////                }

////                return true;
////            });
////        }
////    };
////});

////app.directive('autofocus', ['$timeout', function ($timeout) {
////    return {
////        restrict: 'A',
////        link: function ($scope, $element) {
////            $timeout(function () {
////                $element[0].focus();
////            });
////        }
////    }
////}]);

////app.directive('resizeFooter', function () {

////    return {
////        link: function (scope, element) {

////            var width = angular.element('.add-lead-box').width();

////            SetFooterWidth(element, width);
////            $(window).resize(function () {
////                SetFooterWidth(element, width);
////            });
////            function SetFooterWidth(element) {
////                $(".LeadFooter").width(width - 34);

////            };

////        }
////    }

////});
////app.directive('resizeFooterDefault', function () {

////    return {
////        link: function (scope, element) {

////            var widthDefault = angular.element('.main-controller-div').width();


////            SetFooterDefaultWidth(element, width);
////            $(window).resize(function () {
////                SetFooterDefaultWidth(element, width);
////            });
////            function SetFooterDefaultWidth(element) {
////                $(".bottom-default-footer").width(widthDefault - 49);
////            };

////        }
////    }

////});

////app.filter('highlight', ['$sce', function ($sce) {

////    return function (text, phrase) {
////        if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
////            '<span class="highlighted">$1</span>')

////        return $sce.trustAsHtml(text)
////    }
////}]);

////app.directive('nextFilter', ['$compile', function ($compile) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element.bind('click', function () {
////                var index;
////                if (attrs.nextFilter == 'activityScrollWrapper') {
////                    index = scope.FindActivityTextIndex;
////                }
////                else if (attrs.nextFilter == 'chatScrollWrapper') {
////                    index = scope.FindCommentTextIndex;
////                }
////                else if (attrs.nextFilter == 'taskScrollWrapper') {
////                    index = scope.FindTaskTextIndex;
////                }
////                var results = $('#' + attrs.nextFilter).find('span.highlighted');
////                for (var i = 0; i < results.length; i++) {
////                    $(results[i]).removeClass('highlightedSelected');
////                }
////                index = index + 1;
////                if (index > results.length - 1) {
////                    index = 0;
////                }
////                $(results[index]).addClass('highlightedSelected');
////                $('#' + attrs.nextFilter).scrollTo($(results[index]), { duration: 500 }, { queue: true });
////                if (attrs.nextFilter == 'activityScrollWrapper') {
////                    scope.FindActivityTextIndex = index;
////                }
////                else if (attrs.nextFilter == 'chatScrollWrapper') {
////                    scope.FindCommentTextIndex = index;
////                }
////                else if (attrs.nextFilter == 'taskScrollWrapper') {
////                    scope.FindTaskTextIndex = index;
////                }
////            });
////        }
////    }
////}]);

////app.directive('previousFilter', ['$compile', function ($compile) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            element.bind('click', function () {
////                var index;
////                if (attrs.nextFilter == 'activityScrollWrapper') {
////                    index = scope.FindActivityTextIndex;
////                }
////                else if (attrs.nextFilter == 'chatScrollWrapper') {
////                    index = scope.FindCommentTextIndex;
////                }
////                else if (attrs.nextFilter == 'taskScrollWrapper') {
////                    index = scope.FindTaskTextIndex;
////                }
////                var results = $('#' + attrs.nextFilter).find('span.highlighted');
////                for (var i = 0; i < results.length; i++) {
////                    $(results[i]).removeClass('highlightedSelected');
////                }
////                index = index - 1;
////                if (index < 0) {
////                    index = results.length - 1;
////                }
////                $(results[index]).addClass('highlightedSelected');
////                $('#' + attrs.nextFilter).scrollTo($(results[index]), { duration: 500 }, { queue: true });
////                if (attrs.nextFilter == 'activityScrollWrapper') {
////                    scope.FindActivityTextIndex = index;
////                }
////                else if (attrs.nextFilter == 'chatScrollWrapper') {
////                    scope.FindCommentTextIndex = index;
////                }
////                else if (attrs.nextFilter == 'taskScrollWrapper') {
////                    scope.FindTaskTextIndex = index;
////                }
////            });
////        }
////    }
////}]);

////app.directive('stopEvent', function () {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attr) {
////            element.bind('click', function (e) {
////                e.stopPropagation();
////            });
////        }
////    };
////});


////app.directive('closeFilter', function () {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attr) {
////            element.bind('click', function (e) {
////                $('.TopAdvancedFilters').hide();
////            });
////        }
////    };
////});





/////**
//// * Percentage Field Directive
//// */
////app.directive('percentageField', ['$filter', function ($filter) {

////    return {

////        restrict: 'A',
////        require: 'ngModel',
////        scope: {
////            // currencyIncludeDecimals: '&',

////        },
////        link: function (scope, element, attr, ngModel) {
////            $(element).blur(function () {
////                var value = $(element).val().replace("%", "").replace("$", "");
////                value = parseFloat(value);
////                if (isNaN(value)) {
////                    value = 0;
////                }
////                if (value > 100) {
////                    value = 100;
////                }
////                else if (value < 0) {
////                    value = 0;
////                }
////                $(element).val(value.toFixed(2) + '%');
////            });
////        }
////    };
////}]);

/////**
//// * Currency  Field Directive
//// */


////app.directive('feeType', function () {
////    return {
////        restrict: 'A',
////        scope: {
////            valuekey: '@'
////        },
////        link: function (scope, element, attr, ngModel) {
////            $(element).change(function () {
////                var textbox = $("#" + scope.valuekey);
////                var value = textbox.val().replace("%", "").replace("$", "");

////                var selectedType = $(element).val();
////                value = parseFloat(value);
////                if (isNaN(value)) {
////                    value = 0;
////                }

////                textbox.removeAttr('disabled')

////                if (selectedType == 'Use Amazon Fee') {
////                    textbox.val('');
////                    textbox.attr('disabled', 'disabled');
////                }
////                else if (selectedType == 'Pound') {
////                    textbox.val('$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
////                }
////                else if (selectedType == 'Percent Retail') {
////                    if (value > 100) {
////                        value = 100;
////                    }
////                    else if (value < 0) {
////                        value = 0;
////                    }
////                    textbox.val(value.toFixed(2) + '%');
////                }
////            });
////        }
////    };
////});

////app.directive('poundPercentage', function () {
////    return {
////        restrict: 'A',
////        scope: {
////            typekey: '@'
////        },
////        link: function (scope, element, attr, ngModel) {
////            $(element).blur(function () {
////                var value = $(element).val().replace("%", "").replace("$", "");
////                value = parseFloat(value);
////                if (isNaN(value)) {
////                    value = 0;
////                }
////                var selectedType = $("#" + scope.typekey).val();
////                if (selectedType == 'Pound') {
////                    $(element).val('$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
////                }
////                else if (selectedType == 'Percent Retail') {
////                    if (value > 100) {
////                        value = 100;
////                    }
////                    else if (value < 0) {
////                        value = 0;
////                    }
////                    $(element).val(value.toFixed(2) + '%');
////                }
////            });

////        }
////    };
////});




////app.directive('currencyField', ['$filter', function ($filter) {

////    return {

////        restrict: 'A',
////        require: 'ngModel',
////        scope: {
////            // currencyIncludeDecimals: '&',

////        },
////        link: function (scope, element, attr, ngModel) {

////            attr['percentageMaxValue'] = attr['percentageMaxValue'];
////            attr['percentageMaxDecimals'] = attr['percentageMaxDecimals'] || 2;

////            $(element).css({ 'text-align': 'left' });

////            // function called when parsing the inputted url
////            // this validation may not be rfc compliant, but is more
////            // designed to catch common url input issues.
////            function into(input) {

////                var valid;

////                if (input == '') {
////                    ngModel.$setValidity('valid', true);
////                    return '';
////                }

////                // if the user enters something that's not even remotely a number, reject it
////                if (!input.match(/^\d+(\.\d+){0,1}%{0,1}$/gi)) {
////                    ngModel.$setValidity('valid', false);
////                    return '';
////                }

////                // strip everything but numbers from the input
////                input = input.replace(/[^0-9\.]/gi, '');

////                input = parseFloat(input);

////                var power = Math.pow(10, attr['percentageMaxDecimals']);

////                input = Math.round(input * power) / power;

////                if (input > attr['percentageMaxValue']) input = attr['percentageMaxValue'];

////                // valid!
////                ngModel.$setValidity('valid', true);

////                return input;
////            }

////            ngModel.$parsers.push(into);

////            function out(input) {
////                if (ngModel.$valid && input !== undefined && input > '') {
////                    return '$' + input;
////                }

////                return '0';
////            }

////            ngModel.$formatters.push(out);

////            $(element).bind('click', function () {
////                //$( element ).val( ngModel.$modelValue );
////                $(element).select();
////            });

////            $(element).bind('blur', function () {
////                $(element).val(out(ngModel.$modelValue));
////            });
////        }
////    };
////}]);
////app.directive('realTimeCurrency', function ($filter, $locale) {

////    var decimalSep = $locale.NUMBER_FORMATS.DECIMAL_SEP;
////    var toNumberRegex = new RegExp('[^0-9\\' + decimalSep + ']', 'g');
////    var trailingZerosRegex = new RegExp('\\' + decimalSep + '0+$');
////    var filterFunc = function (value) {
////        return $filter('currency')(value);
////    };

////    function getCaretPosition(input) {
////        if (!input) return 0;
////        if (input.selectionStart !== undefined) {
////            return input.selectionStart;
////        } else if (document.selection) {
////            // Curse you IE
////            input.focus();
////            var selection = document.selection.createRange();
////            selection.moveStart('character', input.value ? -input.value.length : 0);
////            return selection.text.length;
////        }
////        return 0;
////    }

////    function setCaretPosition(input, pos) {
////        if (!input) return 0;
////        if (input.offsetWidth === 0 || input.offsetHeight === 0) {
////            return; // Input's hidden
////        }
////        if (input.setSelectionRange) {
////            input.focus();
////            input.setSelectionRange(pos, pos);
////        }
////        else if (input.createTextRange) {
////            // Curse you IE
////            var range = input.createTextRange();
////            range.collapse(true);
////            range.moveEnd('character', pos);
////            range.moveStart('character', pos);
////            range.select();
////        }
////    }

////    function toNumber(currencyStr) {
////        return parseFloat(currencyStr.replace(toNumberRegex, ''), 10);
////    }

////    return {
////        restrict: 'A',
////        require: 'ngModel',
////        link: function postLink(scope, elem, attrs, modelCtrl) {
////            modelCtrl.$formatters.push(filterFunc);
////            modelCtrl.$parsers.push(function (newViewValue) {
////                var oldModelValue = modelCtrl.$modelValue;
////                var newModelValue = toNumber(newViewValue);
////                modelCtrl.$viewValue = filterFunc(newModelValue);
////                var pos = getCaretPosition(elem[0]);
////                elem.val(modelCtrl.$viewValue);
////                var newPos = pos + modelCtrl.$viewValue.length -
////                    newViewValue.length;
////                if ((oldModelValue === undefined) || isNaN(oldModelValue)) {
////                    newPos -= 3;
////                }
////                setCaretPosition(elem[0], newPos);
////                return newModelValue;
////            });
////        }
////    };
////});

////app.directive('numbercontract', function ($filter) {
////    return {
////        restrict: 'A',
////        scope: {
////            ngModel: '=',
////            typekey: '@'
////        },
////        link: function (scope, element, attr, ngModel) {

////            $(element).blur(function () {
////                $(element).val();
////                var value = $(element).val();
////                if (value.indexOf(',') != -1) {
////                    var aa = String(value).replace(/[,]/gi, '');
////                    var numberContractAmount = $filter('currency')(aa);
////                    if (numberContractAmount.indexOf('$') != -1) {

////                        numberContractAmount = String(numberContractAmount).replace("$", "");
////                    }
////                }
////                else {
////                    var numberContractAmount = $filter('currency')(value);
////                    if (numberContractAmount.indexOf('$') != -1) {

////                        numberContractAmount = String(numberContractAmount).replace("$", "");
////                    }
////                }
////                scope.ngModel = numberContractAmount;
////            });

////        }
////    };
////});



////app.directive('reportViewer', function () {
////    return {
////        restrict: 'EA',
////        transclude: 'true',
////        scope: {
////            name: '@',
////            parameters: '@',
////            category: '@',
////            baseaddress: '@',
////        },
////        template: "HTML5 Viewer below:",
////        link: function (scope, element, attrs) {

////            //create the viewer object first, can be done in index.html as well
////            var reportViewer = $("#reportViewer1").data("telerik_ReportViewer");
////            if (!reportViewer) {

////                $("#reportViewer1").toggle();

////                $(document).ready(function () {
////                    $("#reportViewer1").telerik_ReportViewer({
////                        error: function (e, args) {
////                            alert('Error from report directive:' + args);
////                        },
////                        templateUrl: 'Html5/ReportViewer/templates/telerikReportViewerTemplate.html',//app/vi ews/amz/Reportstemplate.html',//
////                        reportSource: {
////                            report: scope.category + "/" + scope.name,
////                            parameters: JSON.parse(scope.parameters),

////                        },
////                        serviceUrl: scope.baseaddress + 'ReportsApi/',//'http://ims-api.azurewebsites.net/api/ReportsApi/',            //http://ims-api-proto.azurewebsites.net/
////                        scale: 1.0,
////                        // scaleMode: "FIT_PAGE_WIDTH",
////                        //viewMode: telerikReportViewer.ViewMode.Interactive,
////                        //SizeToReportContent: true,
////                        //Height:"100%" ,
////                        //Width:"100%" ,
////                        ready: function () {

////                        },
////                    })
////                });
////            }
////            //on state change update the report source
////            scope.$watch('name', function () {

////                var reportViewer = $("#reportViewer1").data("telerik_ReportViewer");

////                if (reportViewer) {
////                    var rs = reportViewer.reportSource();
////                    if (rs && rs.report)
////                        if (rs.report != scope.name &&
////                            rs.parameters != scope.parameters) {

////                            reportViewer.reportSource({
////                                report: scope.category + "/" + scope.name,
////                                parameters: JSON.parse(scope.parameters),
////                                category: scope.category,
////                            });
////                        }
////                }
////            });
////        }
////    }

////});



////app.directive('fileModel', ['$parse', function ($parse) {
////    return {
////        restrict: 'A',
////        link: function (scope, element, attrs) {
////            var model = $parse(attrs.fileModel);
////            var modelSetter = model.assign;

////            element.bind('change', function () {
////                scope.$apply(function () {
////                    modelSetter(scope, element[0].files[0]);
////                });
////            });
////        }
////    };
////}]);


////app.directive('checkFileSize', function () {
////    return {
////        link: function (scope, elem, attr, ctrl) {


////            scope.validateFilesize = true;
////            function bindEvent(element, type, scope, handler) {
////                if (element.addEventListener) {
////                    element.addEventListener(type, handler, false);
////                } else {
////                    element.attachEvent('on' + type, handler);
////                }
////            }

////            bindEvent(elem[0], 'change', scope, function () {


////                scope.$apply(function () {
////                    scope.validateFilesize = true;
////                });
////                if (this.files[0].size > 6679860) {
////                    scope.$apply(function () {
////                        scope.validateFilesize = false;
////                    });

////                }
////                // alert('File size:' + this.files[0].size);
////            });

////        }
////    }
////});

////app.directive('ngRightClick', function ($parse) {
////    return function (scope, element, attrs) {
////        var fn = $parse(attrs.ngRightClick);
////        element.bind('contextmenu', function (event) {
////            scope.$apply(function () {
////                event.preventDefault();
////                fn(scope, { $event: event });
////            });
////        });
////    };
////});