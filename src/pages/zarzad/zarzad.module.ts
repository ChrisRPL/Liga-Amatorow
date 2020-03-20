import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZarzadPage } from './zarzad';

@NgModule({
  declarations: [
    ZarzadPage,
  ],
  imports: [
    IonicPageModule.forChild(ZarzadPage),
  ],
})
export class ZarzadPageModule {}
