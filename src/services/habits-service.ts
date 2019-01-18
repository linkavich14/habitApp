import { Habit } from "../models/habit-bean";
import { SubTask } from "../models/subtask";
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; 
import firebase from "firebase";
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { AuthService } from "./auth";

@Injectable()
export class HabitsService {

    private habits: Habit[] = [];
    /*
    private habits: Habit[] = [
        new Habit(1, "Mi applicacion", "Hacer cosas", 1, 
            new Date(), new Date(), "location", 1, [
                new SubTask(1 , "my subtask", new Date(), new Date(), 1, 1),
                new SubTask(2 , "subtask 2", new Date(), new Date(), 1, 1),
                new SubTask(3 , "subtask 3", new Date(), new Date(), 1, 1)
            ], true, true , false , "1 Dec 2018", "10 Dec 2018", "9:00:00")
    ];
    */
    //private habitListRef = this.db.list<Habit>('/habit-list');

    constructor(public db: AngularFireDatabase,
                public http: HttpClient, 
                public authService: AuthService) {}
    
    addHabit(token: string, habit: Habit) {
        return this.http.put('https://habitgoalapp.firebaseio.com/' + this.authService.getActiveUser().uid + '/habits.json?auth=' + token , habit);
        //return this.habitListRef.push(habit);
    }

    getHabits() {
        /*
        return this.http.get('https://habitgoalapp.firebaseio.com/' + this.authService.getActiveUser().uid + '/user.json?auth=' + token)
        .pipe(
            map(data => {
                return JSON.stringify(data);
                })
        ); 
        */
        return this.habits.slice();
    }

    getHabitsByDate(){
        
    }

    updateHabit(id: number, habit: Habit) {
        this.habits[id] = habit;
    }

    deleteHabit(id: number) {
        this.habits.splice(id, 1);
    }

    getHabit(id: number) {
        return this.habits[id];
    }

    completedHabit(id: number, status: number) {
        this.getHabit(id).setStatus(status);
    }

    completeTask(subtask: SubTask){
        
    }

}