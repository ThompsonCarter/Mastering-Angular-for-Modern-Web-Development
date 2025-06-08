import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './patient-registration.component.html'
})
export class PatientRegistrationComponent implements OnInit {
  patientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.patientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(0), Validators.max(130)]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
      })
    });
  }

  get f() { return this.patientForm.controls; }
  get addressGroup() { return this.f['address'] as FormGroup; }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      alert('Patient Registered!');
      this.patientForm.reset();
    } else {
      this.patientForm.markAllAsTouched();
    }
  }
}
