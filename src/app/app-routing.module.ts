import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomeComponent } from './home/home.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
  {path:'', component:WelcomePageComponent,  data: { h3Class: 'welcome-h3' } },
  {path:'home', component:HomeComponent,  data: { h3Class: 'home-h3' } },
  {path:'food-details/:id', component:FoodDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
