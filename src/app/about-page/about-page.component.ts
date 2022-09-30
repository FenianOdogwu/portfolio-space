import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';


interface AppState {
  message: string;
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  message$: Observable<string>;

  constructor (private store: Store<AppState>) {
  this.message$ = this.store.select('message'); // we're observing our appState here
}
  ngOnInit(): void {
  }



  germanMessage() { //sending actions to the reducer function to change the data
    this.store.dispatch({type: 'GERMAN'});
  }

  englishMessage() {
    this.store.dispatch({type: 'ENGLISH'});
  }

}
