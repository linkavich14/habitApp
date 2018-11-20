import { Habit } from "./habit";

export class User {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _email: string;
    private _password: string;
    private _currentHabits: Habit[];
    private _previousHabits: Habit[];

    public getName(): string {
        return this._name;
    }
    public setName(value: string) {
        this._name = value;
    }

    public getAge(): number {
        return this._age;
    }
    public setAge(value: number) {
        this._age = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
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