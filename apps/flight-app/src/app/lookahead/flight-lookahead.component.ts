import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, interval, combineLatest, BehaviorSubject } from 'rxjs';
                                                    // außerhalb der pipe!

import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, switchMap, tap, startWith, map, distinctUntilChanged, filter, shareReplay, delay, mergeMap, concatMap, exhaustMap } 
    from 'rxjs/operators';
    // innerhalb der pipe

import { Flight } from '@flight-workspace/flight-api';

@Component({
    selector: 'flight-lookahead',
    templateUrl: './flight-lookahead.component.html'
})

export class FlightLookaheadComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    control: FormControl;
    flights$: Observable<Flight[]>;

    // loading = false;
    loading$ = new BehaviorSubject<boolean>(false);

    online$: Observable<boolean>;









    ngOnInit() {
        this.control = new FormControl();

        this.online$ 
            = interval(2000).pipe(
                    startWith(0),
                    map(_ => Math.random() < 0.5),  // t, f, t, f
                    map(_ => true),  // t, f, t, f
                    distinctUntilChanged(),
                    shareReplay(1)
            );
        
        const input$ = this.control.valueChanges;

        this.flights$ = combineLatest([input$, this.online$]).pipe(
            filter( ([_, online]) => online),
            map( ([value, _]) => value),
            tap(_ => this.loading$.next(true)),
            exhaustMap(name => this.load(name)),
            tap(_ => this.loading$.next(true))
        );

        // this.flights$ = this
        //                     .control
        //                     .valueChanges
        //                     .pipe(
        //                       debounceTime(300),
        //                       tap(v => this.loading = true),
        //                       switchMap(name => this.load(name)),
        //                       tap(v => this.loading = false)
        //                     );
    }

    load(from: string)  {
        const url = "http://www.angular.at/api/flight";

        const params = new HttpParams()
                            .set('from', from);

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, {params, headers}); //.pipe(delay(7000));

    };


}
