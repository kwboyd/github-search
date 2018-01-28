import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService {

  constructor(private http: HttpClient) { }

  search(query: string, sortBy: string): Observable<any> {
    // get the search results from github
    let githubUrl = `https://api.github.com/search/repositories?q=${query}&sort=${sortBy}`;
    return this.http.get(githubUrl)
  }

}
