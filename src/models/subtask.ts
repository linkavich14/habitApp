export class SubTask {
    private _nameTask: string;
    private _dateFrom: Date;
    private _dateTo: Date;
    private _status: number; // 1 active, 0 completed
    private _type: number;

    constructor(
        public taskName:string,
        public fromDate: Date,
        public toTadet: Date,
        public statusTask: number,
        public typeTask: number){
            this._nameTask = taskName;
        }

    public getNameTask(): string {
        return this._nameTask;
    }
    public set nameTask(value: string) {
        this._nameTask = value;
    }
    public get dateFrom(): Date {
        return this._dateFrom;
    }
    public set dateFrom(value: Date) {
        this._dateFrom = value;
    }
    public get dateTo(): Date {
        return this._dateTo;
    }
    public set dateTo(value: Date) {
        this._dateTo = value;
    }
    public get status(): number {
        return this._status;
    }
    public set status(value: number) {
        this._status = value;
    }
    public get type(): number {
        return this._type;
    }
    public set type(value: number) {
        this._type = value;
    }
}