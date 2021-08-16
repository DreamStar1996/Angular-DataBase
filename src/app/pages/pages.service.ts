import { Injectable } from '@angular/core';
import { ConnService } from './utils/conn.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private http: HttpClient, public conn: ConnService) {}

  queryHotel(filterpara: any): Observable<any> {
    const addr = '/Report/QueryTVHotel';
    const params = {
      currentUserGID: filterpara.currentUserGID,
      legalEntityCode: filterpara.legalEntityCode,
      CostCenterCode: filterpara.CostCenterCode,
      isDesc: filterpara.isDesc,
      order: filterpara.order || '',
    };
    return this.conn.get(addr, params);
  }

  exportTVHotel(filterpara: any): Observable<any> {
    const addr = '/Report/ExportTVHotel';
    const params = {
      currentUserGID: filterpara.currentUserGID,
      CostCenterCode: filterpara.CostCenterCode,
      legalEntityCode: filterpara.legalEntityCode,
    };
    return this.conn.get(addr, params, true);
  }
}
