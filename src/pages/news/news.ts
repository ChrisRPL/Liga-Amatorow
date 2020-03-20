import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  value: any;
  insetDate: String
  description: String
  insetTitle: String
  indexI

  images = firebase.storage().ref('infos/')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.insetDate = ""
    this.insetTitle = ""
    this.description = ""
    this.value = navParams.get('item');
    this.indexI = navParams.get('indexI')
    this.insetTitle = this.value.insetTitle
    this.insetDate = this.value.insetDate
    this.description = this.value.description
    this.getInfoImage(this.indexI)
  }

  getInfoImage(i) {
    this.images.child('info' + (i + 1) + '/inset.jpg').getDownloadURL().then(function (url) {
      var img = document.getElementById('infopost').setAttribute('src', url);
      return;
    }).catch(function (error) {

    });
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
