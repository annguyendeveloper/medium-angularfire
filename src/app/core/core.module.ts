import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '@env/environment';
import { AuthGuard } from '@core/services/auth-guard.service';
import { AuthService } from '@core/services/auth.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    /**
     *  Firebase
     */
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [],
  providers: [AuthGuard, AuthService, MessageService]
})
export class CoreAppModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreAppModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
