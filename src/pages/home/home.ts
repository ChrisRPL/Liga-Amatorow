import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NewsPage } from '../news/news'
import { TabsPage } from '../tabs/tabs'
import { News1Page } from '../news1/news1'
import { Network } from '@ionic-native/network'
import { DomSanitizer } from '@angular/platform-browser'
import Moment from 'moment'
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage: any = TabsPage;
  href1
  href2
  topGoals: number
  topScorer: String
  topAssists: number
  topAssisstant: String
  assistantsTab = []
  scorersTab = []
  schedules = []
  postsTab = []
  infosTab = []
  places = []
  teams1 = []
  teams2 = []
  imagesURL = []
  videosTab = []
  extractedPosts = []
  incomingMatches: Object
  incomingDate: String



  assistants = firebase.database().ref('/assistants')
  scorers = firebase.database().ref('/scorers')
  schedule = firebase.database().ref('/schedule')
  posts = firebase.database().ref('/posts')
  images = firebase.storage().ref('posts/')
  infos = firebase.database().ref('/infos')
  infosImages = firebase.storage().ref('infos/')
  videos = firebase.database().ref('/la_tv')


  constructor(private toast: ToastController, public navCtrl: NavController, public network: Network, private sanitize: DomSanitizer) {
    this.topScorer = ""
    this.topAssisstant = ""
    this.topAssists = 0
    this.topGoals = 0

    this.assistants.on("value", resp => {
      this.assistantsTab = snapshotToArray(resp)
      this.assistantsTab.forEach(element => {
        if (element.assists > this.topAssists) {
          this.topAssists = element.assists
          this.topAssisstant = element.name_surname
        }
      });
    })


    this.scorers.on("value", resp => {
      this.scorersTab = snapshotToArray(resp)
      this.scorersTab.forEach(element => {
        if (element.goals > this.topGoals) {
          this.topGoals = element.goals
          this.topScorer = element.name_surname
        }
      });
    })

    this.schedule.on("value", resp => {
      this.schedules = snapshotToArray(resp)
      let index = 0

      for (let item of this.schedules) {
        if (index == 0) {
          const values = Object.keys(item.matches).map(key => item.matches[key]);
          this.incomingMatches = values
          this.incomingDate = item.date
        }
        else {
          index++
        }
      }
    })

    this.posts.on("value", resp => {
      this.postsTab = snapshotToArray(resp)
      this.postsTab.sort.call(this.postsTab, function (a, b) {
        if (Moment(a.date, "DD.MM.YYYY").toDate() > Moment(b.date, "DD.MM.YYYY").toDate()) {
          return -1;
        }
        if (Moment(a.date, "DD.MM.YYYY").toDate() < Moment(b.date, "DD.MM.YYYY").toDate()) {
          return 1;
        }
        return 0;
      })
      let i = 1;
      let j = 1;
      let arr = []
      let str = ""
      for (let post of this.postsTab) {
        const values = Object.keys(post.posts).map(key => post.posts[key]);
        this.extractedPosts.push(values)
        for (let ext of this.extractedPosts[i - 1]) {
          this.getImage(i, j)
          j++;
        }
        i++;
        j = 1
      }
    })

    this.infos.on("value", resp => {
      this.infosTab = snapshotToArray(resp)
      let i = 1
      for (let info of this.infosTab)
        this.getInfoImage(i)
    })

    this.videos.on("value", resp => {
      this.videosTab = snapshotToArray(resp)
      this.videosTab.sort.call(this.videosTab, function (a, b) {
        if (Moment(a.date, "DD.MM.YYYY").toDate() > Moment(b.date, "DD.MM.YYYY").toDate()) {
          return -1;
        }
        if (Moment(a.date, "DD.MM.YYYY").toDate() < Moment(b.date, "DD.MM.YYYY").toDate()) {
          return 1;
        }
        return 0;
      })
      console.log(this.videosTab[0].href1)
      this.href1 = this.videosTab[0].href1
      this.href2 = this.videosTab[0].href2
    })
  }

  ionViewDidEnter() {
    this.network.onConnect().subscribe((data) => {
      this.displayNetworkUpdate(data.type);
    }, error => console.log(error));

    this.network.onDisconnect().subscribe((data) => {
      this.displayNetworkUpdate(data);
    }, error => console.log(error));
  }


  displayNetworkUpdate(connectionState: string) {
    this.toast.create({
      message: "Twój status sieci: " + connectionState.toUpperCase(),
      duration: 3000,
      showCloseButton: true,
      position: 'bottom',
      cssClass: 'polaczenie'
    }).present();
  }

  getImage(i, j) {
    this.images.child('g' + i + '/post' + j + '/main.jpg').getDownloadURL().then(function (url) {
      var img = document.getElementById('myimg' + (i - 1) + "" + (j - 1)).setAttribute('src', url);
      return;
    }).catch(function (error) {

    });
  }

  getInfoImage(i) {
    this.infosImages.child('info' + i + '/main.jpg').getDownloadURL().then(function (url) {
      var img = document.getElementById('info' + (i - 1)).setAttribute('src', url);;
      return;
    }).catch(function (error) {

    });
  }

  newsLoad(event, item, indexI) {

    this.navCtrl.push(NewsPage, {
      item: item,
      indexI: indexI
    })
  }

  news1(event, item, i, j) {
    this.navCtrl.push(News1Page,
      {
        item: item,
        i: i,
        j: j
      })
  }

  share(socialNet: string, fab) {
    fab.close();
    window.open('https://web.facebook.com/liga.amatorow/');
  }



  doRefresh(event) {

    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
    location.reload();
  }

  share1(socialNet: string, fab) {
    fab.close();
    window.open('https://twitter.com/Liga_Amatorow');
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
