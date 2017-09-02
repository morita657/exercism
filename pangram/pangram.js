module.exports = (function () {
    function Pangram(input) {
        this.isPangram = function () {
            input = input.toLowerCase().replace(/\s+/g, "");
            console.log(input);
            var test = 'thequickbrownfoxjumpsoverthelazydog';
            for (var i = 0; i < test.length; i++) {
                console.log(input.includes(test[i]), i, input[i]);
                if (!input.includes(test[i])) {
                    return false;
                }
            }
            return true;
        };
    }
    return Pangram;
}());
//# sourceMappingURL=pangram.js.map