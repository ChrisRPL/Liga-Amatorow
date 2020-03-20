import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the News1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news1',
  templateUrl: 'news1.html',
})
export class News1Page {
  value: any;
  insetDate: String
  description: String
  insetTitle: String
  indexI: number
  indexJ: number

  images = firebase.storage().ref('posts/')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.insetDate = ""
    this.insetTitle = ""
    this.description = ""
    this.value = navParams.get('item');
    const data = Object.keys(this.value).map(key => this.value[key]);
    this.insetTitle = data[2]
    this.insetDate = data[1]
    this.description = data[0]
    this.indexI = navParams.get('i')
    this.indexJ = navParams.get('j')
    this.getImage(this.indexI, this.indexJ)
  }

  getImage(i, j) {
    this.images.child('g' + (i + 1) + '/post' + (j + 1) + '/inset.jpg').getDownloadURL().then(function (url) {
      var img = document.getElementById('postimg' + i + "" + j).setAttribute('src', url);
      return;
    }).catch(function (error) {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News1Page');
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
