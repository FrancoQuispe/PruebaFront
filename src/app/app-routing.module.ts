import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';

const routes:Routes=[
    {path:'appComponent', component:AppComponent },
    {path:'userComponent', component:UserComponent},
    {path:'inicioComponent', component:InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{ }

