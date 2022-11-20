import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit, OnDestroy {
  checked: boolean = false;
  data!: any;
  specsData!: any;
  //subscription1!: Subscription;
  //subscription2!: Subscription;
  displayDialog: boolean = false;
  displayDialog2: boolean = false;
  
  constructor(
    private MyService: MyserviceService,
    private authService: AuthService,
    private router: Router
    ){}

  ngOnDestroy(){
    //this.subscription1.unsubscribe();
    //this.subscription2.unsubscribe();
  }

  ngOnInit(){
    // this.subscription = this.MyService.getSpecs().subscribe((res) =>{
    // this.specsData = res;
    // this.data = this.specsData;
    // })
    this.getSpecs()
  }

  private getSpecs(){
    this.MyService.getSpecs().subscribe((res:any) =>{ //this.subscription1 = 
    this.specsData = res.specs;
    this.data = this.specsData;
    })
  }

  // private getDirs(){
  //   this.subscription2 = this.MyService.getDirs().subscribe((res) =>{
    
  //   })
  // }

  onfilter(){
    if(!this.checked){
      this.checked = true;
      this.data = this.specsData.filter((item: any)=>{return item.isMagistracy == true})
    }
    else{
      this.checked = false;
      this.data = this.specsData;
    }
  }

  onlogout(){
    this.authService.logout()
    this.router.navigate(["login"])
  }

  showDialog(){
    this.displayDialog = !this.displayDialog
  }

  showDialog2(){
    this.displayDialog2 = !this.displayDialog2
  }
}