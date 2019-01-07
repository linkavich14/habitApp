import { Habit } from "./habit-bean";

export class User {
    private _uid: string;
    private _fullName: string;
    private _email: string;
    private _userName: string;
    private _currentHabits: Habit[];
    private _previousHabits: Habit[];

    public getUid(): string {
        return this._uid;
    }

    public setUid(value: string) {
        this._uid = value;
    }

    public getName(): string {
        return this._fullName;
    }
    public setName(value: string) {
        this._fullName = value;
    }

    public getUserName(): string {
        return this._userName;
    }

    public setUserName(value: string) {
        this._userName = value;
    }

    public getEmail(): string {
        return this._email;
    }
    public setEmail(value: string) {
        this._email = value;
    }
    public getCurrentHabits(): Habit[] {
        return this._currentHabits;
    }
    public setCurrentHabits(value: Habit[]) {
        this._currentHabits = value;
    }
    public getPreviousHabits(): Habit[] {
        return this._previousHabits;
    }
    public setPreviousHabits(value: Habit[]) {
        this._previousHabits = value;
    }
}