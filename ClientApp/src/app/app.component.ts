import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MockData } from './shared/data/mock-data'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Silxo Assessment';
  data = MockData;

}
