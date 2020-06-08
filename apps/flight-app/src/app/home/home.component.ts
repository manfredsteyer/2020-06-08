import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  expertMode = false;
  needsLogin = false;
  _userName = '';

  get userName(): string {
    return this._userName;
  }

  constructor(private route: ActivatedRoute) {
  }

  changed($event): void {
    console.debug('$event.detail ', $event.target.detail);

    this.expertMode = $event.detail
  }

  ngOnInit() {
    this.needsLogin = !!this.route.snapshot.params['needsLogin'];
  }

  login(): void {
    this._userName = 'Login will be implemented in another exercise!'
  }

  logout(): void {
    this._userName = '';
  }


}
