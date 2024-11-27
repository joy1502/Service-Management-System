import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss']
})
export class AdDetailComponent {

  adId= this.activatedroute.snapshot.params['adId'];
  avatarUrl:any;
  ad:any;

  validateForm!: FormGroup;

  constructor(private clientService: ClientService,
    private activatedroute: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder,){}


    ngOnInit() {
      this.validateForm = this.fb.group({
        bookDate: [null, [Validators.required]]
      })
      this.getAdDetailsByAdId();
    }

    getAdDetailsByAdId(){
      this.clientService.getAdDetailsByAdId(this.adId).subscribe(res=>{
        console.log(res);
        this.avatarUrl = 'data:image/jpeg;base64,' + res.adDTO.returnedImg;
        this.ad = res.adDTO;
    })
  }

  bookService(){
    const bookServiceDTO = {
      bookDate : this.validateForm.get(['bookDate']).value,
      adId : this.adId,
      userId: UserStorageService.getUserId()
    }

    this.clientService.bookService(bookServiceDTO).subscribe(res =>{
      this.notification
      .success(
        'SUCCESS',
        `Request posted succesfully`,
        { nzDuration: 5000}
      );
      this.router.navigateByUrl('/client/bookings');
    })
  }

}
