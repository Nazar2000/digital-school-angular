import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../api/api';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = this.api.URL;

    constructor(
        private http: HttpClient,
        private api: ApiService
    ) {
    }

    logIn(data: { email: string, password: string }) {
      return this.http.post(`${this.url}login`, data);
    }

    /**
     * Stores tokens
     * @param token token response from signin response
     */
    public storeTokens(token: string) {
        localStorage.setItem('token', token);
    }
}
