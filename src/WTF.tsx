export class WTF {
    wtf: number;

    constructor() {
        this.wtf = 0;
    }

    get() {
        return this.wtf;
    }

    increment() {
        this.wtf = this.wtf + 1;
    }
}