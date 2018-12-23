import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubTask } from '../../models/subtask';

@IonicPage()
@Component({
  selector: 'page-subtask',
  templateUrl: 'subtask.html',
})
export class SubtaskPage {
  //Toggles display
  displayToggleExercise: boolean = false;
  displayToggleLearning: boolean = false;
  displayToggleLocation: boolean = false;
  displayToggleMoney: boolean = false;
  displayToggleBadHabit: boolean = false;
  displayDates: boolean = false;

  //Toggles display options
  displayToggleMoneyOptions: boolean = true;
  displayToggleLocationOptions: boolean = true;
  displayToggleExerciseOption: boolean = true;
  displayToggleLearningOptions: boolean = true;
  displayToggleBadHabitOptions: boolean = true;

  //Toggles display inputs
  displayKmInput: boolean = false;
  displayMoneyGoalPercentage: boolean = false;
  displayEducationGoalField: boolean = false;
  displayBadHabitField: boolean = false;

  //Toggles display buttons
  displayBudgetFields: boolean = true;//don't show for now

  //Buttons labels
  moneyBudgetButton = "Create my budget";

  subTask: SubTask;
  subTaskForm: FormGroup;
  subTaskName: string;
  mode = "New";
  startDate: String = new Date().toISOString();
  endDate: String = new Date().toISOString();
  startTime: String = new Date().toISOString();
  travelTime: String = new Date().toISOString();

  //Combobox options
  subtaskTypeOptions = ['Appointment', 'Objective', 'Reminder', 'Habit'];
  moneyGoalsOptions = ['Save % every week', 'Reduce my debt', 'Donate money', 'Stop wasting money', 'Other'];
  healthGoalsOptions = ['Workout at Gym', 'Run', 'Other'];
  educationGoalsOptions = ['Finish an Assignment', 'Complete a course', 'Improve my grades', 'Do not fail any course', 'Other'];
  badHabitRemoveOptions = ['Stop smoking', 'Reduce drinking alcohol', 'Other'];

  //Fields related to combobox selected
  educationFieldLabel: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ngOnInit(){  
    this.mode = this.navParams.get("mode");
    if(this.mode == "Edit"){
      this.subTask = this.navParams.get("subtask");
    }
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubtaskPage');
  }

  loadBudgetScreen(page:any){
    this.navCtrl.push(page);
  }

  onToggleMoney(toggle: Toggle){
    this.displayToggleMoneyOptions = !toggle.checked;
    this.displayToggleExercise = toggle.checked;
    this.displayToggleBadHabit = toggle.checked;
  }

  onToggleLocation(toggle: Toggle) {
    this.displayToggleLocationOptions = !toggle.checked;
  }

  onToggleLearning(toggle: Toggle) {
    this.displayToggleLearningOptions = !toggle.checked;
  }

  onToggleExercise(toggle: Toggle) {
    this.displayToggleExerciseOption = !toggle.checked;
  }

  onToggleBadHabit(toggle: Toggle) {
    this.displayToggleBadHabitOptions = !toggle.checked;
  }

  onToggleDates(toggle: Toggle) {
    this.displayDates = toggle.checked;
  }

  private initializeForm(){
    if(this.mode == "Edit"){
      this.subTaskName = this.subTask.getNameTask();
    }

    this.subTaskForm = new FormGroup ({
      "taskName": new FormControl(this.subTaskName, Validators.required)
    });
  }

  onSubmit(){

  }

  onMoneyOptionChosen(selected: number) {

  }

}
