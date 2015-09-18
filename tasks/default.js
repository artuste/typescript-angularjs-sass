'use strict';
module.exports = function() {
    return function() {
        var runSequence = require('run-sequence');
        return runSequence('check:jshint', 'compile', 'css', 'test:unit', function() {
            console.log('Done!');
        });
    };
};