import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GrowlModule } from 'primeng/growl';
import { ProgressSpinnerModule } from 'primeng/primeng';
import { ChipsModule } from 'primeng/chips';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GrowlModule,
    ProgressSpinnerModule,
    ChipsModule,

    // Pipe
    PipesModule,

    // Directives
    DirectivesModule,

    // Components
  ]
})
export class SharedModule {}
