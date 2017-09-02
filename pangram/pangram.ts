module.exports = class Pangram {

    constructor(input) {
    }

    isPangram = ()=> {
        input = input.toLowerCase().replace(/\s+/g, "");
        console.log(input);
        let test = 'thequickbrownfoxjumpsoverthelazydog';
        for (var i = 0; i < test.length; i++) {
            console.log(input.includes(test[i]), i, input[i]);
            if (!input.includes(test[i])) {
                return false;
            }
        }
        return true;
    }
}