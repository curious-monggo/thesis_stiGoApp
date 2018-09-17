import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the RegistrationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration-code',
  templateUrl: 'registration-code.html',
})
export class RegistrationCodePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationCodePage');
  }

  presentLoading(){
    let loading = this.loadingCtrl.create({
      content:'Please wait...'
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

}
