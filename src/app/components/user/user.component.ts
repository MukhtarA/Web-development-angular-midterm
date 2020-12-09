import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartialObserver} from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private http: HttpClient) { }
  users: any;
  ngOnInit(): void {
    const response = this.http.get('https://jsonplaceholder.typicode.com/users');
    response.subscribe((data) => this.users = data);
    response.subscribe((data) => console.log(data));
  }
}
