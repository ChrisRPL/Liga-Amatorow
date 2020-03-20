import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import Moment from 'moment'
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the TerminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termin',
  templateUrl: 'termin.html',
})
export class TerminPage {
  scheduleTab = []
  extractedMatches = []

  schedule = firebase.database().ref('/schedule')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.schedule.on("value", resp => {
      this.scheduleTab = snapshotToArray(resp)
      this.scheduleTab.sort.call(this.scheduleTab, function (a, b) {
        console.log(a)
        console.log(b)
        if (Moment(a.date_normal, "DD.MM.YYYY").toDate() > Moment(b.date_normal, "DD.MM.YYYY").toDate()) {
          return -1;
        }
        if (Moment(a.date_normal, "DD.MM.YYYY").toDate() < Moment(b.date_normal, "DD.MM.YYYY").toDate()) {
          return 1;
        }
        return 0;
      })
      console.log(this.scheduleTab)
      let i = 0;
      let j = 0;
      let arr = []
      let str = ""
      for (let matches of this.scheduleTab) {
        const values = Object.keys(matches.matches).map(key => matches.matches[key]);
        this.extractedMatches.push(values)
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminPage');
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
