import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/ApiType';
import { apiBaseUrl } from '../../environment/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = apiBaseUrl;
  async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    body?: any,
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/${endpoint}`;

    const headersObj: any = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    };
    const headers = new HttpHeaders(headersObj);
    try {
      let response: any;
      switch (method) {
        case 'GET':
          response = await lastValueFrom(this.http.get<ApiResponse<T>>(url,{headers}));
          break;
        case 'POST':
          response = await lastValueFrom(this.http.post<ApiResponse<T>>(url, body,{headers}));
          break;
        case 'PUT':
          response = await lastValueFrom(this.http.put<ApiResponse<T>>(url, body,{headers}));
          break;
        case 'DELETE':
          response = await lastValueFrom(this.http.delete<ApiResponse<T>>(url,{headers}));
          break;
        default:
          throw new Error('Invalid Method');
      }
      let resp: any = {
        message: response.message,
        code: response.code,
        status: response.status,
        data: response.data,
        error: response.error,
      };

      return resp;
    } catch (error) {
      throw error;
    }
  }
}
