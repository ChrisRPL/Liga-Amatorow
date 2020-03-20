import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabelaPage } from '../tabela/tabela';
import { TerminPage } from '../termin/termin';
import { AsystPage } from '../asyst/asyst';
import { StrzelPage } from '../strzel/strzel';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  seasonNumber
  seasonYear
  season = firebase.database().ref('/season')

  constructor(public navCtrl: NavController) {
    this.season.on("value", resp => {
      this.seasonNumber = resp.val()["whichSeason"]
      this.seasonYear = resp.val()["year"]
    })
  }


  doRefresh(event) {

    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 4000);
    location.reload();
  }

  tabela() {
    this.navCtrl.push(TabelaPage)
  }

  termin() {
    this.navCtrl.push(TerminPage)
  }

  asyst() {
    this.navCtrl.push(AsystPage)
  }

  strzel() {
    this.navCtrl.push(StrzelPage)
  }

  fb() {
    window.open("https://www.facebook.com/liga.amatorow/", '_system', 'location=yes');
  }

  tw() {
    window.open("https://twitter.com/Liga_Amatorow?lang=pl", '_system', 'location=yes');
  }

  ig() {
    window.open("https://www.instagram.com/liga_amatorow/", '_system', 'location=yes');
  }

}
