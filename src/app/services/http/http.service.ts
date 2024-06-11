import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly baseUrl: string = 'http://localhost:5155/api';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  constructor(private http: HttpClient) {}

  // Método genérico GET
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, { headers: this.headers, params });
  }

  // Método genérico POST
  post<T, D>(endpoint: string, data: D, params?: HttpParams): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, data, { headers: this.headers, params });
  }

  // Método genérico PUT
  put<T, D>(endpoint: string, data: D, params?: HttpParams): Observable<T> {
    console.log(endpoint)
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, data, { headers: this.headers, params });
  }

  // Método genérico DELETE
  delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`, { headers: this.headers, params });
  }
}
