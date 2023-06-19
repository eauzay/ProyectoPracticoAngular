import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { catchError, Observable} from 'rxjs';
import { handleError } from '../modules/shared/functions/handle-error-function';


@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private url = environment.apiUrl;
  private endpoint = 'shift';
 
  constructor(private http: HttpClient) { }
  
  getShiftList(): Observable<any[]>{
    
    return this.http.get<any[]>(this.url+this.endpoint)
    .pipe(catchError(handleError));
  }
}
