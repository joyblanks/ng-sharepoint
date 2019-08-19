import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { AppService } from './app.service';
import { IFramework } from './IFramework';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-sharepoint';
  frameworks$: Observable<IFramework[]>;

  @ViewChild('add', { static: false }) add;
  add$: Observable<IFramework>;

  constructor(private service: AppService) { }

  ngAfterViewInit() {
    this.frameworks$ = this.service.getFrameworks();
    this.add$ = fromEvent(this.add.nativeElement, 'click')
      .pipe(
        switchMap(() => this.service.getLoggedInUser()),
        switchMap(user => this.service.getUserId(user.AccountName)),
        switchMap(userId => this.service.addFramework({
          Title: 'New React',
          Choice: 'React',
          Multiline: 'version Beta',
          PeopleId: userId
        } as IFramework)),
        tap((newItem) => {
          console.log(newItem);
          this.frameworks$ = this.service.getFrameworks();
        })
      );

  }
}
