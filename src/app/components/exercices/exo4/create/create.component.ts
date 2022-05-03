import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Fan } from '../models/fan.model';
import { FanService } from '../service/fan.service';
import { AgeValidator } from '../validator/age.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  myFormGroup! : FormGroup

  // fan : Fan = {name : 'toto', birthDate : new Date(), favoritesShow : ['machin', 'bidule']}

  constructor(
    private _builder : FormBuilder,
    private _fanService : FanService
  ) { }

  ngOnInit(): void {
    this.initForm()

    // this.myFormGroup.patchValue(this.fan)
    // console.log(this.myFormGroup.value)
  }

  initForm() {
    this.myFormGroup = this._builder.group({
      name : ['', Validators.required],
      birthDate : [null, AgeValidator(13)],
      favoritesShow : this._builder.array([])
    })
    // this.fan.favoritesShow.forEach(show => {
    //   this.getFavorite().push(new FormControl(show))
    // })
  }

  getFavorite() : FormArray {
    return this.myFormGroup.get('favoritesShow') as FormArray
  }

  addFavorite() {
    this.getFavorite().push(new FormControl())
  }

  removeFavorite(index : number) {
    this.getFavorite().removeAt(index)
  }

  submitForm() {
    this._fanService.create(this.myFormGroup.value)
  }

}
