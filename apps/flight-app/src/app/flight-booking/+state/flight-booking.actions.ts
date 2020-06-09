import { createAction, props } from "@ngrx/store";
import { Flight } from "@flight-workspace/flight-api";

export const flightsLoaded = createAction(
  "[FlightBooking] Flights Loaded",
  props<{ flights: Flight[] }>()
);
