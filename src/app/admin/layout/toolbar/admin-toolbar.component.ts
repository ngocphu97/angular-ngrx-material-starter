import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Language } from '@app/core/i18n';
import { AppState } from '@app/core/store';
import { appSettingsAction } from '@app/core/app-settings';
import { AuthActions } from '@app/auth';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onLanguageSelect(language: Language) {
    this.store.dispatch(appSettingsAction.changeLanguage({ language }));
  }

  onLogoutClicked(): void {
    this.store.dispatch(AuthActions.logoutConfirmation());
  }

}
