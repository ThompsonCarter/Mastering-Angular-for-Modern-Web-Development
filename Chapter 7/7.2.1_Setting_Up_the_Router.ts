import { RouterModule, Routes } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule.forRoot(routes)],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];