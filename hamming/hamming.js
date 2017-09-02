var Hamming = (function () {
    function Hamming() {
    }
    Hamming.prototype.compute = function (elem1, elem2) {
        if (elem1.length !== elem2.length)
            throw new Error('DNA strands must be of equal length.');
        var difference = 0;
        for (var i = 0; i < elem1.length; i++)
            if (elem1[i] !== elem2[i])
                difference++;
        return difference;
    };
    ;
    return Hamming;
}());
module.exports = Hamming;
//# sourceMappingURL=hamming.js.map