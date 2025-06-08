import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  @ViewChild('contactForm') form!: NgForm;

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Form Submitted Successfully!');
      form.resetForm();
    }
  }
}
