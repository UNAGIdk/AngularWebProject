import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm!: FormGroup


  constructor(
    private myservice: MyserviceService
  ) { }

  ngOnInit(): void {
    this._initForm()
  }

  private _initForm(){
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      // name: new FormControl('', Validators.required),
      // faculty: new FormControl('', Validators.required),
      // department: new FormControl('', Validators.required),
      // period: new FormControl('', Validators.required),
      // isMagistracy: new FormControl('', Validators.required),
      // directions: new FormControl('', Validators.required),
    })
  }

  private _createDir(dirs: FormData){
    this.myservice.createDirs(dirs).subscribe(()=>{
      window.location.reload();
    })
  }

  onSubmit(myForm: any){
    this._createDir(myForm.value)
  }
}
