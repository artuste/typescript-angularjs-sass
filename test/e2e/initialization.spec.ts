/// <reference path="../references.ts" />

describe('BookShelf', () => {
  beforeEach(() => {
    startLocalhost();
  });

    describe('Login page', () => {
          it('ui-view is available', () => {
            const uiView:any = by.css('body ui-view');
            const isNavigationPresent:any = browser.isElementPresent(uiView);

            isNavigationPresent.then((present:any) => {
              expect(present).toBe(true);
            });
          });
    });
});
