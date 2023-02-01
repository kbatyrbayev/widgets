import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {IRegion, IRegionInfo} from "../models/model";

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

  private region$ = new BehaviorSubject<IRegionInfo>({id: 0, avg: 0, data: {x:[], y:[]}, name: ''});
  selectedRegion$ = this.region$.asObservable();

  constructor(private http: HttpClient) {
  }

  getAnalytics(): Observable<IRegionInfo[]> {
    return this.http.get<IRegion>('./assets/krisha.json').pipe(
      map(res => {
        let arr: IRegionInfo[] = [];
        for(let key in res) {
          let item = res[key] as unknown as IRegionInfo;
          arr.push({
            id: +key,
            avg: item.avg,
            data: item.data,
            name: this.cities.get(+key) || ''
          });
        }
        return arr.filter(f => f.name);
      })
    );
  }

  setRegion(region: IRegionInfo | any) {
    this.region$.next(region);
  }

}


