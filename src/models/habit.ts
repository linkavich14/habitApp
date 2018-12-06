import { SubTask } from "./subtask";

export class Habit {

    private _habitName: string;
    private _description: string;
    private _typeHabit: number;
    private _dateFrom: Date;
    private _dateTo: Date;
    private _location: string;
    private _status: number; // 1 active, 0 completed
    private _subTasks: SubTask[];
    
    constructor(
        public habitName: string, 
        public description: string, 
        public typeHabit: number,
        public dateFrom: Date,
        public dateTo: Date,
        public location: string,
        public status: number,
        public subtasks: SubTask[]){
        
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

    public get subTasks(): SubTask[] {
        return this._subTasks;
    }
    public set subTasks(value: SubTask[]) {
        this._subTasks = value;
    }

}   