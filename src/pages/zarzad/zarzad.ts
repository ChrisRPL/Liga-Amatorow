import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the ZarzadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zarzad',
  templateUrl: 'zarzad.html',
})
export class ZarzadPage {
  zarzadTab = []
  values = []

  zarzad = firebase.database().ref('/council')
  zarzadImages = firebase.storage().ref('council/')
  seasonNumber
  season = firebase.database().ref('/season')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.season.on("value", resp => {
      this.seasonNumber = resp.val()["whichSeason"]
    })

    this.zarzad.on("value", resp => {
      this.zarzadTab = snapshotToArray(resp)

      let i = 0
      for (let member of this.zarzadTab) {
        this.getImage(i)
        i++
      }
    })



  }

  getImage(i) {
    this.zarzadImages.child('member' + (i + 1) + '.jpg').getDownloadURL().then(function (url) {
      var img = document.getElementById('member' + i).setAttribute('src', url);
      return;
    }).catch(function (error) {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZarzadPage');
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
