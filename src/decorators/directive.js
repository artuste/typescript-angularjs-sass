define(["require", "exports"], function (require, exports) {
    function directive() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i - 0] = arguments[_i];
        }
        return function (target) {
            var directive = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return (function (classConstructor, args, ctor) {
                    ctor.prototype = classConstructor.prototype;
                    var child = new ctor;
                    var result = classConstructor.apply(child, args);
                    return typeof result === 'object' ? result : child;
                })(target, args, function () { return null; });
            };
            directive.$inject = values;
            return directive;
        };
    }
    exports.directive = directive;
});
//# sourceMappingURL=directive.js.map