'use strict';

angular.module('meanStart.directives', []).
    directive('appVersion', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    });
