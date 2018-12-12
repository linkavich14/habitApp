import { SubTask } from "./subtask";

export class Habit {

    public _habitUID: number;
    public _habitName: string;
    private _description: string;
    private _typeHabit: number;
    private _dateFrom: Date;
    private _dateTo: Date;
    private _location: string;
    private _status: number; // 1 active, 0 completed
    private _subTasks: SubTask[];
    private _moreDetails: boolean;
    private _locationAdded: boolean;
    private _repeatHabit: boolean;
    private _startDate: string;
    private _endDate: string;
    private _startTime: string;
    
    constructor(
        public habitUID: number,
        public habitName: string, 
        public description: string, 
        public typeHabit: number,
        public dateFrom: Date,
        public dateTo: Date,
        public location: string,
        public status: number,
        public subtasks: SubTask[],
        public moreDetails: boolean,
        public locationAdded: boolean,
        public repeatHabit: boolean,
        public startDate: string,
        public endDate: string,
        public startTime: string){
            this._habitUID = habitUID;
            this._habitName = habitName;
            this._description = description;
            this._typeHabit = typeHabit;
            this._dateFrom = dateFrom;
            this._dateTo = dateTo;
            this._location = location;
            this._status = status;
            this._subTasks = subtasks;
            this._moreDetails = moreDetails;
            this._repeatHabit = repeatHabit;
            this._startDate = startDate;
            this._endDate = endDate;
            this._startTime = startTime;
    }

    public getHabitUID() {
        return this._habitUID;
    }

    public getHabitName(){
        return this._habitName;
    }

    public setHabitName(habitName: string){
        this._habitName = habitName;
    }

    public getDescription(): string {
        return this._description;
    }
    public setDescription(value: string) {
        this._description = value;
    }

    public getTypeHabit(): number {
        return this._typeHabit;
    }
    public setTypeHabit(value: number) {
        this._typeHabit = value;
    }

    public getDateFrom(): Date {
        return this._dateFrom;
    }
    public setDateFrom(value: Date) {
        this._dateFrom = value;
    }

    public getDateTo(): Date {
        return this._dateTo;
    }
    public setDateTo(value: Date) {
        this._dateTo = value;
    }

    public getLocation(): string {
        return this._location;
    }
    public setLocation(value: string) {
        this._location = value;
    }

    public getStatus(): number {
        return this._status;
    }
    public setStatus(value: number) {
        this._status = value;
    }

    public getSubTasks(): SubTask[] {
        return this._subTasks;
    }
    public setSubTasks(value: SubTask[]) {
        this._subTasks = value;
    }

    public getMoreDetails () {
        return this._moreDetails;
    }

    public getLocationAdded () {
        return this._locationAdded;
    }

    public getRepeatHabit () {
        return this._repeatHabit;
    }

    public getStartDate () {
        return this._startDate;
    }

    public getEndDate () {
        return this._endDate;
    }

    public getStartTime () {
        return this._startTime;
    }
}   