import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.email = navParams.get("email");

  }

}
