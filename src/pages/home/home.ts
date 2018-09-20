import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
list:any [] =[1,2,4,5,6]
  constructor(public navCtrl: NavController) {

  }

}
