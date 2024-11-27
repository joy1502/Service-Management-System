import { Component } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent {
  
  validateForm: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router){}

    ngOnInit(){
      this.validateForm = this.fb.group({

        email: [null, [Validators.email, Validators.required]],
        name : [null, [Validators.required]],
        lastname : [null, [Validators.required]],
        phone : [null],
        password : [null, [Validators.required]],
        checkpassword : [null, [Validators.required]],
      })
    }

    submitForm(){
      this.authService.registerClient(this.validateForm.value).subscribe(res =>{
        this.notification
        .success(
          'SUCCESS',
           'Signup successful',
           { nzDuration: 6000}
          );

          this.router.navigateByUrl('/login');
      }, error =>{
        this.notification
        .error(
          'ERROR',
           '${error.error}',
          { nzDuration: 6000}
        )

      });
    }

}
