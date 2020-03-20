import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ObiektPage } from '../obiekt/obiekt'
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the KlubyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kluby',
  templateUrl: 'kluby.html',
})
export class KlubyPage {
  teamsTab = []

  teams = firebase.database().ref('/teams')
  teamsImages = firebase.storage().ref('teams/')


  constructor(public navCtrl: NavController) {
    this.teams.on("value", resp => {
      this.teamsTab = snapshotToArray(resp)

      let i = 1
      for (let team of this.teamsTab) {
        this.getImage(i);
        i++;
      }
    })
  }

  getImage(i) {
    this.teamsImages.child('team' + i + '/main.png').getDownloadURL().then(function (url) {
      var img = document.getElementById('teamimg' + i).setAttribute('src', url);
      return;
    }).catch(function (error) {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KlubyPage');
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

  obiekt(event, item, i) {
    this.navCtrl.push(ObiektPage,
      {
        item: item,
        i: i
      })
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
