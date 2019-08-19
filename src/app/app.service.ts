import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IFramework } from './IFramework';
import { SharepointService } from './sharepoint.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService extends SharepointService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getUserId(account: string): Observable<number> {
    return super.getUserId(account);
  }

  getFrameworks(): Observable<IFramework[]> {
    const query = '$orderby=Choice desc&$expand=People&$select=People/FirstName,Title,Multiline,Choice';
    return this.retrieve<IFramework[]>('Demo', query)
      .pipe(map(response => response.d.results));
  }

  addFramework(framework: IFramework): Observable<IFramework> {
    return this.create<IFramework>('Demo', framework)
    .pipe(map(response => response.d));
  }

}
