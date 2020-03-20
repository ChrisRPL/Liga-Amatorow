import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the AsystPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asyst',
  templateUrl: 'asyst.html',
})
export class AsystPage {

  assistTab = []

  assists = firebase.database().ref('/assistants')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assists.on("value", resp => {
      this.assistTab = snapshotToArray(resp)
      this.assistTab.sort.call(this.assistTab, function (a, b) {
        if (a.assists > b.assists) {
          return -1;
        }
        if (a.assists < b.assists) {
          return 1;
        }
        return 0;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsystPage');
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
