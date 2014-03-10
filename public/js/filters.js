'use strict';

angular.module('meanStart.filters', []).
    filter('interpolate', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    });
