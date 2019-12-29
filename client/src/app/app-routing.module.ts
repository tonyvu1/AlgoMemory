import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { StringReversalComponent } from "./components/algorithms/string-reversal/string-reversal.component";
import { BubbleSortComponent } from "./components/algorithms/bubble-sort/bubble-sort.component";
import { SelectionSortComponent } from "./components/algorithms/selection-sort/selection-sort.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "string-reversal", component: StringReversalComponent },
  { path: "bubble-sort", component: BubbleSortComponent },
  { path: "selection-sort", component: SelectionSortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
