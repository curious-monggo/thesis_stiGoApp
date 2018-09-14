import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//Provider
import { NewsProvider } from './../../providers/news/news';

//model
import { News } from './../../models/news/news';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latestNewsCollection;

  constructor(
    public navCtrl: NavController,
    private newsProvider: NewsProvider) {
  }
  ionViewDidLoad(){
    this.getLatestNewsCollection();
  }

  goToAccountPage(){
    // this.navCtrl.push('AccountPage');
  }

  getLatestNewsCollection(){
    this.newsProvider.getLatestNewsCollection().subscribe(latestNewsCollection => {
      this.latestNewsCollection = latestNewsCollection;
      console.log(latestNewsCollection);
    }, error => {
      console.log('Latest News error', error);
    });
  }

  openNewsDetailPage(newsDocumentId){
    console.log(newsDocumentId);
    this.navCtrl.push('NewsDetailPage', {
      id:newsDocumentId
    });
  }
}
