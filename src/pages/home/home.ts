import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  constructor(public navCtrl: NavController) {}

  ngOnInit(){}
  projects = [
  	{
  		'name': 'Test 2',
  		'money': '$1,231.98',
  		'img': 'https://appsftw.com/im/is2.mzstatic.com/image/thumb/Purple71/v4/c4/d3/d5/c4d3d5eb-d47c-8913-8a83-5b2e65e07eea/source/512x512bb.jpg'
  	},
  	{
  		'name': 'Test',
  		'money': '$1,231.98',
  		'img': 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-4.jpg'
  	},
  	{
  		'name': 'Test',
  		'money': '$1,231.98',
  		'img': 'https://lh3.googleusercontent.com/rur85tnbWFdpgCkQrybnY0j3kfYbGGFh-0Tp6iEgMa46LLotE9ilZwiSc7gzCKhq2LIJ=h556'
  	},
  	{
  		'name': 'Test',
  		'money': '$1,231.98',
  		'img': 'http://www.hobbyist.co.nz/sites/default/files/AndroidStarterKit/blue_and_red.jpg'
  	},
  	{
  		'name': 'Test',
  		'money': '$1,231.98',
  		'img': 'https://image.freepik.com/free-vector/mobile-app-in-a-tablet_23-2147493481.jpg'
  	},
  	{
  		'name': 'Test',
  		'money': '$1,231.98',
  		'img': 'http://st2.depositphotos.com/4329009/9211/v/950/depositphotos_92118726-stock-illustration-abstract-vector-background-for-web.jpg'
  	},
  	{
  		'name': 'Test',
  		'money': '$1,231.98',
  		'img': 'http://st2.depositphotos.com/4329009/9219/v/950/depositphotos_92194926-stock-illustration-abstract-vector-background-for-web.jpg'
  	},
  ]
}
