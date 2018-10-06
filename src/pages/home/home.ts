import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController } from 'ionic-angular';
import { BagPage } from '../../pages/bag/bag';
import { SearchPage } from '../search/search';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
list:any [] =[1,2,4,5,6]
  constructor(public navCtrl: NavController, public searchmodal:ModalController) {

  }
  Openbag(){
    this.navCtrl.push(BagPage);
  }
  OpenSearch(){
    const search = this.searchmodal.create(SearchPage);
    search.present();
  }
}
