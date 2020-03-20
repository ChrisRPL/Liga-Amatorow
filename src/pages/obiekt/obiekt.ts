import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObiektPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obiekt',
  templateUrl: 'obiekt.html',
})
export class ObiektPage {
  value;
  index;
  teamsImages = firebase.storage().ref('teams/')
  members = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.value = navParams.get("item")
    this.index = navParams.get("i")
    console.log(this.index)
    this.members = Object.keys(this.value.members).map(key => this.value.members[key]);
    this.getImage(this.index)
  }

  getImage(i) {
    this.teamsImages.child('team' + (i + 1) + '/inset.jpg').getDownloadURL().then(function (url) {
      var img = document.getElementById('teamimg').setAttribute('src', url);
      return;
    }).catch(function (error) {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObiektPage');
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
