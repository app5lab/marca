import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public DesAlert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }
  add(){
    this.navCtrl.push('ProductsPage')
  }
  
}
