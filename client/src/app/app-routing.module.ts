import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { Recursion1Component } from "./components/algorithms/recursion1/recursion1.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recursion1", component: Recursion1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
