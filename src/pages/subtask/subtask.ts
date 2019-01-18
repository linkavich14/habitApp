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
  displayMoneyGoalOther: boolean = true;
  displayExerciseGoalOther: boolean = true;
  displayEducationGoalField: boolean = true;
  displayBadHabitField: boolean = true;

  //Toggles display buttons
  displayBudgetFields: boolean = true;//don't show for now

  //Buttons labels
  moneyBudgetButton = "Create my budget";

  subTask: SubTask;
  subTaskForm: FormGroup;
  subTaskName: string;
  mode = "New";

  //ComboBoxes initial  selection
  subTaskType : number = 0;
  goalMoneyDetails : number = 0;
  goalExerciseDetails : number = 0;
  goalLearningDetails : number = 0;
  goalRemoveBadHabitDetails : number = 0;


  //Subtask dates
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  //startTime: string = new Date().toISOString();
  travelTime: string = new Date().toISOString();

  //Combobox options
  subtaskTypeOptions = ['Task', 'Appointment', 'Objective', 'Reminder', 'Habit'];
  moneyGoalsOptions = ['Save every week', 'Reduce my debt', 'Donate money', 'Stop wasting money', 'Other'];
  healthGoalsOptions = ['Workout at Gym', 'Run', 'Other'];
  educationGoalsOptions = ['Study something new', 'Finish an Assignment', 'Complete a course', 'Improve my grades', 'Do not fail any course', 'Other'];
  badHabitRemoveOptions = ['Stop smoking', 'Reduce drinking alcohol', 'Other'];

  //Optional Fields values
  moneyGoalvalue: string;
  otherGoalName: string;
  exerciseGoalValue: string;
  otherExerciseGoalName: string;
  learningGoalValue: string;
  otherLearningGoalName: string;
  badHabitGoalValue: string;
  otherBadHabitGoalName: string;

  //Fields related to combobox selected
  moneyFieldLabel: string = "Percentage to save";
  exerciseFieldLabel: string = "How many hours ?";
  learningFieldLabel: string = "What do you want to study ?";
  removeBadHabitFieldLabel: string = "How are you going to do it ?";

  private subTaskObject: SubTask = new SubTask();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subTaskObject.setRepeatTask(false);
    this.subTaskObject.setMoneyDetails(false);
    this.subTaskObject.setExerciseDetails(false);
    this.subTaskObject.setLearningDetails(false);
    this.subTaskObject.setBadHabitDetails(false);
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
    this.subTaskObject.setMoneyDetails(toggle.checked);
  }

  onToggleLocation(toggle: Toggle) {
    this.displayToggleLocationOptions = !toggle.checked;
  }

  onToggleLearning(toggle: Toggle) {
    this.displayToggleLearningOptions = !toggle.checked;
    this.subTaskObject.setLearningDetails(toggle.checked);
  }

  onToggleExercise(toggle: Toggle) {
    this.displayToggleExerciseOption = !toggle.checked;
    this.subTaskObject.setExerciseDetails(toggle.checked);
  }

  onToggleBadHabit(toggle: Toggle) {
    this.displayToggleBadHabitOptions = !toggle.checked;
    this.subTaskObject.setBadHabitDetails(toggle.checked);
  }

  onToggleDates(toggle: Toggle) {
    this.displayDates = toggle.checked;
    this.subTaskObject.setRepeatTask(toggle.checked);
  }

  private initializeForm(){
    if(this.mode == "Edit"){
      this.subTaskName = this.subTask.getNameTask();
    }

    this.subTaskForm = new FormGroup ({
      "taskName": new FormControl(this.subTaskName, Validators.required)
    });
  }

  private createObject () {
    debugger;
    this.subTaskObject.setNameTask(this.subTaskForm.value.taskName);
    this.subTaskObject.setType(this.subTaskType);
    
    if(this.subTaskObject.getRepeatTask() == false) {
      this.subTaskObject.setDateFrom(this.startDate);
      this.subTaskObject.setDateTo(this.endDate);
    } else {
      this.subTaskObject.setDateFrom('');
      this.subTaskObject.setDateTo('')
    }

    if(this.subTaskObject.getMoneyDetails() == true) {
      this.subTaskObject.setMoneyGoal(this.goalMoneyDetails)
      this.subTaskObject.setFieldMoneyGoal(this.moneyGoalvalue);
      if(this.goalMoneyDetails == 4) {
        this.subTaskObject.setMoneyGoalOther(this.otherGoalName);
      } else {
        this.subTaskObject.setMoneyGoalOther("");
      }
    } else {
      this.subTaskObject.setFieldMoneyGoal("");
      this.subTaskObject.setMoneyGoalOther("");
    }

    if(this.subTaskObject.getExerciseDetails() == true) {
      
    } else {

    }

    if(this.subTaskObject.getLearningDetails() == true) {
      
    } else {

    }

    if(this.subTaskObject.getBadHabitDetails() == true) {
      
    } else {

    }



  }

  onSubmit(){
    if(this.mode == "Edit") {

    }else {
      this.createObject();
      console.log(this.subTaskObject);
    }
  }

  onMoneyOptionChosen(option: any) {
    if(option == 0) {
      this.displayMoneyGoalOther = true;
      this.moneyFieldLabel = "Percentage to save"
    } else if(option == 1) {
      this.displayMoneyGoalOther = true;
      this.moneyFieldLabel = "Pay extra to my debts"
    } else if(option == 2) {
      this.displayMoneyGoalOther = true;
      this.moneyFieldLabel = "How much should you donate ?"
    } else if(option == 3) {
      this.displayMoneyGoalOther = true;
      this.moneyFieldLabel = "What to stop buying ?"
    } else if(option == 4) {
      this.displayMoneyGoalOther = false;
      this.moneyFieldLabel = "How would you measure it ?"
    }
    this.subTaskObject.setMoneyGoal(option);
  }

  onExerciseOptionChosen(option: any) {
    if(option == 0) { 

    } else if(option == 1) {

    } else if(option == 2) {

    }
  }

  onLearningOptionChosen(option: any) {

  }

  onRemoveBadHabitOptionChose(option: any) {

  }
}
