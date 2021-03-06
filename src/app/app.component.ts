import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//  import { SignupPage } from '../pages/signup/signup';
 //import { SigninPage } from '../pages/signin/signin';
//import { CreatevotePage } from '../pages/createvote/createvote';
//import { ProfilePage } from '../pages/profile/profile';
// import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
// import { HomePage } from '../pages/home/home'; 
// import { ResultsPage } from '../pages/results/results';
// import { AdvancevotingPage } from '../pages/advancevoting/advancevoting';
import { TabsPage } from '../pages/tabs/tabs';
 //import { SigninPage } from '../pages/signin/signin';
 import { IntrosliderPage } from '../pages/introslider/introslider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

