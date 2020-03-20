import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OnasPage } from '../onas/onas';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx'

@Component({

  templateUrl: 'tabs.html',
  selector: 'page-tabs'

})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = OnasPage;

  constructor(
    private nativePageTransitions: NativePageTransitions) {

  }
  loaded: boolean = false;
  tabIndex: number = 0;

  private getAnimationDirection(index: number): string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true) {
      case (currentIndex < index):
        return ('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e: any): void {
    let options: NativeTransitionOptions = {
      direction: this.getAnimationDirection(e.index),
      duration: 250,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 20,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }

}

