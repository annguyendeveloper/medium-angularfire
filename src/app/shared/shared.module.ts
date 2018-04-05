import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@shared/pipes/pipes.module';
import { DirectivesModule } from '@shared/directives/directives.module';
import { GrowlModule } from 'primeng/growl';
import { ProgressSpinnerModule } from 'primeng/primeng';
import { ChipsModule } from 'primeng/chips';

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
