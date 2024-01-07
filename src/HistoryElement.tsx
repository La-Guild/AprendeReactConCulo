export class HistoryElement {
    start: Date;
    end: Date;
    wtfs: number;

    constructor(start: Date, end: Date, wtfs: number) {
        this.start = start;
        this.end = end;
        this.wtfs = wtfs;
    }

    toString() {
        return "WTFs were " + this.wtfs + " from " + this.start.toUTCString() + " to " + this.end.toUTCString()
    }
}