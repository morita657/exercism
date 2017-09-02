var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.hello = function (input) {
        if (input === '') {
            return "Hello, World!";
        }
        else {
            return "Hello, " + input + "!";
        }
    };
    return HelloWorld;
}());
module.exports = HelloWorld;
//# sourceMappingURL=hello-world.js.map