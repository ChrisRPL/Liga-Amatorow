import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KlubyPage } from './kluby';

@NgModule({
  declarations: [
    KlubyPage,
  ],
  imports: [
    IonicPageModule.forChild(KlubyPage),
  ],
  exports:
    [KlubyPage]
})
export class KlubyPageModule { }
