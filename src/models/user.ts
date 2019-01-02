import { Habit } from "./habit-bean";

export class User {
    private _fullName: string;
    private _email: string;
    private _userName: string;
    private _currentHabits: Habit[];
    private _previousHabits: Habit[];

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

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get currentHabits(): Habit[] {
        return this._currentHabits;
    }
    public set currentHabits(value: Habit[]) {
        this._currentHabits = value;
    }
    public get previousHabits(): Habit[] {
        return this._previousHabits;
    }
    public set previousHabits(value: Habit[]) {
        this._previousHabits = value;
    }
}