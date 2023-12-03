import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PropertiesPagaComponent } from './pages/propertiesPaga/propertiesPaga.component';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoComponent,
    PropertiesPagaComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
