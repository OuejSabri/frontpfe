import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  addForm:FormGroup
  constructor(private sAuth:AuthService){
    this.addForm=new FormGroup({
      email :new FormControl('',[Validators.required]),
      password :new FormControl('', [Validators.required]),
      })
  }
  ngOnInit(): void {
  };

  login(){
    let data=this.addForm.getRawValue()
    if(data.email === '' || data.password === ''){
      Swal.fire({
        title: 'Erreur!',
        text: 'Veuillez remplir tous les champs',
        icon: 'error',
      });
      return;
    }

    console.log(data)
    return this.sAuth.login(data)
  };

 

}
