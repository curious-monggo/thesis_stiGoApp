
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//auth
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NewsProvider } from '../providers/news/news';
import { CourseProvider } from '../providers/course/course';
import { StrandProvider } from '../providers/strand/strand';

//browser
import { InAppBrowser } from '@ionic-native/in-app-browser'

export const firebaseConfig = {
  apiKey: "AIzaSyD6Rg5ux3fQi3OrwrWCHAEipaxrk3hB7EY",
  authDomain: "stigo-6d063.firebaseapp.com",
  databaseURL: "https://stigo-6d063.firebaseio.com",
  projectId: "stigo-6d063",
  storageBucket: "stigo-6d063.appspot.com",
  messagingSenderId: "510666125923"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // Tabs config
      tabsHideOnSubPages: true,
  }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestore,
    NewsProvider,
    CourseProvider,
    StrandProvider,
    InAppBrowser
  ]
})
export class AppModule {}
