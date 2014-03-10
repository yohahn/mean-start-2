'use strict';

angular.module('meanStart', [
    'ngRoute',
    'meanStart.controllers',
    'meanStart.filters',
    'meanStart.services',
    'meanStart.directives'
]).
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index',
                controller: 'IndexCtrl'
            }).
            when('/addPost', {
                templateUrl: 'partials/addPost',
                controller: 'AddPostCtrl'
            }).
            when('/readPost/:id', {
                templateUrl: 'partials/readPost',
                controller: 'ReadPostCtrl'
            }).
            when('/editPost/:id', {
                templateUrl: 'partials/editPost',
                controller: 'EditPostCtrl'
            }).
            when('/deletePost/:id', {
                templateUrl: 'partials/deletePost',
                controller: 'DeletePostCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }
]);
