function Words() {
}
Words.prototype.count = function (input) {
    var obj = {};
    var str = input.replace(/ +/g, " ");
    var counter = str.toLowerCase().split(/\s/g);
    for (var i = 0; i < counter.length; i++) {
        console.log(typeof counter);
        var word = counter[i];
        if (obj[word] === undefined) {
            obj[word] = 1;
        } else {
            obj[word]++;
        }
    }
    return obj;
}

module.exports = Words;