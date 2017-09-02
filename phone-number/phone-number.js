module.exports = class PhoneNumber{
    constructor(num) {
        this.num = num;
    }

    number(){

    var ch = this.num.replace(/ /g, '').replace(/-/g, "").replace(/[()]/g, '').replace(/\./g, '');

    if (ch[0] === '1') {
    console.log("hi");
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

areaCode(){
    return this.num.slice(0, 3);
}


toString(){
    var str = this.num.match(/(...)(...)(.+)/);
    return '(' + str[1] + ') ' + str[2] + '-' + str[3];
}
}