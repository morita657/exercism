module.exports = class Isogram {
    constructor(input) {
        this.input = input;
    }

    isIsogram() {
        console.log(this.input);
        var sagase = this.input.toLowerCase().indexOf("s");
        if(sagase >= 0){
            return true;
        }
        return false;
    }
}


//module.exports = Isogram;