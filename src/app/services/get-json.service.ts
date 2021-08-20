import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http: HttpClient) { }

  getNsc(nscName: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get('../assets/nscs/' + nscName + '.json', { headers })
  }
}
