import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx'
import { OneSignal } from '@ionic-native/onesignal/ngx'


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { OnasPage } from '../pages/onas/onas';
import { TabsPage } from '../pages/tabs/tabs';


import { ZarzadPageModule } from '../pages/zarzad/zarzad.module';



import { KlubyPageModule } from '../pages/kluby/kluby.module';
import { NewsPageModule } from '../pages/news/news.module'
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ObiektPageModule } from '../pages/obiekt/obiekt.module';
import { StrzelPageModule } from '../pages/strzel/strzel.module';
import { TerminPageModule } from '../pages/termin/termin.module';
import { AsystPageModule } from '../pages/asyst/asyst.module'
import { TabelaPageModule } from '../pages/tabela/tabela.module';
import { News1PageModule } from '../pages/news1/news1.module';
import { RegulaminPageModule } from '../pages/regulamin/regulamin.module';
import { OnasPageModule } from '../pages/onas/onas.module';






@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    KlubyPageModule,
    ZarzadPageModule,
    NewsPageModule,
    ObiektPageModule,
    StrzelPageModule,
    TerminPageModule,
    AsystPageModule,
    TabelaPageModule,
    News1PageModule,
    RegulaminPageModule,
    OnasPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    OnasPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Network,
    NativePageTransitions,
    OneSignal,
  ]
})
export class AppModule { }

