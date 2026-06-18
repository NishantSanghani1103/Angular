import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environment/environment';
import { productApiResType } from '../../types/productApiType';

export async function apiRequest(http: HttpClient, endpoint: string) {
  return await lastValueFrom(http.get<productApiResType>(`${environment.apiBaseUrl}/${endpoint}`));
}
