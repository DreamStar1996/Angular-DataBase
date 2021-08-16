import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateUtilsService } from './date-utils.service';
import { ConstUtilsService } from './const-utils.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
// import { locale as chinese } from "../utils/i18n/cn";
// import { locale as english } from "../utils/i18n/en";
// import { locale as japanese } from "../utils/i18n/jp";
// import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})
export class ConnService {
  public _httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(
    public _httpClient: HttpClient,
    public dateUtil: DateUtilsService,
    // public store: LocalStorage,
    public constUtil: ConstUtilsService,
    private message: NzMessageService,
    private _matSnackBar: MatSnackBar,
    private notification: NzNotificationService // private translate: TranslateService
  ) {
    // translate.setTranslation(english.lang, english.data, true);
    // translate.setTranslation(chinese.lang, chinese.data, true);
    // translate.setTranslation(japanese.lang, japanese.data, true);
    // store.set("User_Gid", "");
    // store.set("companyType", "");
    // store.set("User_Gid", "5109200363"); //CBD chenlili
    // store.set("User_Gid","5109u11745")//CSMC zzh
    // store.set('companyType', '1') //CSMC
    // store.set("User_Gid", "5201E20031"); //SIE
    // store.set("companyType", "2"); //SIE
  }
  id: any;
  // IsPRCUserFlag: boolean;
  // OutOfficeFlag: boolean;

  // SystemWaitMessage: string;
  // FinshMessage: string;
  // SystemErrorMessage: string;

  getDate() {
    return this.dateUtil.dateFormat('YYYY-mm-dd HH:MM:SS', new Date());
  }
  get(url: string, params?: any, useBlob: boolean = false): Observable<any> {
    let paramsStr: string = '';
    let hasParam: boolean = false;
    if (params) {
      let paramCount = 0;
      for (let key in params) {
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

    // this.translate.onLangChange.subscribe((x) => {
    //     this.SystemWaitMessage = this.translate.instant(
    //         "SystemWaitMessage"
    //     );
    //     this.FinshMessage = this.translate.instant("FinshMessage");
    //     this.SystemErrorMessage = this.translate.instant(
    //         "SystemErrorMessage"
    //     );
    // });
    // this.SystemWaitMessage = this.translate.instant("SystemWaitMessage");
    // this.FinshMessage = this.translate.instant("FinshMessage");
    // this.SystemErrorMessage = this.translate.instant("SystemErrorMessage");

    let accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    console.log(this.getDate() + '>>get url access = ' + accessURL);
    let observable = this._httpClient.get<any>(
      accessURL,
      this.getOption(useBlob)
    );
    this.message.remove();
    // this.id = this.message.loading(this.SystemWaitMessage, {
    //     nzDuration: 0,
    // }).messageId;
    if (useBlob) {
      observable.subscribe(
        (data) => {
          debugger;
          const link = document.createElement('a');
          const blob = new Blob([data.body], {
            type: 'application/vnd.ms-excel',
          });
          console.log(data.headers.get('Content-Disposition').split(';'));
          let fileName = data.headers
            .get('Content-Disposition')
            .split(';')[1]
            .split('filename=')[1];
          const fileNameUnicode = data.headers
            .get('Content-Disposition')
            .split('filename*=')[1];
          if (fileNameUnicode) {
            fileName = decodeURIComponent(fileNameUnicode.split("''")[1]);
          }
          if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
          } else {
            link.setAttribute('href', window.URL.createObjectURL(blob));
            link.setAttribute('download', fileName);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
          this.message.remove();
          // this.message.success(this.FinshMessage, {
          //     nzDuration: 1500,
          // });
        },
        (errres) => {
          debugger;
          this.message.remove();
          var reader = new FileReader();
          reader.readAsText(errres.error);

          reader.onload = (e: any) => {
            // var readResult = e.target.result;
            var obj = JSON.parse(<string>e.target.result);

            if (obj.Code && obj.MessageEN) {
              this.notification.create('warning', 'Warning', obj.MessageEN, {
                nzDuration: 0,
              });
            } else {
              // this.notification.create(
              //     "error",
              //     "Error",
              //     this.SystemErrorMessage,
              //     { nzDuration: 0 }
              // );
            }
          };
        }
      );
      return Observable.create(() => true);
    } else {
      // return observable;
      return new Observable((observer: Observer<any>) => {
        observable.subscribe(
          (successRes: any) => {
            this.message.remove();
            // this.message.success(this.FinshMessage, {
            //     nzDuration: 2500,
            // });
            observer.next(successRes);
            if (successRes.Code != 0) {
              this.notification.create(
                'warning',
                'Message',
                successRes.MessageEN,
                { nzDuration: 0 }
              );
            }
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
                errorRes.error.MessageEN,
                { nzDuration: 0 }
              );
            } else {
              // this.notification.create(
              //     "error",
              //     "Error",
              //     this.SystemErrorMessage,
              //     { nzDuration: 0 }
              // );
            }
            observer.complete();
            return;
          }
        );
      });
    }
  }

