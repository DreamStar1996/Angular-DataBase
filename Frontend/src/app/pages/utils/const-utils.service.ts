import { Injectable } from '@angular/core';

const baseUrl = 'swagger API 地址';

@Injectable({
    providedIn: 'root',
})
export class ConstUtilsService {
    constructor() { }

    getBaseURL(): string {
        return baseUrl
    }
}
