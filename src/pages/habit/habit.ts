import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle, Platform, ActionSheetController, reorderArray } from 'ionic-angular';
import { SubtaskPage } from '../subtask/subtask';
import { Habit } from '../../models/habit-bean';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SubTask } from '../../models/subtask';
import { HabitsService } from '../../services/habits-service';

@IonicPage()
@Component({
  selector: 'page-habit',
  templateUrl: 'habit.html',
})
export class HabitPage implements OnInit{
  
  subTaskPage = SubtaskPage;

  displayToggleLocationOptions: boolean = true;
  displayMoreDetailsOptions: boolean = true;
  displaySubTasksOptions: boolean = true; 
  displayDates: boolean = false;
  displayHabits: boolean = true;

  moreOptionsInitial: boolean = false;
  showSubTasksInitial: boolean = false;
  locationAddedInitial: boolean = false;
  repeatInitial: boolean = false;
  habitTypeInitial: Number;

  habit: Habit;
  subTasksArray: SubTask[];
  
  mode = "New";
  habitName: string;
  habitForm: FormGroup;

  habitType : number;
  startDate: String = new Date().toISOString();
  endDate: String = new Date().toISOString();
  startTime: String = new Date().toISOString();
  travelTime: String = new Date().toISOString();

  habitTypeOptions = ['Appointment', 'Goal', 'Reminder'];
  prepopulatedOptions = [];
  prepolutatedHabitsLabel: string = "Select a habit or create a new one";


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public habitService: HabitsService) {
  }


  //Hacer validacion de login y signin  
  //Hacer base de datos interna
  //Creacion y Modificacion de perfil
  //Salvar, borrar y completar habitos
  //Poner y crear eventos en el calendario
  //Imagenes para los habitos
  //Estadisticas
  //Agrupar habitos por tipo
  //Permitir crear grupos
  //Hacer notificaciones
  //Hacer temas para customize
  //Generar porcentaje
  //Poblar today con los que tienen fecha para hoy
  //Agregar mapa de microsoft
  //Traducir idiomas y ver como inicializar el idioma
  //Poblar opciones automaticamente en para hacerlo mas facil y rapido usuario
  //Crear tutorial

  ngOnInit(){  
    this.mode = this.navParams.get("mode");
    if(this.mode == "Edit"){
      this.habit = this.navParams.get("habit");
      this.subTasksArray = this.habit.getSubTasks();
      this.habitType = this.habit.getTypeHabit();
    }
    this.initializeForm();
  }
  
  deleteSubTask(subTask: SubTask) {
    
  }

  completeSubTask(subTask: SubTask) {
    this.habitService.completeTask(subTask);
  }

  openMenu(subTask: SubTask) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Subtask options',
      //cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Edit',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => this.loadSubTaskPage(this.subTaskPage, subTask)
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => this.deleteSubTask(subTask)
        },
        {
          text: 'Complete',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => this.completeSubTask(subTask)
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  loadSubTaskPage(page:any, subTask: SubTask){    
    this.navCtrl.push(page, {subtask: subTask, mode: "Edit"});
  }

  createNewSubTask(page:any) {
    this.navCtrl.push(page, {mode: "New"});
  }

  onToggleLocation(toggle: Toggle) {
    this.displayToggleLocationOptions = !toggle.checked;
  }

  onToggleMoreDetails(toggle: Toggle) {
    this.displayMoreDetailsOptions = !toggle.checked;
  }

  onToggleShowSubtasks(toggle: Toggle){
    this.displaySubTasksOptions = !toggle.checked;
  }

  onToggleDates(toggle: Toggle) {
    this.displayDates = toggle.checked;
  }

  private initializeForm(){
    let description = null;
    let subTasksList = [];
    
    if(this.mode == "Edit"){
      this.habitName = this.habit.getHabitName();
      description = this.habit.getDescription();
      
      this.locationAddedInitial = this.habit.getLocationAdded();
      this.moreOptionsInitial = this.habit.getMoreDetails();
      this.repeatInitial = this.habit.getRepeatHabit();

      if(this.moreOptionsInitial){
        this.displayMoreDetailsOptions = false;
      }
      
      if(this.habit.getSubTasks().length > 0){
        this.showSubTasksInitial = true;
        this.displaySubTasksOptions = false;
      }

      if(this.locationAddedInitial) {
        this.displayToggleLocationOptions = false;
      }

    }

    this.habitForm = new FormGroup({
      "habitName": new FormControl(this.habitName, Validators.required),
      "description": new FormControl(description, Validators.required),
      "subTasksList": new FormArray(subTasksList)
    });
  }

  onSubmit(){
    const value = this.habitForm.value;
    let subtasks = [];
    
    if(value.subTasksList.length > 0){
      //subtasks = value.subTasksList.map()
    }

    if (this.mode == "Edit") {

    }else {
      
      var newHabit = new Habit(1, "Mi applicacion", "Hacer cosas", 1, 
      new Date(), new Date(), "location", 1, [
          new SubTask(1 , "my subtask", new Date(), new Date(), 1, 1),
          new SubTask(2 , "subtask 2", new Date(), new Date(), 1, 1),
          new SubTask(3 , "subtask 3", new Date(), new Date(), 1, 1)
      ], true, true , false , "1 Dec 2018", "10 Dec 2018", "9:00:00");
      

      this.habitService.addHabit(newHabit);
    }
  }

  reorderItems(indexes){
    this.subTasksArray = reorderArray(this.subTasksArray, indexes);
  }

}
