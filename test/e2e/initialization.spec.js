/// <reference path="../references.ts" />
describe('BookShelf', function () {
    beforeEach(function () {
        startLocalhost();
    });
    describe('Login page', function () {
        it('ui-view is available', function () {
            var uiView = by.css('body ui-view');
            var isNavigationPresent = browser.isElementPresent(uiView);
            isNavigationPresent.then(function (present) {
                expect(present).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=initialization.spec.js.map