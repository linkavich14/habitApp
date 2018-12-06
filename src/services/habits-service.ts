import { Habit } from "../models/habit";
import { SubTask } from "../models/subtask";

export class HabitsService {

    private habits: Habit[] = [
        new Habit("my Habit", "Hacer cosas", 1, 
            new Date(), new Date(), "location", 1, [
                new SubTask("my subtask", new Date(), new Date(), 1, 1)
            ])
    ];
    
    addHabit(habit: Habit) {
        this.habits.push(habit);
    }

    getHabits() {
        return this.habits.slice();
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
    
}