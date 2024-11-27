import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CompanyService } from './../../services/company.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss']
})
export class AllAdsComponent {

  ads:any;

  constructor(private CompanyService: CompanyService,
    private notification: NzNotificationService,){}

  ngOnInit() {
    this.getAllAdsByUserId();
  }

  getAllAdsByUserId(){
    this.CompanyService.getAllAdsByUserId().subscribe(res =>{
      this.ads = res;
    })
  }

  updateImg(img){
    return 'data:image/jpeg;base64,' + img;
  }

  deleteAd(adId:any){
    this.CompanyService.deleteAd(adId).subscribe(res =>{
      this.notification
      .success(
        'SUCCESS',
        `Ad Deleted Successfully`,
        { nzDuration: 5000}
      );
      this.getAllAdsByUserId();

    })
  }

}
