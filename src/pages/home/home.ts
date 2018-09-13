import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  photo_url = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  displayName;
  constructor(public navCtrl: NavController) {

  }

  googleSignIn(){
    console.log('Google Sign in');
  }

  facebookSignIn(){
    console.log('Facebook Sign in');
  }
  goToAccountPage(){
    // this.navCtrl.push('AccountPage');
  }

}
