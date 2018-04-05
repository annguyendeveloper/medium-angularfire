import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupByMapPipe } from '@shared/pipes/group-by-map.pipe';
import { KeysPipe } from '@shared/pipes/keys.pipe';
import { KeyToValuePipe } from '@shared/pipes/keyToValue.pipe';
import { BytesPipe } from '@shared/pipes/bytes.pipe';
import { SafeHtmlPipe } from '@shared/pipes/safeHtml.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GroupByMapPipe,
    KeysPipe,
    KeyToValuePipe,
    BytesPipe,
    SafeHtmlPipe,
  ],
  exports: [
    GroupByMapPipe,
    KeysPipe,
    KeyToValuePipe,
    BytesPipe,
    SafeHtmlPipe,
  ],
  providers: []
})

export class PipesModule {
}
