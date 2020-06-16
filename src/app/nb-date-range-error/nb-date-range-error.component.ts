import {Component} from '@angular/core';
import {TimeRange} from '../models/time-range';

@Component({
  selector: 'nb-date-range-error',
  templateUrl: 'nb-date-range-error.component.html'
})
export class NbDateRangeErrorComponent {

  //#region Properties

  public timeRange: TimeRange;

  //#endregion

  //#region Constructor

  public constructor() {
    this.timeRange = {};
  }

  //#endregion

}
