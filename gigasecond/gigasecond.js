function Gigasecond(current) {
    this.current = current;
}

Gigasecond.prototype.date = function () {
    return new Date(this.current.getTime() + 1000000000000);
}


module.exports = Gigasecond;