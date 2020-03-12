import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {path:'profile',component:EditProfileComponent},
  {path:'**',component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