  getEntity<T>(url: string, params?: any): Observable<T> {
    let paramsStr: string = '';
    let hasParam: boolean = false;
    if (params) {
      let paramCount = 0;
      for (let key in params) {
        hasParam = true;
        paramCount += 1;
        if (paramCount === 1) {
          paramsStr += key + '=' + params[key];
        } else {
          paramsStr += '&' + key + '=' + params[key];
        }
      }
      if (hasParam) {
        paramsStr = '?' + paramsStr;
      }
    }

    let accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    console.log('get url access = ' + accessURL);
    let observable = this._httpClient.get<T>(accessURL, this.getOption());
    return observable;
  }

  post(url: string, body: any): Observable<any> {
    let accessURL = this.constUtil.getBaseURL() + url;
    console.log(
      this.getDate() +
        '>>post url access >> ' +
        accessURL +
        ' >> body' +
        JSON.stringify(body)
    );
    let observable = this._httpClient.post(accessURL, body, this.getOption());
    // return observable;
    this.message.remove();
    // this.id = this.message.loading(this.SystemWaitMessage, {
    //     nzDuration: 0,
    // }).messageId;
    return new Observable((observer: Observer<any>) => {
      observable.subscribe(
        (successRes: any) => {
          this.message.remove();
          this.message.success('Finished!', {
            nzDuration: 800,
          });
          observer.next(successRes);
          if (successRes.Code != 0) {
            this.notification.create(
              'warning',
              'Message',
              successRes.MessageEN,
              { nzDuration: 0 }
            );
          }
          observer.complete();
          return;
        },
        (errorRes: any) => {
          this.message.remove();
          observer.error(errorRes);
          if (errorRes.error.Code && errorRes.error.MessageEN) {
            this.notification.create(
              'warning',
              'Warning',
              errorRes.error.MessageEN,
              { nzDuration: 0 }
            );
          } else {
            // this.notification.create(
            //     "error",
            //     "Error",
            //     this.SystemErrorMessage,
            //     { nzDuration: 0 }
            // );
          }
          observer.complete();
          return;
        }
      );
    });
  }

  postManually(url: string, body: any): Observable<any> {
    let accessURL = this.constUtil.getBaseURL() + url;
    let observable = this._httpClient.post(accessURL, body, this.getOption());
    // return observable;
    // this.id = this.message.loading(this.SystemWaitMessage, {
    //     nzDuration: 0,
    // }).messageId;
    return new Observable((observer: Observer<any>) => {
      observable.subscribe(
        (successRes: any) => {
          // this.message.remove();
          // this.message.success("Finished!", {
          //     nzDuration: 800,
          // });
          observer.next(successRes);
          if (successRes.Code != 0) {
            this.notification.create(
              'warning',
              'Message',
              successRes.MessageEN,
              { nzDuration: 0 }
            );
          }
          observer.complete();
          return;
        },
        (errorRes: any) => {
          // this.message.remove();
          observer.error(errorRes);
          if (errorRes.error.Code && errorRes.error.MessageEN) {
            this.notification.create(
              'warning',
              'Warning',
              errorRes.error.MessageEN,
              { nzDuration: 0 }
            );
          } else {
            // this.notification.create(
            //     "error",
            //     "Error",
            //     this.SystemErrorMessage,
            //     { nzDuration: 0 }
            // );
          }
          observer.complete();
          return;
        }
      );
    });
  }

