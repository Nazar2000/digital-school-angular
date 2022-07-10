import {Injectable} from '@angular/core';
import {ApiService} from "../../api/api";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private api: ApiService
  ) {
  }

  getUsers() {
    return this.api.get('/users');
  }

  createUser() {
    return this.api.post('/users', {name: 'new', email: 'qqqqq'});
  }
}
