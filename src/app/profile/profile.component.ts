import { Component, OnInit } from '@angular/core';
//import { GetapiService  } from '../getapi.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup ({
      "username": new FormControl(null, Validators.required),
      "Name": new FormControl(null, [Validators.required]),
      "Email": new FormControl(null,[Validators.required, Validators.email]),
      "Phone": new FormControl(null,[Validators.required, Validators.minLength(10),]),
      "Password": new FormControl(null,[Validators.required,Validators.minLength(8), ]),
      "ConPassword": new FormControl(null),
      "Gender": new FormControl(null),


    });
  }
  onSubmit( ){
    console.log(this.signupForm);
  }

  
 
}

