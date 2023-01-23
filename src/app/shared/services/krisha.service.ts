import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRegionInfo} from "../models/model";

@Injectable({
  providedIn: 'root'
})

export class KrishaService {

  cities = new Map<number, string>([
    [2, 'Almaty'],
    [105, 'Astana'],
    [125, 'Aktobe'],
    [214, 'Atyrau'],
    [224, 'Oskemen'],
    [230, 'Taraz'],
    [234, 'Oral'],
    [239, 'Karagandy'],
    [250, 'Kostanay'],
    [256, 'Kyzylorda'],
    [258, 'Aktau'],
    [262, 'Pavlodar'],
    [267, 'Petropavl'],
    [278, 'Shymkent']
  ]);

  constructor(private http: HttpClient) {
  }

  getAnalytics(): Observable<IRegionInfo[]> {
    return this.http.get<IRegionInfo[]>('/ajax/analytics');
  }

  getCitiesOnEnglishById(id: number): string {
    return this.cities.get(id) || '';
  }

}


