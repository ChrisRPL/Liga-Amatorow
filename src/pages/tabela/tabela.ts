import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Moment from 'moment';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the TabelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabela',
  templateUrl: 'tabela.html',
})
export class TabelaPage {
  leagueTableTab = []

  leagueTable = firebase.database().ref('/league_table')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.leagueTable.on("value", resp => {
      this.leagueTableTab = snapshotToArray(resp)
      this.leagueTableTab.sort.call(this.leagueTableTab, function (a, b) {
        if (a.points > b.points) {
          return -1;
        }
        if (a.points < b.points) {
          return 1;
        }
        return 0;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabelaPage');
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
