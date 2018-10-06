import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
PasswordType: string = "password";
passwordShown: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.PasswordType = "password"
    } else{
      this.passwordShown = true;
      this.PasswordType = "text"
    }
  }
}
