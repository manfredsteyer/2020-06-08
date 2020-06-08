import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';

import { DashboardApiModule } from '@flight-workspace/dashboard-api';

@NgModule({
  imports: [
    CommonModule, 
    LuggageDomainModule,
    DashboardApiModule
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent]
})
export class LuggageFeatureCheckinModule {}
