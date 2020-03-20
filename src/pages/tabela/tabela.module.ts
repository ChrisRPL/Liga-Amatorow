import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabelaPage } from './tabela';

@NgModule({
  declarations: [
    TabelaPage,
  ],
  imports: [
    IonicPageModule.forChild(TabelaPage),
  ],
})
export class TabelaPageModule {}
