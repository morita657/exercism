class Year {
    constructor(year) {
        this.year = year;
    }
    public isLeap() {
        return ((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 === 0);
    }
}

module.exports = Year;