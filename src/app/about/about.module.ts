import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {AboutService} from './about.service';
import {HttpClientModule} from '@angular/common/http';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
    AboutService,
    ToastrService,
    SlimLoadingBarService
  ]
})
export class AboutModule {
}
