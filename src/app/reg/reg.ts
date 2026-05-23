import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Api } from '../Service/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './reg.html',
  styleUrl: './reg.css',
})
export class Reg {

    regForm:any;

    constructor(private fb:FormBuilder,private api:Api,private router:Router){
      this.regForm=this.fb.group({
        username:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9@_]+$')]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      })
    }

    handleSubmit(){
      console.log(this.regForm.value)
      this.api.userSignUpApi(this.regForm.value).subscribe({
        next:(res:any)=>{
          alert("Signup Success")
          this.router.navigateByUrl("/signin")
        },
        error:(err:any)=>{
          alert("Something went wrong!!... Signup failed!!")
          console.log(err)
          if(err?.error){
            alert(err.error)
          }
        }
      })
    }
}
