import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/ApiType';
import { apiBaseUrl, baseUrl } from '../../environment/environment';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiOptions = {
    showToaster: false,
    showLoader: false,
    useToken: false,
  };
  private isLoggingOut: boolean = false;
  constructor(
    private http: HttpClient,
    public toast: ToastrService,
    private loader: LoaderService,
  ) {}
  baseUrl = baseUrl;
  async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    body?: any,
    params?: any,
    apiOption: Partial<typeof this.apiOptions> = this.apiOptions,
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}/${endpoint}`;
    console.log(url);
    const mergedOption = { ...this.apiOptions, ...apiOption };
    console.log(mergedOption);

    console.log(mergedOption);
    if (mergedOption.showLoader) {
      this.loader.show();
    }
    let token: string | null = '';
    if (mergedOption.useToken) {
      token = localStorage.getItem('TOKEN');
    }
    console.log(token);

    const isFormData = body instanceof FormData;

    const headersObj: any = {
      'Cache-Control': 'no-cache',
    };

    if (!isFormData) {
      headersObj['Content-Type'] = 'application/json';
    }

    if (token) {
      headersObj['Authorization'] = `Bearer ${token}`;
    }
    const headers = new HttpHeaders(headersObj);
    console.log(headers);

    try {
      let response: any;
      switch (method) {
        case 'GET':
          response = await lastValueFrom(this.http.get<ApiResponse<T>>(url, { headers, params }));
          break;
        case 'POST':
          response = await lastValueFrom(this.http.post<ApiResponse<T>>(url, body, { headers }));
          break;
        case 'PUT':
          response = await lastValueFrom(this.http.put<ApiResponse<T>>(url, body, { headers }));
          break;
        case 'DELETE':
          response = await lastValueFrom(this.http.delete<ApiResponse<T>>(url, { headers }));
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
        token: response.token,
      };

      if (mergedOption.showToaster) {
        this.toast.success(resp?.message);
      }
      this.loader.hide();
      return resp;
    } catch (error: any) {
      // console.log(error);
      const fieldErrors = error.error;
      // console.log(fieldErrors);
      // console.log(obj);
      this.toast.error(fieldErrors.message);
      this.loader.hide();
      throw {
        message: fieldErrors.message,
        code: error.status,
        status: false,
      };
    }
  }
}
