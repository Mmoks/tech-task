import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { APIResponse, User } from '../../shared';
import { Cacheable } from 'ngx-cacheable';

const cacheBuster$ = new Subject<void>();

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  @Cacheable({
    cacheBusterObserver: cacheBuster$,
  })
  getUsers(page: number): Observable<APIResponse<User[]>> {
    return this.http.get(
      `https://reqres.in/api/users?page=${page}`
    ) as Observable<APIResponse<User[]>>;
  }

  @Cacheable({
    cacheBusterObserver: cacheBuster$,
  })
  getUser(id: number): Observable<APIResponse<User>> {
    return this.http.get(`https://reqres.in/api/users/${id}`) as Observable<
      APIResponse<User>
    >;
  }

  constructor(private http: HttpClient) {}
}
