import { Injectable } from "@angular/core";
import { Habit } from "../models/habit-bean";

@Injectable()
export class ApplicationService {
    public userId:any;
    public userData: any;
    public activeUser: any;
    public habits: Habit[];
    public currenthabit: Habit = new Habit();
}