import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbountComponent } from './abount/abount.component';


//โหลดหน้า Home และ About เข้ามา


const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path:'abount',
  component: AbountComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }