/// <reference path="../references.ts" />
import {HomeCtrl} from '../../src/module/home/HomeCtrl';

describe('Home controller', () => {
    describe('during initialization', () => {
        it('should not be undefined', () => {
            HomeCtrl.should.not.be.undefined;
        });
    });
});