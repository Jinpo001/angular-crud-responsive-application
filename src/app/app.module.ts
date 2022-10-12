import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponentService } from './@core/services/register-component.service';
import { CustomDropdownComponent } from './shared/dynamic-components/custom-dropdown/custom-dropdown.component';
import { CustomInputComponent } from './shared/dynamic-components/custom-input/custom-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ExceptionInterceptorInterceptor } from 'src/app/@core/interceptors/exception-interceptor.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private registerComponents: RegisterComponentService) {
    this.registerComponents.addComponent('customInput', CustomInputComponent);
    this.registerComponents.addComponent('customDropdown', CustomDropdownComponent);
  }
}
