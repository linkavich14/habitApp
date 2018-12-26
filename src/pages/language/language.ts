import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})

/*
Hay que agregar dependencias manualmente para i18n
npm install @ngx-translate/core --save
npm i rxjs@^6.0 rxjs-compat
*/


export class LanguagePage {
  lang:any;
  languagesOptions = ['English', 'Deustch', 'Espanol', 'Francais'];
  languagesCodes = ["en", "de", "es", "fr"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }

  switchLanguage() {
    this.translate.use(this.lang);
  }

}
