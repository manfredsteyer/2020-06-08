import { Component, OnInit } from '@angular/core';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delayFlight, flightsLoaded } from '../+state/flight-booking.actions';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';
import { selectFlights } from '../+state/flight-booking.selectors';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  flights$: Observable<Flight[]>;

  // "shopping basket" with selected flights
  basket: object = {
    '3': true,
    '5': true
  };

  constructor(
    private flightService: FlightService,
    private store: Store<FlightBookingAppState>
  ) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(selectFlights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService.find(this.from, this.to, this.urgent).subscribe(flights => this.store.dispatch(flightsLoaded({ flights })));
  }

  delay(): void {
    this.store.dispatch(delayFlight());
  }

}
