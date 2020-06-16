import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NbDateRangeErrorComponent} from './nb-date-range-error.component';
import {NbDatepickerModule, NbInputModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: NbDateRangeErrorComponent
  }
]

@NgModule({
  imports: [
    NbInputModule,
    NbDatepickerModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule
  ],
  declarations: [
    NbDateRangeErrorComponent
  ],
  exports: [
    RouterModule
  ]
})
export class NbDateRangeErrorRoutingModule {

}
