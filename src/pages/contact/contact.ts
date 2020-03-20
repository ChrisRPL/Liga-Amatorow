import { Component } from '@angular/core';
import { NavController, App, ViewController } from 'ionic-angular';
import { KlubyPage } from '../kluby/kluby'
import { ZarzadPage } from '../zarzad/zarzad'
import { RegulaminPage } from '../regulamin/regulamin';
import * as firebase from 'firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  seasonYear
  season = firebase.database().ref('/season')

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public appCtrl: App, ) {
    this.season.on("value", resp => {
      this.seasonYear = resp.val()["year"]
    })
  }

  druzynyLoad() {
    this.navCtrl.push(KlubyPage)
  }

  zarzadLoad() {
    this.navCtrl.push(ZarzadPage);
  }

  share(socialNet: string, fab) {
    fab.close();
    window.open('https://web.facebook.com/liga.amatorow/');
  }

  share1(socialNet: string, fab) {
    fab.close();
    window.open('https://twitter.com/Liga_Amatorow');
  }

  doRefresh(event) {

    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 4000);
    location.reload();
  }

  regulamin() {
    this.navCtrl.push(RegulaminPage);

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
