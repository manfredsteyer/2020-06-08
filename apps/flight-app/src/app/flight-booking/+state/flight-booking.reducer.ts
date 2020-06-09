import { Action, createReducer, on } from "@ngrx/store";
import * as FlightBookingActions from "./flight-booking.actions";
import { Flight } from "@flight-workspace/flight-api";
import { flightsLoaded } from "./flight-booking.actions";

export const flightBookingFeatureKey = "flightBooking";

export interface State {
  flights: Flight[];
}

export interface FlightBookingAppState {
  flightBooking: State;
}

export const initialState: State = {
  flights: [],
};

const flightBookingReducer = createReducer<State>(
  initialState,
  on(flightsLoaded, (state, action) => ({ ...state, flights: action.flights }))
);

export function reducer(state: State | undefined, action: Action) {
  return flightBookingReducer(state, action);
}
