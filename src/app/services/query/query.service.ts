import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService {

  constructor(private http: HttpClient) { }

  search(query: string, sortBy: string): Observable<any> {
    // get the search results from github
    const githubUrl = `https://api.github.com/search/repositories?q=${query}&sort=${sortBy}&per_page=15`;
    // need to observe the response to access the next and previous links from the returned headers
    return this.http.get(githubUrl, {observe: 'response'});
  }

  changePage(url: string): Observable<any> {
    // go to next or previous page
    return this.http.get(url, {observe: 'response'});
  }

}
