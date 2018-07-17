import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import arr from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  


  name = arr[0];
  surname = arr[1];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
 
}
