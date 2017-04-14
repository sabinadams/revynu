import { Component } from '@angular/core';

import { NewProjectPage } from '../new-project/new-project';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewProjectPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
