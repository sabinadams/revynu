import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})

export class LoginPage{
  tabsPage = TabsPage;
  currentView = 'login';
  constructor(public _authService: AuthService, public _alerts: AlertController, public _loadingController: LoadingController) {}

  handleChangeView($event){
    this.currentView = $event;
  }

}
