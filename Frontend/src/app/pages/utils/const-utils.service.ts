import { Injectable } from '@angular/core';

const baseUrl = 'https://raise-api-biz-develop.chinacloudsites.cn/';

@Injectable({
    providedIn: 'root',
})
export class ConstUtilsService {
    constructor() { }

    getBaseURL(): string {
        return baseUrl
    }
}
