import { createAction, props } from "@ngrx/store";
import { Flight } from "@flight-workspace/flight-api";

export const loadFlights = createAction(
  "[FlightBooking] Load Flights",
  props<{ from: string; to: string }>()
);

export const flightsLoaded = createAction(
  "[FlightBooking] Flights Loaded",
  props<{ flights: Flight[] }>()
);

export const delayFlight = createAction("[FlightBooking] Delay Flight");
