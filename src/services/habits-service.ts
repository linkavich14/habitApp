import { Habit } from "../models/habit";

export class HabitsService {

    private habits: Habit[] = [];
    
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