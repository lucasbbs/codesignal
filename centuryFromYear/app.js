function centuryFromYear(year) {
    this.year = year
    return Math.floor((year-1)/100)+1;
}
