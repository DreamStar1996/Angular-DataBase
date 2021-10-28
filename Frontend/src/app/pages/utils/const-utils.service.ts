import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

const baseUrl = 'https://raise-api-biz-develop.chinacloudsites.cn/';

@Injectable({
    providedIn: 'root',
})
export class ConstUtilsService {
    constructor() { }

    getBaseURL(): string {
        return environment.baseAPIURL_Biz
    }
}
