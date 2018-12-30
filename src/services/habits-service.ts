import { Habit } from "../models/habit-bean";
import { SubTask } from "../models/subtask";

export class HabitsService {

    private habits: Habit[] = [
        new Habit(1, "Mi applicacion", "Hacer cosas", 1, 
            new Date(), new Date(), "location", 1, [
                new SubTask(1 , "my subtask", new Date(), new Date(), 1, 1),
                new SubTask(2 , "subtask 2", new Date(), new Date(), 1, 1),
                new SubTask(3 , "subtask 3", new Date(), new Date(), 1, 1)
            ], true, true , false , "1 Dec 2018", "10 Dec 2018", "9:00:00")
    ];
    
    addHabit(habit: Habit) {
        this.habits.push(habit);
    }

    getHabits() {
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