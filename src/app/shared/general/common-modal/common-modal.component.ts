import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalType } from '../../../models/modal-type';
import { ModalData } from '../../../models/modal-data';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrl: './common-modal.component.css'
})
export class CommonModalComponent implements OnInit {
  popupForm!: FormGroup;
  popupType: ModalType;
  popupTitle : string;
  popupContent : string;

  constructor(private fb:FormBuilder, public dialogRef : MatDialogRef<CommonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public  data : ModalData
  ){

      this.popupType = data.type;
      this.popupTitle = data.title;
      this.popupContent = data.content || '';
  }

  ngOnInit(): void {
    if(this.popupType == ModalType.FORM) {
      this.popupForm = this.fb.group({
        mobFilter: ['', Validators.required],
        mobSortBy: ['', Validators.required],
        mobSearch: ['', Validators.required]
      })
  }
     
  }

  onNoClick():  void{
    this.dialogRef.close();
  }


  onSubmit(): void {
    if (this.popupForm.valid) {
      console.log(this.popupForm.value)
      this.dialogRef.close();
    }
  }

}
