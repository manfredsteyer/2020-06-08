import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromFlightBooking from "./flight-booking.reducer";
import { Flight } from "@flight-workspace/flight-api";

export const selectFlightBookingState = createFeatureSelector<
  fromFlightBooking.State
>(fromFlightBooking.flightBookingFeatureKey);

export const selectFlights = createSelector(
  selectFlightBookingState,
  (state) => state.flights
);

export const selectFlightById = createSelector(
  selectFlights,
  (flights: Flight[], flightId: number) =>
    flights.find((flight) => flight.id === flightId)
);
