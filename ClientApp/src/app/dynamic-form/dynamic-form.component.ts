import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { FormData } from './../shared/interface/form-data'
import * as Rx from "rxjs/Rx";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { ApiService } from './../api.service'
import { Question } from './../question'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formData: FormData[];
  form: FormGroup;
  questionsURL = '/api/questions';
  questions: Question[];

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
    const formGroup = {};
    this.getQuestions();
    this.formData.forEach(formControl => {
      formGroup[formControl.id] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  getQuestions() {
    this.apiService.getQuestions().subscribe((data: any) => {
      console.log(data);
      this.questions = data;
    })
  }

  submitForm() { }
}
