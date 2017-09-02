function PhoneNumber(num) {
    this.num = num;
}

PhoneNumber.prototype.number = function () {
    let ch = this.num.replace(/ /g, '').replace(/-/g, "").replace(/[()]/g, '').replace(/\./g, '');

    if (ch[0] === '1') {
        if (ch[1] === '1') {
            return ch.slice(1);
        }
        if (ch.length === 9){
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
}
PhoneNumber.prototype.areaCode = function(){
    return this.num.slice(0, 3);
}


PhoneNumber.prototype.toString = function(){
    let str = this.num.match(/(...)(...)(.+)/);
    return '(' + str[1] + ') ' + str[2] + '-' + str[3];
}

module.exports = PhoneNumber;
