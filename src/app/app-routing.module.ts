import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { CartComponent } from './cart/cart.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { TrackOrderComponent } from './track-order/track-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recoverPassword',
    component: RecoverPasswordComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'trackOrder',
    component: TrackOrderComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'cardList',
    component: CardListComponent
  },
  {
    path: 'addCard',
    component: AddCardComponent
  },
  {
    path: 'editCard/:id',
    component: EditCardComponent
  },
  {
    path: 'addressList',
    component: AddressListComponent
  },
  {
    path: 'addAddress',
    component: AddAddressComponent
  },
  {
    path: 'editAddress/:id',
    component: EditAddressComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
