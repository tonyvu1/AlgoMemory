import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // Make empty for production http://localhost:5000
  private serverURL = "";

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.serverURL + "/users").map(res => res.json());
  }

}
