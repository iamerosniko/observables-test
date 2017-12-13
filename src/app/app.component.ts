import { Component } from '@angular/core';
import * as appService from './api.service';
import { Observable } from 'rxjs/Rx'
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rawdata:any;
  items: Observable<Array<string>>;
  term = new FormControl();

  constructor(private appService:appService.ApiService,private wikipediaService: appService.WikipediaService,
    private router:Router){
    // appService.getAll('Leaders').subscribe(data=>{ this.rawdata=data.json(); console.log('this')} );
    this.sample()
  }

  sample(){
    this.items = this.term.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term => this.wikipediaService.search(term));
  }

  test():any{
    return { name : 'andres' , age:12}
  }

  gotoRoutewithParam(state:boolean){
    this.router.navigate(['/sample',this.test()], {skipLocationChange:state} );
  }
}
