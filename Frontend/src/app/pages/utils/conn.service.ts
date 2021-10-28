import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Observer } from 'rxjs'
import { ConstUtilsService } from './const-utils.service'

import { NzMessageService } from 'ng-zorro-antd/message'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { DateUtilsService } from './date-utils.service'

@Injectable({
    providedIn: 'root',
})
export class ConnService {
    public _httpHeaders: HttpHeaders = new HttpHeaders()

    constructor(
        public _httpClient: HttpClient,
        public constUtil: ConstUtilsService,
        public dateUtil: DateUtilsService,
        private message: NzMessageService,
        private notification: NzNotificationService
    ) {}

    id: any
    IsPRCUserFlag: boolean
    OutOfficeFlag: boolean

    SystemWaitMessage: string
    FinshMessage: string
    SystemErrorMessage: string

    get(url: string, params?: any, useBlob: boolean = false): Observable<any> {
        let paramsStr = ''
        let hasParam = false
        if (params) {
            let paramCount = 0
            // tslint:disable-next-line:forin
            for (const key in params) {
                hasParam = true
                paramCount += 1
                if (paramCount === 1) {
                    paramsStr += key + '=' + encodeURIComponent(params[key])
                } else {
                    paramsStr += '&' + key + '=' + encodeURIComponent(params[key])
                }
            }
            if (hasParam) {
                paramsStr = '?' + paramsStr
            }
        }
        const accessURL = this.constUtil.getBaseURL() + url + paramsStr
        const observable = this._httpClient.get<any>(accessURL, this.getOption(useBlob))
        this.message.remove()
        this.id = this.message.loading('数据加载中。。。', {
            nzDuration: 0,
        }).messageId
        if (useBlob) {
            observable.subscribe(
                (data) => {
                    const link = document.createElement('a')
                    const blob = new Blob([data.body], {
                        type: 'application/vnd.ms-excel',
                    })
                    let fileName = data.headers.get('Content-Disposition').split(';')[1].split('filename=')[1]
                    const fileNameUnicode = data.headers.get('Content-Disposition').split('filename*=')[1]
                    if (fileNameUnicode) {
                        fileName = decodeURIComponent(fileNameUnicode.split("''")[1])
                    }
                    link.setAttribute('href', window.URL.createObjectURL(blob))
                    link.setAttribute('download', fileName)
                    link.style.visibility = 'hidden'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    this.message.remove()
                    this.message.success('完成！', {
                        nzDuration: 1500,
                    })
                },
                (errres) => {
                    this.message.remove()
                    const reader = new FileReader()
                    reader.readAsText(errres.error)

                    reader.onload = (e: any) => {
                        // var readResult = e.target.result;
                        const obj = JSON.parse(<string>e.target.result)

                        if (obj.Code && obj.MessageEN) {
                            this.notification.create('warning', 'Warning', obj.MessageEN, {
                                nzDuration: 0,
                            })
                        } else {
                            this.notification.create('error', 'Error', '失败！', {
                                nzDuration: 0,
                            })
                        }
                    }
                }
            )
            return Observable.create((x) => true)
        } else {
            // return observable;
            return new Observable((observer: Observer<any>) => {
                observable.subscribe(
                    (successRes: any) => {
                        this.message.remove()
                        this.message.success('完成！', {
                            nzDuration: 2500,
                        })
                        observer.next(successRes)
                        // if (successRes.Code != 0) {
                        //     this.notification.create(
                        //         'success',
                        //         'Message',
                        //         '启动完毕！',
                        //         { nzDuration: 0 }
                        //     );
                        // }
                        observer.complete()
                        return
                    },
                    (errorRes: any) => {
                        this.message.remove()
                        observer.error(errorRes)
                        console.log(errorRes.Code)
                        console.log(errorRes.MessageEN)
                        if (errorRes.error.Code && errorRes.error.MessageEN) {
                            this.notification.create('warning', 'Warning', errorRes.error.MessageCN, {
                                nzDuration: 0,
                            })
                        } else {
                            this.notification.create('error', 'Error', '失败！', {
                                nzDuration: 0,
                            })
                        }
                        observer.complete()
                        return
                    }
                )
            })
        }
    }

    post(url: string, body: any): Observable<any> {
        let accessURL = this.constUtil.getBaseURL() + url
        console.log(this.getDate() + '>>post url access >> ' + accessURL + ' >> body' + JSON.stringify(body))
        let observable = this._httpClient.post(accessURL, body, this.getOption())
        // return observable;
        this.message.remove()
        this.id = this.message.loading(this.SystemWaitMessage, {
            nzDuration: 0,
        }).messageId
        return new Observable((observer: Observer<any>) => {
            observable.subscribe(
                (successRes: any) => {
                    this.message.remove()
                    this.message.success('Finished!', {
                        nzDuration: 800,
                    })
                    observer.next(successRes)
                    if (successRes.Code != 0) {
                        this.notification.create('warning', 'Message', successRes.MessageEN, { nzDuration: 0 })
                    }
                    observer.complete()
                    return
                },
                (errorRes: any) => {
                    this.message.remove()
                    observer.error(errorRes)
                    if (errorRes.error.Code && errorRes.error.MessageEN) {
                        this.notification.create('warning', 'Warning', errorRes.error.MessageEN, { nzDuration: 0 })
                    } else {
                        this.notification.create('error', 'Error', this.SystemErrorMessage, { nzDuration: 0 })
                    }
                    observer.complete()
                    return
                }
            )
        })
    }

    getOption(useBlob: boolean = false): Object {
        if (useBlob) {
            return {
                responseType: 'blob',
                observe: 'response',
            }
        }
    }

    // tslint:disable-next-line:typedef
    getDate() {
        return this.dateUtil.dateFormat('YYYY-mm-dd HH:MM:SS', new Date())
    }
}
