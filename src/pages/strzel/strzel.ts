import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the StrzelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-strzel',
  templateUrl: 'strzel.html',
})
export class StrzelPage {
  scorersTab = []

  scorers = firebase.database().ref('/scorers')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scorers.on("value", resp => {
      this.scorersTab = snapshotToArray(resp)
      this.scorersTab.sort.call(this.scorersTab, function (a, b) {
        if (a.goals > b.goals) {
          return -1;
        }
        if (a.goals < b.goals) {
          return 1;
        }
        return 0;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StrzelPage');
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