  postEntity<T>(url: string, body: any): Observable<T> {
    let accessURL = this.constUtil.getBaseURL() + url;
    console.log(
      this.getDate() +
        '>>post url access >> ' +
        accessURL +
        ' >> body' +
        JSON.stringify(body)
    );
    let observable = this._httpClient.post<T>(
      accessURL,
      body,
      this.getOption()
    );
    return observable;
  }
  put(url: string, body: any): Observable<any> {
    let accessURL = this.constUtil.getBaseURL() + url;
    console.log(
      this.getDate() +
        '>>put url access >> ' +
        accessURL +
        ' >> body' +
        JSON.stringify(body)
    );
    let observable = this._httpClient.put(accessURL, body, this.getOption());
    // return observable;
    this.message.remove();
    // this.id = this.message.loading(this.SystemWaitMessage, {
    //     nzDuration: 0,
    // }).messageId;
    return new Observable((observer: Observer<any>) => {
      observable.subscribe(
        (successRes: any) => {
          observer.next(successRes);
          this.message.remove();
          this.message.success('Finished!', {
            nzDuration: 800,
          });
          if (successRes.Code != 0) {
            this.notification.create(
              'warning',
              'Message',
              successRes.MessageEN,
              { nzDuration: 0 }
            );
          }
          observer.complete();
          return;
        },
        (errorRes: any) => {
          this.message.remove();
          observer.error(errorRes);
          if (errorRes.error.Code && errorRes.error.MessageEN) {
            this.notification.create(
              'warning',
              'Warning',
              errorRes.error.MessageEN,
              { nzDuration: 0 }
            );
          } else {
            // this.notification.create(
            //     "error",
            //     "Error",
            //     this.SystemErrorMessage,
            //     { nzDuration: 0 }
            // );
          }
          observer.complete();
          return;
        }
      );
    });
  }
  patch(url: string, body: any): Observable<any> {
    let accessURL = this.constUtil.getBaseURL() + url;
    console.log(
      this.getDate() +
        '>>patch url access >> ' +
        accessURL +
        ' >> body' +
        JSON.stringify(body)
    );
    let observable = this._httpClient.patch(accessURL, body, this.getOption());
    // return observable;
    this.message.remove();
    // this.id = this.message.loading(this.SystemWaitMessage, {
    //     nzDuration: 0,
    // }).messageId;
    return new Observable((observer: Observer<any>) => {
      observable.subscribe(
        (successRes: any) => {
          this.message.remove();
          this.message.success('Finished!', {
            nzDuration: 800,
          });
          observer.next(successRes);
          if (successRes.Code != 0) {
            this.notification.create(
              'warning',
              'Message',
              successRes.MessageEN,
              { nzDuration: 0 }
            );
          }
          observer.complete();
          return;
        },
        (errorRes: any) => {
          this.message.remove();
          observer.error(errorRes);
          if (errorRes.error.Code && errorRes.error.MessageEN) {
            this.notification.create(
              'warning',
              'Warning',
              errorRes.error.MessageEN,
              { nzDuration: 0 }
            );
          } else {
            // this.notification.create(
            //     "error",
            //     "Error",
            //     this.SystemErrorMessage,
            //     { nzDuration: 0 }
            // );
          }

          observer.complete();
          return;
        }
      );
    });
  }
  patchEntity<T>(url: string, body: any): Observable<T> {
    let accessURL = this.constUtil.getBaseURL() + url;
    console.log(
      'patch url access >> ' + accessURL + ' >> body' + JSON.stringify(body)
    );
    let observable = this._httpClient.patch<T>(
      accessURL,
      body,
      this.getOption()
    );
    return observable;
  }
  upload(url: string, params: any, file: File): Observable<any> {
    let paramsStr: string = '';
    let hasParam: boolean = false;
    if (params) {
      let paramCount = 0;
      for (let key in params) {
        hasParam = true;
        paramCount += 1;
        if (paramCount === 1) {
          paramsStr += key + '=' + params[key];
        } else {
          paramsStr += '&' + key + '=' + params[key];
        }
      }
      if (hasParam) {
        paramsStr = '?' + paramsStr;
      }
    }
    let accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    console.log(this.getDate() + '>>upload url access = ' + accessURL);
    let fd = new FormData();
    fd.append('File', file);
    let options = this.getFileOption();
    let observable = this._httpClient.post(accessURL, fd, options);
    return observable;
  }
  getDownloadfileURL(downloadfileName: string): string {
    let paramsStr: string = '';
    let url = '/api/v1/downloadfile';
    let params: any = {
      fileName: downloadfileName,
      sourcePage: 'common',
    };
    if (params) {
      let paramCount = 0;
      for (let key in params) {
        paramCount += 1;
        if (paramCount === 1) {
          paramsStr += key + '=' + params[key];
        } else {
          paramsStr += '&' + key + '=' + params[key];
        }
      }
      paramsStr = '?' + paramsStr;
    }

    let accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    return accessURL;
  }

