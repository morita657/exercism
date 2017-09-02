module.exports = (function () {
    function PhoneNumber(num) {
        this.num = num;
    }
    PhoneNumber.prototype.number = function () {
        var ch = this.num.replace(/ /g, '').replace(/-/g, "").replace(/[()]/g, '').replace(/\./g, '');
        if (ch[0] === '1') {
            if (ch[1] === '1') {
                return ch.slice(1);
            }
            if (ch.length === 9) {
                ch = '0000000000';
            }
            else {
                return ch;
            }
        }
        if (ch[0] !== '1' || ch.length === 11) {
            ch = '0000000000';
        }
        return ch;
    };
    PhoneNumber.prototype.areaCode = function () {
        return this.num.slice(0, 3);
    };
    PhoneNumber.prototype.toString = function () {
        var str = this.num.match(/(...)(...)(.+)/);
        return '(' + str[1] + ') ' + str[2] + '-' + str[3];
    };
    return PhoneNumber;
}());
//# sourceMappingURL=phone-number1.js.map