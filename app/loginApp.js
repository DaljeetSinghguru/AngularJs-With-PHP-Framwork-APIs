var app = angular.module('loginApp', [
    'ngRoute',
    

]);

//app.config(['$httpProvider', function ($httpProvider) {
//    debugger
//    $httpProvider.interceptors.push('httpInterceptor');

//}]);

app.config(['$routeProvider',  function ($routeProvider) {
    
   // $httpProvider.interceptors.push('httpInterceptor');

    $routeProvider
        .when('/login', {
            templateUrl: 'app/views/login.html',
            contrller: 'loginController'
        })

       
        .when('/forgotpassword', {
            templateUrl: 'app/views/forgotpassword.html',
        })
        //.when('/resetpassword/:code', {
        //    templateUrl: 'app/views/ResetPassword.html',
        //})
        .when('/resetpassword/', {
            url: '?Code&Email',
            templateUrl: 'app/views/ResetPassword.html',
        })
        .when('/changepassword/', {
            templateUrl: 'app/views/changepassword.html',
            contrller: 'ChangePasswordController',
        })
        .otherwise({
            redirectTo: '/login'
        });



}]);
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
    