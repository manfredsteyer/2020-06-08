import { Injectable } from '@angular/core';
import { FlightService } from '@flight-workspace/flight-api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as FlightBookingActions from '../+state/flight-booking.actions';

@Injectable()
export class FlightBookingEffects {
  loadFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FlightBookingActions.loadFlights),
      switchMap((action) => this.flightService.find(action.from, action.to)),
      map((flights) => FlightBookingActions.flightsLoaded({ flights }))
    )
  );

  constructor(
    private actions$: Actions,
    private flightService: FlightService
  ) {
  }
}
