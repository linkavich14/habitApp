export class SubTask {
    private _id: number;
    private _nameTask: string;
    private _dateFrom: string;
    private _dateTo: string;
    private _status: number; // 1 active, 0 completed
    private _type: number;  // subtask type (task, appointment, objective)
    private _moneyDetails: boolean;
    private _exerciseDetails: boolean;
    private _learningDetails: boolean;
    private _badHabitDetails: boolean;
    private _repeatTask: boolean;
    private _moneyGoal: number;
    private _moneyGoalOther: string;
    private _fieldMoneyGoal: string;


    /*
    constructor(
        public id: number,
        public taskName:string,
        public fromDate: Date,
        public toTadet: Date,
        public statusTask: number,
        public typeTask: number){
            this._id = id;
            this._nameTask = taskName;
        }
    */
    constructor() {}

    public getNameTask(): string {
        return this._nameTask;
    }
    public setNameTask(value: string) {
        this._nameTask = value;
    }
    public getDateFrom(): string {
        return this._dateFrom;
    }
    public setDateFrom(value: string) {
        this._dateFrom = value;
    }
    public getDateTo(): string {
        return this._dateTo;
    }
    public setDateTo(value: string) {
        this._dateTo = value;
    }
    public getStatus(): number {
        return this._status;
    }
    public setStatus(value: number) {
        this._status = value;
    }
    public getType(): number {
        return this._type;
    }
    public setType(value: number) {
        this._type = value;
    }

    public getId() {
        return this._id;
    }

    public setMoneyDetails(value: boolean) {
        this._moneyDetails = value;
    }

    public getMoneyDetails() {
        return this._moneyDetails;
    }

    public setExerciseDetails(value: boolean) {
        this._exerciseDetails = value;
    }

    public getExerciseDetails() {
        return this._exerciseDetails;
    }

    public setLearningDetails(value: boolean) {
        this._learningDetails = value;
    }

    public getLearningDetails() {
        return this._learningDetails;
    }

    public setBadHabitDetails(value: boolean) {
        this._badHabitDetails = value;
    }

    public getBadHabitDetails() {
        return this._badHabitDetails;
    }

    public setRepeatTask(value: boolean) {
        this._repeatTask = value;
    }

    public getRepeatTask() {
        return this._repeatTask;
    }

    public setMoneyGoal(value: number) {
        this._moneyGoal = value;
    }

    public getMoneyGoal() {
        return this._moneyGoal;
    }

    public setFieldMoneyGoal(value: string) {
        this._fieldMoneyGoal = value;
    }

    public getFieldMoneyGoal() {
        return this._fieldMoneyGoal;
    }

    public setMoneyGoalOther(value: string) {
        this._moneyGoalOther = value
    }

    public getMoneyGoalOther() {
        return this._moneyGoalOther;
    }
}