import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { ConstUtilsService } from './const-utils.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DateUtilsService } from './date-utils.service';

@Injectable({
  providedIn: 'root',
})
export class ConnService {
  public _httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(
    public _httpClient: HttpClient,
    public constUtil: ConstUtilsService,
    public dateUtil: DateUtilsService,
    private message: NzMessageService,
    private notification: NzNotificationService
  ) {}

  id: any;

  get(url: string, params?: any): Observable<any> {
    let paramsStr = '';
    let hasParam = false;
    if (params) {
      let paramCount = 0;
      // tslint:disable-next-line:forin
      for (const key in params) {
        hasParam = true;
        paramCount += 1;
        if (paramCount === 1) {
          paramsStr += key + '=' + encodeURIComponent(params[key]);
        } else {
          paramsStr += '&' + key + '=' + encodeURIComponent(params[key]);
        }
      }
      if (hasParam) {
        paramsStr = '?' + paramsStr;
      }
    }
    const accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    const observable = this._httpClient.get<any>(accessURL);
    this.message.remove();
    this.id = this.message.loading('数据加载中。。。', {
      nzDuration: 0,
    }).messageId;
    return new Observable((observer: Observer<any>) => {
      observable.subscribe(
        (successRes: any) => {
          this.message.remove();
          this.message.success('完成！', {
            nzDuration: 2500,
          });
          observer.next(successRes);
          observer.complete();
          return;
        },
        (errorRes: any) => {
          this.message.remove();
          observer.error(errorRes);
          console.log(errorRes.Code);
          console.log(errorRes.MessageEN);
          if (errorRes.error.Code && errorRes.error.MessageEN) {
            this.notification.create(
              'warning',
              'Warning',
              errorRes.error.MessageCN,
              {
                nzDuration: 0,
              }
            );
          } else {
            this.notification.create('error', 'Error', '失败！', {
              nzDuration: 0,
            });
          }
          observer.complete();
          return;
        }
      );
    });
  }

  // tslint:disable-next-line:typedef
  getDate() {
    return this.dateUtil.dateFormat('YYYY-mm-dd HH:MM:SS', new Date());
  }
}
