import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Aid Interview Application';
  
  langKeys = ['en', 'de'];
  lang = 'en';

  constructor(private translateService: TranslateService) {
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');
  }

  useLang() {
    this.translateService.use(this.lang);
  }
}
