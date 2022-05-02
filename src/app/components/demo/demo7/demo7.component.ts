import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  myFormGroup! : FormGroup

  liste : Art[] = []

  constructor(
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myFormGroup = this._builder.group({
      nom : ['', [Validators.minLength(4), Validators.required]],
      quantite : [1],
      prix : [null, [Validators.required, Validators.max(20)]],
      categorie : this._builder.array([])
    })
  }

  getCategory() : FormArray {
    return this.myFormGroup.get('categorie') as FormArray
  }

  ajoutCategorie() {
    this.getCategory().push(new FormControl('', Validators.required))
  }

  validateForm() {
    console.log(this.myFormGroup.value['nom'])

    this.liste.push(
      {
        label : this.myFormGroup.value['nom'],
        nombre : this.myFormGroup.value['quantite'],
        prix : this.myFormGroup.value['prix'],
        category : this.myFormGroup.value['categorie']

      }
    )
    console.log(this.liste)
  }

}


export interface Art {
  label : string
  nombre : number
  prix : number
  category : string[]
}
