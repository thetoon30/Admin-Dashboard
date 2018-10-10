import { Injectable } from '@angular/core';

import { DateCalculator } from './date-calculator'
import { DateTimeFormatter } from './date-time-formatter'

@Injectable()
export class DateTimeDisplay {

    constructor(private dateCalculator: DateCalculator, private dateTimeFormatter: DateTimeFormatter) {

    }

    displayFormat(date: Date, currentDate: Date): string {
        let postDate = new Date(date);
        let diff = this.dateCalculator.differenceDay(currentDate, postDate);
        let dayName = "";

        if (postDate.getFullYear() < currentDate.getFullYear()) {
            //d MM YYYY at
            dayName = postDate.getDate() + " " + this.dateTimeFormatter.monthOfYear(postDate) + " " + postDate.getFullYear() + " "
                + postDate.getDate() + " at";
        } else {
            //dd M d YYYY at
            dayName = postDate.toDateString() + " at";
        }

        if (diff >= 2 && diff <= 7) {
            //ddd at
            dayName = this.dateTimeFormatter.dayOfWeek(postDate) + " at";
        } else {
            //MM d at
            dayName = this.dateTimeFormatter.monthOfYear(postDate) + " " + postDate.getDate() + " at";
        }

        if (diff == 1) {
            //Yesterday at
            dayName = "Yesterday at"
        }

        if (diff == 0) {
            dayName = "Today at"
        }

        let postTime = this.dateTimeFormatter.formatAMPM(postDate);

        return dayName + " " + postTime;
    }
}