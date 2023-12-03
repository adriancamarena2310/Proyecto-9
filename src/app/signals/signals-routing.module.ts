import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { PropertiesPagaComponent } from './pages/propertiesPaga/propertiesPaga.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'properties', component: PropertiesPagaComponent },
      { path: '**', redirectTo: 'counter' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
