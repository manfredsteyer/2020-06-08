import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageCardComponent } from './luggage-card/luggage-card.component';
import { LoggerModule } from '@my/logger-lib'

@NgModule({
  imports: [
    CommonModule, 
    LoggerModule.forRoot({ 
      enableDebug: true
    })
  ],
  declarations: [LuggageCardComponent],
  exports: [LuggageCardComponent]
})
export class LuggageUiCardModule {}
