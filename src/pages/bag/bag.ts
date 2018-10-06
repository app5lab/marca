import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the BagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bag',
  templateUrl: 'bag.html',
})
export class BagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertctrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BagPage');
  }
  qty(){
    let qty = this.alertctrl.create({
      title: 'Select Quantity',
      inputs:[{
        type: 'radio',
        label: '1',
        value: '1'
        },
        {type: 'radio',
        label: '2',
        value: '2' },

        {type: 'radio',
        label: '3',
        value: '3' }
      ],
      buttons:[{
        text:"Done",
       

      },
    {
      text: "Back"
    }]

    })
    qty.present()
  }
}
