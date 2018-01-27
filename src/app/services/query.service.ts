import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    let githubUrl = `https://api.github.com/search/repositories?q=${query}`;
    return this.http.get(githubUrl)
      .subscribe(res => console.log(res));
  }

}
