import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
   return of(['Monthly', 'Annual', 'Lifetime']);
}

/* PutsReq is a site that lets you test posts to Http*/
  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
   return this.http.post('https://putsreq.com/zmZ0OUlEhyXbkbyLTL9X', userSettings);   
   //return of(userSettings);
  }
}
