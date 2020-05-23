import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Question } from './question'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url: string = '/api/questions'
  constructor(private httpClient: HttpClient) { }
  getQuestions() {
    return this.httpClient.get(this.url).
      pipe(
        map((data: Question[]) => {
          return data;
        }), catchError(error => {
          return throwError('Error occurred');
        })
      )
  }
}
