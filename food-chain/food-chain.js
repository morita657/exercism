module.exports = (function () {
    function FoodChain() {
    }
    FoodChain.prototype.verses = function (num1, num2) {
        var r = this.verse(num1) + '\n';
        for (var i = 1; i < num2; i++) {
            r += this.verse(i + 1) + '\n';
        }
        return r;
    };
    FoodChain.prototype.verse = function (num) {
        var animal = this.intro();
        switch (num) {
            case 1:
                animal += 'fly.\n';
                break;
            case 2:
                animal += 'spider.\nIt wriggled and jiggled and tickled inside her.\n';
                break;
            case 3:
                animal += 'bird.\n' + 'How absurd to swallow a bird!\n';
                break;
            case 4:
                animal += 'cat.\n' + 'Imagine that, to swallow a cat!\n';
                break;
            case 5:
                animal += 'dog.\n' + 'What a hog, to swallow a dog!\n';
                break;
            case 6:
                animal += 'goat.\n' + 'Just opened her throat and swallowed a goat!\n';
                break;
            case 7:
                animal += 'cow.\n' + 'I don\'t know how she swallowed a cow!\n';
                break;
            case 8:
                animal += 'horse.\n' + 'She\'s dead, of course!\n';
                break;
        }
        if (num === 1) {
            return animal + this.outro();
        }
        if (num < 8) {
            return animal + this.repeats(num) + this.outro();
        }
        if (num === 8) {
            return animal;
        }
    };
    FoodChain.prototype.intro = function () {
        return 'I know an old lady who swallowed a ';
    };
    FoodChain.prototype.outro = function () {
        return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    };
    FoodChain.prototype.repeats = function (num) {
        var t = '';
        for (var i = 0; i < num; i++) {
            t += this.repeat(num - i);
        }
        return t;
    };
    FoodChain.prototype.repeat = function (num) {
        var phrase = '';
        switch (num) {
            case 2:
                phrase = 'She swallowed the spider to catch the fly.\n';
                break;
            case 3:
                phrase = 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n';
                break;
            case 4:
                phrase = 'She swallowed the cat to catch the bird.\n';
                break;
            case 5:
                phrase = 'She swallowed the dog to catch the cat.\n';
                break;
            case 6:
                phrase = 'She swallowed the goat to catch the dog.\n';
                break;
            case 7:
                phrase = 'She swallowed the cow to catch the goat.\n';
                break;
        }
        return phrase;
    };
    return FoodChain;
}());
//# sourceMappingURL=food-chain.js.map