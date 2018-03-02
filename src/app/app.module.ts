import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { createTranslateLoader } from './service/create-translate-loader';
import { AngularFireModule } from 'angularfire2';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApi } from './service/fake-api.service';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaApiService } from './service/pizza-api.service';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeFr);

import { environment } from '../environments/environment';
import { BackgroundDirective } from './directives/background.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { CounterComponent } from './counter/counter.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    MenuComponent,
    HomeComponent,
    PizzaSingleComponent,
    BackgroundDirective,
    DropdownToggleDirective,
    CounterComponent,
    RegisterComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'pizzas', component: PizzaListComponent},
      {path: 'pizza/:id', component: PizzaSingleComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent}
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(FakeApi, {passThruUnknownUrl: true}) : HttpClientInMemoryWebApiModule.forRoot(FakeApi, {passThruUnknownUrl: true})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' },
    PizzaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
