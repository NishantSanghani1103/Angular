export interface ApiResponse<T = any> {
  message: string;
  code: number;
  status: boolean;
  data?: T;
  error?: T;
  [key: string]: any;
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.apiBaseUrl;

  async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    body?: any,
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/${endpoint}`;
    try {
      let response: any;
      switch (method) {
        case 'GET':
          return await lastValueFrom(this.http.get<ApiResponse<T>>(url));
        case 'POST':
          response = await lastValueFrom(this.http.post(url, body));
          break;
        case 'PUT':
          response = await lastValueFrom(this.http.put(url, body));
          break;
        case 'DELETE':
          response = await lastValueFrom(this.http.delete(url));
          break;
        default:
          throw new Error('Invalid Method');
      }
      let resp: ApiResponse = {
        message: response.message,
        code: response.code,
        status: response.status,
        data: response.data,
      };

      return resp;
    } catch (error) {
      throw error;
    }
  }
}
