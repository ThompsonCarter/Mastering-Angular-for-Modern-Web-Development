@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <label>Name:</label>
    <input [(ngModel)]="name" />
    <p>You entered: {{ name }}</p>
  \`
})
export class NameEditorComponent {
  name = '';
}