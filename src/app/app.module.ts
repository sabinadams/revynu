import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingsPage } from '../pages/settings/settings';
import { NewProjectPage } from '../pages/new-project/new-project';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { LoginFormComponent } from '../pages/login/login-form/login-form';
import { RegisterFormComponent } from '../pages/login/register-form/register-form';
import { ForgotPasswordComponent } from '../pages/login/forgot-password/forgot-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../services/auth-service'
@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    NewProjectPage,
    HomePage,
    TabsPage,
    LoginPage,
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    NewProjectPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
