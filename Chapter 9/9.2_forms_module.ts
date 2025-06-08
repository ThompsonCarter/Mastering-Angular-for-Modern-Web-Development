import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
