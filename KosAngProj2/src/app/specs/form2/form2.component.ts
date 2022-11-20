import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  myForm!: FormGroup
  dirs!: any

  constructor(
    private myservice: MyserviceService
  ) { }

  ngOnInit(): void {
    this._initForm()
    this.getDirs()
  }

  private _initForm(){
    this.myForm = new FormGroup({
      //name: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      faculty: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      isMagistracy: new FormControl(false, Validators.required),
      directions: new FormControl('', Validators.required),
    })
  }

  private _createSpecs(specs: FormData){
    this.myservice.createSpecs(specs).subscribe(()=>{
      window.location.reload();
    })
  }

  onSubmit(myForm: any){
    this._createSpecs(myForm.value)
    //console.log(myForm.value)
  }

  private getDirs(){
    this.myservice.getDirs().subscribe((res:any) =>{
      this.dirs = res.dirs
    })
  }
}
