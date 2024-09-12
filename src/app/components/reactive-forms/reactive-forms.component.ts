import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  isLoading: boolean = false;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(5),Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')]],
    });
    //  password pattern =>,'^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')


  }


  onSubmit() {  
    this.isLoading=true;
    setTimeout(()=>{
      this.isLoading=false
      localStorage.setItem('firstname', this.signUpForm.value.firstname);
      localStorage.setItem('lastname', this.signUpForm.value.lastname);
      localStorage.setItem('email', this.signUpForm.value.email);
      localStorage.setItem('mobile', this.signUpForm.value.mobile);
      localStorage.setItem('password', this.signUpForm.value.password);
    },5000)
  }

}
