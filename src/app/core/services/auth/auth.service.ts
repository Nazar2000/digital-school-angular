import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = this.api.URL;
  public clientKey: { key: string; language: string; } | undefined;

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) {
  }

  getToken() {
    let data;
    if (this.clientKey) {
      if (this.clientKey.language != null) {
        data = {
          key: this.clientKey.key,
          language_name: this.clientKey.language
        };
      } else {
        data = {key: this.clientKey.key};
      }
    }
    return this.http.post(`${this.url}/iframe_api/generate_token/`, data);
  }

  /**
   * Stores tokens
   * @param token token response from signin response
   */
  public storeTokens(token: any) {
    sessionStorage.setItem('token', token.token);
  }
}
