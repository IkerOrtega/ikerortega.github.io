import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private apiUrl = '/assets/mocks/';
  private repos = 'repos.json';
  private readme_prefix = '/repos/ikerortega/';
  private readme_suffix = '/readme/';

  constructor(    
    private http: HttpClient
    ) {
   }

  public getRepos(): Observable<Project[]> {

    return this.http.get<Project[]>(this.apiUrl + this.repos);
    

   }

   public getReadme(repo: string): Observable<any> {
     return this.http.get(this.apiUrl + this.readme_prefix + repo + this.readme_suffix);
   }
}
