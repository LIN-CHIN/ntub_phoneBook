import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data;
  constructor(
    private _http: HttpClient

  ) {}
  getData(url: string) {
    return this._http.get(url);

  }
}
