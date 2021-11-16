import { Injectable } from '@angular/core';

const baseUrl = 'https://localhost:5001';

@Injectable({
    providedIn: 'root',
})
export class ConstUtilsService {
    constructor() { }

    getBaseURL(): string {
        return baseUrl
    }
}
