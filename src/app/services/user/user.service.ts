import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformation } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', 0);
    queryParams = queryParams.append('per_page', 15);
    return this.http.get<UserInformation>(url, { params: queryParams });
  }
}
