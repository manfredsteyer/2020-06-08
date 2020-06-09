import { Action, createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {

}

export const initialState: State = {

};

const flightBookingReducer = createReducer(
  initialState,

  on(FlightBookingActions.loadFlightBookings, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return flightBookingReducer(state, action);
}
