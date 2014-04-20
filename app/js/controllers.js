'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])

controllers.controller("OpenIdCtrl", function($scope, OpenId) {
    $scope.authed = OpenId.authed;
    $scope.login = function() {
        OpenId.login();
    };
});
