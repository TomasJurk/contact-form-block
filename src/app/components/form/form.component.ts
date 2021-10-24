import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'fullName' | 'email' | 'message';
type FormErrors = { [u in UserFields as string]: string };
type ValidationMessages = {
  [u in UserFields as string]: { [key: string]: string };
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  loading: boolean = false;

  contactForm: FormGroup = this.formBuilder.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-zÀ-ž ]*')
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        )
      ],
    ],
    message: ['', [Validators.required, Validators.minLength(50)]],
  });

  formErrors: FormErrors = {
    fullName: '',
    email: '',
    message: '',
  };

  validationMessage: ValidationMessages = {
    fullName: {
      required: 'Name is required.',
      minlength: 'Name must be at least 2 characters long.',
      pattern: 'Name can contain only letters.',
    },
    email: {
      required: 'Email is required.',
      pattern: 'Email must be valid.',
    },
    message: {
      required: 'Message is required.',
      minlength: 'Message must be at least 50 characters long.',
    },
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(() => this.onValueChanged());
    this.onValueChanged();
  }

  onSubmit() {
    this.loading = true;

    // dummy waiting time
    setTimeout(() => {
      this.loading = false;
      this.contactForm.reset();
    }, 2000);
    console.log(this.contactForm.value);
  }

  onValueChanged() {
    if (!this.contactForm) {
      return;
    }

    const form = this.contactForm;

    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessage[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${
                  (messages as { [key: string]: string })[key]
                } \n`;
              }
            }
          }
        }
      }
    }
  }
}
