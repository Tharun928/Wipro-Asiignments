import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-feedback-form',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.scss'
})
export class FeedbackForm implements OnInit{
  form: any;
  constructor(private fb: FormBuilder, private snack: MatSnackBar) {}

  ngOnInit(): void {
  this.form =this.fb.group({
    name: ['',[Validators.required, Validators.minLength(2)]],
    email: ['',[Validators.required, Validators.email]],
    subject: ['',[Validators.required, Validators.maxLength(40)]],
    comments: ['',[Validators.required, Validators.maxLength(350)]],
  });
}

  get f() { return this.form.controls; }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.snack.open('Thank you! We will get back to you shortly.', 'Close', {
      duration: 3000,
    });

    this.form.reset();
  }

}
