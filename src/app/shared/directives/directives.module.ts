import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutofocusInputDirective } from './autofocus.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutofocusInputDirective
  ],
  exports: [
    AutofocusInputDirective
  ]
})
export class DirectivesModule {
}
