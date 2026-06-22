import { Injectable } from '@angular/core';
import { ApiResponse } from '../types/apiResponse';
import { environment } from '../../environment/environment';
import { LoaderService } from './loader.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { last, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiOptions = {
    showToaster: false,
    showLoader: false,
    useToken: false,
  };
  constructor(
    private loader: LoaderService,
    private http: HttpClient,
  ) {}
  async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endPoint: string,
    body?: any,
    params?: any,
    apiOption: Partial<typeof this.apiOptions> = this.apiOptions,
  ): Promise<ApiResponse<T>> {
    const apiUrl = `${environment.apiBaseUrl}/${endPoint}`;

    const mergedOption = { ...this.apiOptions, ...apiOption };
    console.log(mergedOption);
    
    const isFormData = body instanceof FormData;
    if (mergedOption.showLoader) {

      
      this.loader.show();
    }
    const headersObj: any = {
      'Cache-Control': 'no-cache',
    };
    if (!isFormData) {
      headersObj['Content-Type'] = 'application/json';
    }
    const headers = new HttpHeaders(headersObj);
    let response: any;
    try {
      switch (method) {
        case 'GET':
          response = await lastValueFrom(
            this.http.get<ApiResponse<T>>(apiUrl, { headers, params }),
          );
          break;
        case 'POST':
          response = await lastValueFrom(this.http.post(apiUrl, body, { headers }));
          break;
        case 'PUT':
          response = await lastValueFrom(this.http.put(apiUrl, body, { headers }));
          break;
        case 'DELETE':
          response = await lastValueFrom(this.http.delete(apiUrl, { headers }));
          break;
        default:
          throw new Error('Invalid Method');
      }

      let resp: any = {
        message: response.message,
        code: response.code,
        status: response.status,
        data: response,
        error: response.error,
        token: response.token,
        count: response.count,
      };
      return resp;
    } catch (error) {
      throw error;
    
    }
    finally {
      if (mergedOption.showLoader) {
        this.loader.hide();
      }
    }
  }
}
