import { ConnService } from "../utils/conn.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TestIndexService {
  constructor(private http: HttpClient, public conn: ConnService) {}

  getReportMenu(filterpara: any): Observable<any> {
    const addr = "/Report/GetReportMenu";
    const params = {
      currentUserGID: filterpara.currentUserGID,
    };
    return this.conn.get(addr, params);
  }
}
