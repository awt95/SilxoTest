import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Question } from './question'
import { Assessment } from './assessment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  questionsURL: string = '/api/questions'
  assessmentsURL: string = '/api/assessments'

  constructor(private httpClient: HttpClient) { }
  getQuestions() {
    return this.httpClient.get(this.questionsURL).
      pipe(
        map((data: Question[]) => {
          return data;
        }), catchError(error => {
          return throwError('Error occurred');
        })
      )
  }

  getAssessment(id) {

    return this.httpClient.get(this.assessmentsURL + '/' + id)
      .pipe(
        map((data: Assessment) => {
          return data;
        }), catchError(error => {
          return throwError('Error occurred');
        })
      )
  }


  postForm() {

  }
}
