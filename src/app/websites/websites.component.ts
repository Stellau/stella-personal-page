import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit, OnDestroy {

  // deal with this later
  // private URL = "https://xkcd.com/";
  // private TIME = 2000;
  // private MAX_XKCD = 2600;
  // private timerId: ReturnType<typeof setInterval> | null = null;
  // xkcdSrc: string = '../../assets/xkcd.png';
  // xkcdAlt: string = 'XKCD Logo';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchXKCD();
    // this.timerId = setInterval(() => {

    // }, this.TIME);
  }

  ngOnDestroy(): void {
    // if (this.timerId) {
    //   clearInterval(this.timerId);
    // }
  }

  private fetchXKCD() {
    // let xkcdNum = this.getRandomInt(this.MAX_XKCD);
    // const URL = this.URL + xkcdNum + '/info.0.json';
    // this.http
    //   .get(URL)
    //   .subscribe(response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error.message);
    //   });
  }

  // generates a number between 1 to max (inclusive)
  // private getRandomInt(max: number): number {
  //   return 1 + Math.floor(Math.random() * max);
  // }

}
