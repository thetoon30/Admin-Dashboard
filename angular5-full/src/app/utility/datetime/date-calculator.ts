export class DateCalculator {

    /**
     * Returns number of the different day between date1 and date2 regardless their time
     * Negative means date1 < date2
     * Zero means date1 = date2
     * Positive means date1 > date2
     *
     * @param date1
     * @param date2
     */
    public differenceDay(date1: Date, date2: Date): number {
        let date1Pass = this.numberOfDayPassed(date1.getFullYear(), date1.getMonth(), date1.getDate());
        let date2Pass = this.numberOfDayPassed(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return date1Pass - date2Pass;
    }

    private numberOfDayPassed(y: number, m: number, d: number): number {
        m = (m + 9) % 12;
        y = y - Math.ceil(m / 10);
        return 365 * y + Math.ceil(y / 4) - Math.ceil(y / 100) + Math.ceil(y / 400) + Math.ceil((m * 306 + 5) / 10) + (d - 1);
    }
}