import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle, Platform, ActionSheetController, reorderArray, AlertController, ToastController } from 'ionic-angular';
import { SubtaskPage } from '../subtask/subtask';
import { TabsPage } from '../tabs/tabs';
import { Habit } from '../../models/habit-bean';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SubTask } from '../../models/subtask';
import { NGXLogger } from 'ngx-logger';
import firebase from 'firebase';
import { HabitsService } from '../../services/habits-service';
import { ApplicationService } from '../../services/application-service';

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
  displayCategories: boolean = true;
  displaySubCategories: boolean = true;
  displayHabitName: boolean = true;
  displayDescription: boolean = true;
  displayMoreDetails: boolean = true;
  displayShowTasks: boolean = true;
  displayHabitButton: boolean = true;

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

  habitType : number = 0;
  habitCategory: number = 0;
  habitSubCategory: number = 0;
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  startTime: string = new Date().toISOString();
  travelTime: string = new Date().toISOString();

  habitTypeOptions = ['Select type','Habit', 'Appointment', 'Goal', 'Reminder'];
  habitCategoriesOptions = ['Select category','Arts', 'Fitness', 'Financial', 'Self Improvement', 'Social', 'Other'];
  habitSubCategoriesOpt = ['Select subcategory','Budget', 'Save', 'Earn'];
  prepopulatedOptions = [];
  prepolutatedHabitsLabel: string = "Select a habit or create a new one";

  private habitValues: any;
  private habitObject: Habit = new Habit();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionsheetCtrl: ActionSheetController,
    public applicationService: ApplicationService,
    public habitService: HabitsService,
    private logger: NGXLogger) {
      this.habitObject.setRepeatHabit(false);
  }

  //Salvar, borrar y completar habitos
  //Poner y crear eventos en el calendario
  //Imagenes para los habitos
  //Estadisticas
  //Agrupar habitos por tipo
  //Permitir crear grupos
  //Hacer notificaciones
  //Hacer temas para personalizar
  //Generar porcentaje
  //Poblar today con los que tienen fecha para hoy
  //Agregar mapa de microsoft
  //Hacer base de datos interna
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
    this.createObject();
    this.applicationService.currenthabit = this.habitObject;
    this.navCtrl.push(page, {mode: "New"});
  }

  onToggleLocation(toggle: Toggle) {
    this.displayToggleLocationOptions = !toggle.checked;
  }

  onToggleMoreDetails(toggle: Toggle) {
    this.displayMoreDetailsOptions = !toggle.checked;
    this.habitObject.setMoreDetails(toggle.checked);
  }

  onToggleShowSubtasks(toggle: Toggle){
    this.displaySubTasksOptions = !toggle.checked;
  }
  /**
   * Sets the repeat type habit
   * @param toggle 
   */
  onToggleDates(toggle: Toggle) {
    this.displayDates = toggle.checked;
    this.habitObject.setRepeatHabit(toggle.checked);
  }

  private createObject () {
    this.habitValues = this.habitForm.value;
    this.habitObject.setHabitName(this.habitValues.habitName);
    this.habitObject.setDescription(this.habitValues.description);
    this.habitObject.setTypeHabit(this.habitType);
    
    if(this.habitObject.getMoreDetails() == true) {
      if(this.habitObject.getRepeatHabit() == false) {
        this.habitObject.setDateFrom(this.startDate);
        this.habitObject.setDateTo(this.endDate);
      } else {
        this.habitObject.setDateFrom('');
        this.habitObject.setDateTo('');
      }
      this.habitObject.setStartTime(this.startTime);
    } else {
      this.habitObject.setDateFrom('');
      this.habitObject.setDateTo('');
      this.habitObject.setStartTime('');
    }

    
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
    
    if(this.habitValues.subTasksList.length > 0){
      //subtasks = value.subTasksList.map()
    }

    if (this.mode == "Edit") {

    }else {

      
      this.createObject();
      console.log(this.habitObject);

      /*
      var newHabit = new Habit(1, "Mi applicacion", "Hacer cosas", 1, 
      new Date(), new Date(), "location", 1, [
          new SubTask(1 , "my subtask", new Date(), new Date(), 1, 1),
          new SubTask(2 , "subtask 2", new Date(), new Date(), 1, 1),
          new SubTask(3 , "subtask 3", new Date(), new Date(), 1, 1)
      ], true, true , false , "1 Dec 2018", "10 Dec 2018", "9:00:00");
      */

      /*
      firebase.auth().currentUser.getIdToken().then(
        (token: string) => {
          this.habitService.addHabit(token, this.applicationService.currenthabit).subscribe (
            () => {
              this.navCtrl.setRoot(TabsPage);
              this.showToast('top');
              console.log('Habit Added');
            },
            error => {
                console.log(error.message);
                this.logger.error(error.message, 'error in onSubmit profile');
                const alert = this.alertCtrl.create({
                  title: 'Adding Habit failed!',
                  message: error.message,
                  buttons: ['Ok']
                });
                alert.present();
            }
          );
        }
      ); 
      
      */
    }
  }

  showToast(position:string) {
    let toast = this.toastCtrl.create({
        message: 'Profile updated successfully',
        duration: 2000,
        position: position
    });
    toast.present(toast);
  }

  reorderItems(indexes){
    this.subTasksArray = reorderArray(this.subTasksArray, indexes);
  }

  onHabitTypeChange(option: any) {
    if(option != 0){
      this.displayCategories = false;
    } else {
      this.displayCategories = true;
    }
  }

  onCategoryChange(option: any) {
    if(option != 0){
      this.displaySubCategories = false;
    } else {
      this.displaySubCategories = true;
    }
  }

  onSubCategoryChange(option: any) {
    if(option != 0){
      this.displayHabitName = false;
      this.displayDescription = false;
      this.displayMoreDetails = false;
      this.displayShowTasks = false;
      this.displayHabitButton = false;
    } else {
      this.displayHabitName = true;
      this.displayDescription = true;
      this.displayMoreDetails = true;
      this.displayShowTasks = true;
      this.displayHabitButton = true;
    }
  }  
}
