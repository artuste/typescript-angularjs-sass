'use strict';
module.exports = function() {
    return function() {
        var runSequence = require('run-sequence');
        return runSequence('compile', function() {
            console.log('Success!');
        });
    };
};