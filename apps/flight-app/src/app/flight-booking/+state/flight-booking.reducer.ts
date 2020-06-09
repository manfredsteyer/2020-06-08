import { Flight } from '@flight-workspace/flight-api';
import { Action, createReducer, on } from '@ngrx/store';
import { delayFlight, flightsLoaded } from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Readonly<Flight>[];
}

export interface FlightBookingAppState {
  flightBooking: State;
}

export const initialState: State = {
  flights: []
};

const flightBookingReducer = createReducer<State>(
  initialState,
  on(flightsLoaded, (state, action) => ({ ...state, flights: action.flights })),
  on(delayFlight, (state) => {
    const ONE_MINUTE = 1000 * 60;
    const firstFlight = { ...state.flights[0] };
    const oldDate = new Date(firstFlight.date);
    oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE);
    firstFlight.date = oldDate.toISOString();
    return { ...state, flights: [firstFlight, ...state.flights.slice(1)] };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return flightBookingReducer(state, action);
}
