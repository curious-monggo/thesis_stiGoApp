
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Provider
import { NewsProvider } from './../../providers/news/news';

//model
import { News } from './../../models/news/news';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newsCollection:News[];
  newsDocumentId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private newsProvider: NewsProvider
    ) {
  }

  ionViewDidLoad() {
    this.getNewsCollection();
  }

  getNewsCollection() {
    this.newsProvider.getNewsCollection().subscribe(newsCollection => {
      this.newsCollection = newsCollection;
    });
  }

  openNewsDetailPage(newsDocumentId){
    console.log(newsDocumentId);
    this.navCtrl.push('NewsDetailPage', {
      id:newsDocumentId
    });
  }

}
