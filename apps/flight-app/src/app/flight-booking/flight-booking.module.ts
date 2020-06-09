import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { FlightBookingEffects } from './+state/flight-booking.effects';
import * as fromFlightBooking from './+state/flight-booking.reducer';
import { FlightBookingComponent } from './flight-booking.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forChild(),
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    StoreModule.forFeature(fromFlightBooking.flightBookingFeatureKey, fromFlightBooking.reducer),
    EffectsModule.forFeature([FlightBookingEffects])
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent
  ],
  providers: [],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule {
}
