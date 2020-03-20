import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObiektPage } from './obiekt';

@NgModule({
  declarations: [
    ObiektPage,
  ],
  imports: [
    IonicPageModule.forChild(ObiektPage),
  ],
  exports: [
    ObiektPage
  ]
})
export class ObiektPageModule { }
