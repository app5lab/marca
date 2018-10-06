import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WooProvider } from '../../providers/woo/woo';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public w:WooProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.w.wooApi().getAsync('products').then((data) => {

     console.log(JSON.parse(data.body))

    }, (err) => {
      console.log(err);
    })
  }

}
