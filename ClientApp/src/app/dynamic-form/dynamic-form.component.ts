import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { FormData } from './../shared/interface/form-data'
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formData: FormData[];
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    const formGroup = {};
    this.formData.forEach(formControl => {
      formGroup[formControl.id] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  submitForm() { }
}
