import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = '';

    constructor(private http:Http){

    }

    public  CURRENT_URL = "http://mdsitools.com/projectworkplace/api/"

    public  GETAPIURL(controller:string):string{
        return this.CURRENT_URL+controller;
    }

    // getAll(){
    //     return this.http.get("http://mdsitools.com/projectworkplace/api/leaders").retry();
    // }

    public getAll(controller:string) {  
        this.apiUrl=this.GETAPIURL(controller);
        return this.http
            .get(this.apiUrl, {headers: this.headers}).retry()
    }

    public getOne(controller:string,id:string){
        this.apiUrl=this.GETAPIURL(controller);
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .get(url, {headers: this.headers}).retry()
    }  

    public postData(controller:string,data:any){
        this.apiUrl=this.GETAPIURL(controller);
        return this.http
          .post(this.apiUrl, JSON.stringify(data), {headers: this.headers}).retry()
         
    }

    public putData(controller:string,data:any,id:string){
        this.apiUrl=this.GETAPIURL(controller);
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .put(url, JSON.stringify(data), {headers: this.headers}).retry()
           
    }

    public deleteData(controller:string,id:string){
        this.apiUrl=this.GETAPIURL(controller);
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers}).retry()
           
    }
}

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    // return this.jsonp
    //             .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
    //             .toPromise()
    //             .then((response) => response.json()[1]);
    // return this.jsonp
    // .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
    // .map((response) => response.json()[1]);
    
    return this.jsonp
    .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
    .map((response) => response.json()[1]);
  }
}
