import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRegionInfo} from "../models/model";

@Injectable({
  providedIn: 'root'
})

export class KrishaService {
  constructor(private http: HttpClient) {
  }
  getAnalytics(): Observable<IRegionInfo[]> {
    return this.http.get<IRegionInfo[]>('/ajax/analytics');
  }

}


