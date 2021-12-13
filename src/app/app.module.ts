import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginHeadderComponent } from './login-headder/login-headder.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeTopMenueComponent } from './home-top-menue/home-top-menue.component';
import { CartComponent } from './cart/cart.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    LoginHeadderComponent,
    RecoverPasswordComponent,
    HomePageComponent,
    HomeTopMenueComponent,
    CartComponent,
    TrackOrderComponent,
    ProfileComponent,
    SettingsComponent,
    AddressListComponent,
    CardListComponent,
    AddAddressComponent,
    EditAddressComponent,
    AddCardComponent,
    EditCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
