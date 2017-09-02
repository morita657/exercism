var Year = (function () {
    function Year(year) {
        this.year = year;
    }
    Year.prototype.isLeap = function () {
        return ((this.year % 4 === 0) && (this.year % 100 !== 0)) || (this.year % 400 === 0);
    };
    return Year;
}());
module.exports = Year;
//# sourceMappingURL=leap.js.map