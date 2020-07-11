import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  signinForm: FormGroup;



  constructor() { }



  ngOnInit(): void {
    this.signinForm = new FormGroup ({
     
      "Email": new FormControl(null,[Validators.required, Validators.email]),
      
      "Password": new FormControl(null,[Validators.required,Validators.minLength(8), ]),
      
      


    });

  }

  onSubmit( ){console.log(this.signinForm);

  }

    

}