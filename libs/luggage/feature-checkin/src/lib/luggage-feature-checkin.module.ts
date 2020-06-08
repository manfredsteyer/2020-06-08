import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';

import { LuggageUiCardModule  } from '@flight-workspace/luggage/ui-card';

// import { DashboardApiModule } from '@flight-workspace/dashboard-api';

@NgModule({
  imports: [
    CommonModule, 
    LuggageDomainModule,
    LuggageUiCardModule,
    // DashboardApiModule
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent]
})
export class LuggageFeatureCheckinModule {}
