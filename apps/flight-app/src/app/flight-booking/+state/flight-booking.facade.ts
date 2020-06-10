import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { Store } from '@ngrx/store';
import { FlightBookingAppState } from './flight-booking.reducer';
import { flightsLoaded, loadFlights } from './flight-booking.actions';
import { selectFlights } from './flight-booking.selectors';

@Injectable()
export class FlightBookingFacade {

    // -- 4 --
    flights$ = this.store.select(selectFlights);

    constructor(
        private store: Store,
        private flightService: FlightService) {
    }

    search(from: string, to: string, urgent: boolean): void {
       this.store.dispatch(loadFlights({from, to}));
    }

    // -- 3 --
    // flights$ = this.store.select(selectFlights);

    // constructor(
    //     private store: Store,
    //     private flightService: FlightService) {
    // }

    // search(from: string, to: string, urgent: boolean): void {
    //     this.flightService.find(from, to, urgent).subscribe({
    //         next: (flights) => {

    //             this.store.dispatch(flightsLoaded({flights}));

    //         },
    //         error: (err) => {
    //             console.error('err', err);
    //         }
    //     })
    // }

    // // -- 2 --
    // flights$ = this.store.select(a => a.flightBooking.flights);

    // constructor(
    //     private store: Store<FlightBookingAppState>,
    //     private flightService: FlightService) {
    // }

    // search(from: string, to: string, urgent: boolean): void {
    //     this.flightService.find(from, to, urgent).subscribe({
    //         next: (flights) => {

    //             this.store.dispatch(flightsLoaded({flights}));

    //         },
    //         error: (err) => {
    //             console.error('err', err);
    //         }
    //     })
    // }


    // // -- 1 --
    // private flights$$ = new BehaviorSubject<Flight[]>([]);
    // flights$ = this.flights$$.asObservable();

    // constructor(private flightService: FlightService) {
    // }

    // search(from: string, to: string, urgent: boolean): void {
    //     this.flightService.find(from, to, urgent).subscribe({
    //         next: (flights) => {

    //             this.flights$$.next(flights);

    //         },
    //         error: (err) => {
    //             console.error('err', err);
    //         }
    //     })
    // }

}