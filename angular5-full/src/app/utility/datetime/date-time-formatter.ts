export class DateTimeFormatter {
    monthOfYear(date: Date): string {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        return monthNames[date.getMonth()];
    }

    dayOfWeek(date: Date): string {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return dayNames[date.getDay()];
    }

    formatAMPM(date: Date): string {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let minutes2 = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes2 + ' ' + ampm;
        return strTime;
    }
}