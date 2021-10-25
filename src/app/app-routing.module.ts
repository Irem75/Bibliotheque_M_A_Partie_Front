import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
{path : 'accueil', component : AcceuilComponent},
{path:'', redirectTo:'accueil', pathMatch:'full'},
{path : 'librairie', component : DocumentListComponent },
{path : 'utilisateurs', component : UserListComponent },
{path:'**', redirectTo:'accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
