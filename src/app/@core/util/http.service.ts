import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(public http: HttpClient) {
  }

  async getPromise<T>(url): Promise<T> {
    return this.http.get<T>(url).toPromise()
  }

  async postPromise<T>(url, data): Promise<T> {
    return this.http.post<T>(url, data, this.httpOptions).toPromise()
  }


  async putPromise<T>(url, data): Promise<T> {
    return this.http.put<T>(url, data).toPromise()
  }

  async deletePromise<T>(url): Promise<T> {
    return this.http.delete<T>(url).toPromise()
  }

}
