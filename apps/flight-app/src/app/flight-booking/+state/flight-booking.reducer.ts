import { Action, createReducer, on } from "@ngrx/store";
import * as FlightBookingActions from "./flight-booking.actions";
import { Flight } from "@flight-workspace/flight-api";

export const flightBookingFeatureKey = "flightBooking";

export interface State {
  flights: Flight[];
}

export const initialState: State = {
  flights: [],
};

const flightBookingReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return flightBookingReducer(state, action);
}
