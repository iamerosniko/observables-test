import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private route: ActivatedRoute) 
  {
    route.params.subscribe( params => console.log(params) ); // this will get all parameters given in router
  }

  ngOnInit() {

  }

}
