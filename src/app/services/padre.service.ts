import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Padre } from '../models/padre';

@Injectable({
  providedIn: 'root'
})
export class PadreService {
urlEndPoint = "http://127.0.0.1:8000/api/padre"
headers = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getPadres(): Observable<Padre[]>{
    return this.httpClient.get<Padre[]>(this.urlEndPoint);
  }

  savePadres(padre: Padre): Observable<Padre>{
    return this.httpClient.post<Padre>(this.urlEndPoint, padre, {headers: this.headers})
  }
}
