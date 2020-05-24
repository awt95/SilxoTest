import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Assessment } from '../assessment';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  assessment: Assessment;
  id: string;
  formReady: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getAssessment(this.id).subscribe(
      (data) => {
        console.log(data);
        this.assessment = data;
      },
      error => console.log('Error: ', error),
      () => {
        console.log('Complete');
        this.formReady = true;
      }
    );
  }

}
