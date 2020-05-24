import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { ApiService } from './../api.service'
import { Question } from './../question'
import { Assessment } from './../assessment'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  assessmentForm: FormGroup;
  formArray: FormArray;
  formReady: boolean = false; // allows form to wait until FormGroup is completely loaded
  questionsURL = '/api/questions';
  questions: Question[];

  constructor(private http: HttpClient, private apiService: ApiService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.apiService.getQuestions().subscribe(
      (data) => {
        console.log(data);
        this.questions = data;
      },
      error => console.log('Error: ', error),
      () => {
        console.log('Complete');
        // Build form
        let group: any = {};
        this.questions.forEach(question =>
          group[question.name] = new FormControl('')
        );
        this.assessmentForm = new FormGroup(group);
        console.log(this.assessmentForm);
        this.formReady = true;
      }
    );

  }

  submitForm(form) {
    console.log(form);
    var assessment = new Assessment();
    assessment.answers = JSON.stringify(form);
    console.log(assessment);

    // TODO: move to api service
    return this.http.post('/api/assessments', assessment)
      .subscribe(data =>
        console.log(data)
      );
  }
}
