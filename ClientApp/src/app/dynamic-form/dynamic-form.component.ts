import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { ApiService } from './../api.service'
import { Question } from './../question'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  questionsURL = '/api/questions';
  questions: Question[];

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.apiService.getQuestions().subscribe((data: any) => {
      console.log(data);
      this.questions = data;
    })
  }

  submitForm() { }
}