  oldFile(url: string, params?: any): void {
    let accessURL =
      this.constUtil.getBaseURL() +
      url +
      '?SourcePage=' +
      params.SourcePage +
      '&FileName=' +
      params.FileName;
    console.log(this.getDate() + '>>get url access = ' + accessURL);
    let observable = this._httpClient.get<any>(accessURL, this.getOption(true));
    observable.subscribe((data) => {
      const blob = new Blob([data.body], { type: data.body.type });
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, params.OldFileName);
      } else {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        const fileName = params.OldFileName;
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  }

  olddownloadFile(url: string, params?: any): void {
    let paramsStr: string = '';
    let hasParam: boolean = false;
    if (params) {
      let paramCount = 0;
      for (let key in params) {
        hasParam = true;
        paramCount += 1;
        if (paramCount === 1) {
          paramsStr += key + '=' + params[key];
        } else {
          paramsStr += '&' + key + '=' + params[key];
        }
      }
      if (hasParam) {
        paramsStr = '?' + paramsStr;
      }
    }

    let accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    console.log(this.getDate() + '>>get url access = ' + accessURL);
    let observable = this._httpClient.get<any>(accessURL, this.getOption(true));
    observable.subscribe((data) => {
      // 下载类型 xls
      //const contentType = 'application/vnd.ms-excel';
      const blob = new Blob([data.body], { type: data.body.type });
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, params.OldFileName);
      } else {
        const url = window.URL.createObjectURL(blob);
        // 打开新窗口方式进行下载
        //window.open(url);
        // 以动态创建a标签进行下载
        const a = document.createElement('a');
        const fileName = params.OldFileName;
        a.href = url;
        // a.download = fileName;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  }

  downloadFile(url: string, params?: any): void {
    let paramsStr: string = '';
    let hasParam: boolean = false;
    if (params) {
      let paramCount = 0;
      for (let key in params) {
        hasParam = true;
        paramCount += 1;
        if (paramCount === 1) {
          paramsStr += key + '=' + params[key];
        } else {
          paramsStr += '&' + key + '=' + params[key];
        }
      }
      if (hasParam) {
        paramsStr = '?' + paramsStr;
      }
    }

    let accessURL = this.constUtil.getBaseURL() + url + paramsStr;
    console.log(this.getDate() + '>>get url access = ' + accessURL);
    let observable = this._httpClient.get<any>(accessURL, this.getOption(true));
    observable.subscribe((data) => {
      // 下载类型 xls
      //const contentType = 'application/vnd.ms-excel';
      const blob = new Blob([data.body], { type: data.body.type });
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, params.FileName);
      } else {
        const url = window.URL.createObjectURL(blob);
        // 打开新窗口方式进行下载
        //window.open(url);
        // 以动态创建a标签进行下载
        const a = document.createElement('a');
        const fileName = params.FileName;
        a.href = url;
        // a.download = fileName;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    });
  }
  /**
   * 创建blob对象，并利用浏览器打开url进行下载
   * @param data 文件流数据
   */
  download(data: any) {
    // 下载类型 xls
    const contentType = 'application/vnd.ms-excel';
    // 下载类型：csv
    const contentType2 = 'text/csv';
    const blob = new Blob([data.body], { type: data.body.type });
    const url = window.URL.createObjectURL(blob);
    // 打开新窗口方式进行下载
    //window.open(url);

    // 以动态创建a标签进行下载
    const a = document.createElement('a');
    const fileName = 'downloadFile';
    a.href = url;
    // a.download = fileName;
    a.download = fileName + '.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  getOption(useBlob: boolean = false): Object {
    if (useBlob) {
      return {
        headers: this.getHeader(),
        responseType: 'blob',
        observe: 'response',
      };
    } else {
      return {
        headers: this.getHeader(),
      };
    }
  }

  getFileOption() {
    return {
      headers: this.getFileHeader(),
    };
  }

  /**
   * 获取表头
   */
  getHeader() {
    return this._httpHeaders.set('User_Gid', this.getGID());
  }
  getFileHeader() {
    let gid = this.getGID();
    const httpFileHeaders: HttpHeaders = new HttpHeaders().set('User_Gid', gid); //.set('Content-Type','multipart/form-data');
    return httpFileHeaders;
  }

  /**
   * 获取当前用户GID
   */
  getGID(): string {
    let User_Gid = '00000';
    return User_Gid;
  }

  //added by Vincent
  //support delete function
  delete(url: string): Observable<any> {
    let accessURL = this.constUtil.getBaseURL() + url;
    let observable = this._httpClient.delete(accessURL, this.getOption());
    // return observable;
    this.message.remove();
    // this.id = this.message.loading(this.SystemWaitMessage, {
    //     nzDuration: 0,
    // }).messageId;
    return new Observable((observer: Observer<any>) => {
      observable.subscribe(
        (successRes: any) => {
          this.message.remove();
          this.message.success('Finished!', {
            nzDuration: 800,
          });
          observer.next(successRes);
          if (successRes.Code != 0) {
            this.notification.create(
              'warning',
              'Message',
              successRes.MessageEN,
              { nzDuration: 0 }
            );
          }
          observer.complete();
          return;
        },
        (errorRes: any) => {
          this.message.remove();
          observer.error(errorRes);
          if (errorRes.error.Code && errorRes.error.MessageEN) {
            this.notification.create(
              'warning',
              'Warning',
              errorRes.error.MessageEN,
              { nzDuration: 0 }
            );
          } else {
            // this.notification.create(
            //     "error",
            //     "Error",
            //     this.SystemErrorMessage,
            //     { nzDuration: 0 }
            // );
          }
          observer.complete();
          return;
        }
      );
    });
  }
}
