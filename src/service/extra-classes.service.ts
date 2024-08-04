import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PUBLIC_URL } from 'keycloakify/PUBLIC_URL';

@Injectable({
  providedIn: 'root',
})
export class ExtraClassesService {
private jsonUrl = PUBLIC_URL +"/static/media/theme.properties.json";

  constructor(private http: HttpClient) {}

  getClasses(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}

