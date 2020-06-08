import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'flight-workspace-luggage-card',
  templateUrl: './luggage-card.component.html',
  styleUrls: ['./luggage-card.component.css']
})
export class LuggageCardComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
  }

}
