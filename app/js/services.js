'use strict';

/* Services */

// Demonstrate how to register services
    // In this case it is a simple value service.
var services = angular.module('myApp.services', []).
  value('version', '0.1');

services.factory('OpenId',
    function($http){
        var factory = {"authed": false}
        factory.login = function() {
            $http.post("/openid?identifier=https://www.google.com/accounts/o8/id").success(
            function (data, status, headers, config) {
                console.log("Login flow started");
            }).error(function(data, status, headers, config) {
                console.log("error:" + data + ", status: " + status + ", headers:" + headers + ", config: " + config[0])
            });
        }
        return factory;
    }
);