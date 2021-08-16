import { Component, OnInit } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { ConnService } from '../utils/conn.service';
import { DateUtilsService } from '../utils/date-utils.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ViewEncapsulation } from '@angular/core';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { locale as chinese } from '../i18n/cn';
import { locale as english } from '../i18n/en';
import { locale as japanese } from '../i18n/ja';
import { TranslateService } from '@ngx-translate/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { PagesService } from '../pages.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-ngx-database',
  templateUrl: './ngx-database.component.html',
  styleUrls: ['./ngx-database.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgxDatabaseComponent implements OnInit {
  rows = [];

  columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor(
    private db: PagesService,
    public dateUtils: DateUtilsService,
    private notification: NzNotificationService,
    private translate: TranslateService
  ) {
    translate.setTranslation(english.lang, english.data, true);
    translate.setTranslation(chinese.lang, chinese.data, true);
    translate.setTranslation(japanese.lang, japanese.data, true);
    this.fetch((data) => {
      this.rows = data;
    });
  }

  ngOnInit(): void {
    //this.db.exportTVHotel('');
    //this.db.queryHotel('').subscribe((x) => {});
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
}
