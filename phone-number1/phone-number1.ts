module.exports = class PhoneNumber {
    constructor(num):number {
        this.num = num;
    }

    public number():any {
        let ch:any = this.num.replace(/ /g, '').replace(/-/g, "").replace(/[()]/g, '').replace(/\./g, '');

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
    }

    public areaCode():number {
        return this.num.slice(0, 3);
    }

    public toString():any {
        let str:any = this.num.match(/(...)(...)(.+)/);
        return '(' + str[1] + ') ' + str[2] + '-' + str[3];
    }
}
