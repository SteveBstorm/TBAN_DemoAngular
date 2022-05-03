import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fan } from '../models/fan.model';
import { FanService } from '../service/fan.service';
import { AgeValidator } from '../validator/age.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  myFormGroup! : FormGroup
  currentFan! : Fan

  constructor(
    private _builder : FormBuilder,
    private _fanService : FanService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentFan = this._activatedRoute.snapshot.data['monFan']
    this.initForm()

  }

  initForm() {
    this.myFormGroup = this._builder.group({
      name : [this.currentFan.name, Validators.required],
      birthDate : [this.currentFan.birthDate, AgeValidator(13)],
      favoritesShow : this._builder.array([])
    })
    this.currentFan.favoritesShow.forEach(el => {
      this.getFavorite().push(new FormControl(el))
    })
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
    this._fanService.update(this._activatedRoute.snapshot.params['id'], this.myFormGroup.value)
  }

}
