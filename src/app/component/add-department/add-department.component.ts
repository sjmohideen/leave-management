import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


import { DepartmentService } from '../../services/department.service';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  deptForm: FormGroup;
  form: FormGroup;
  submitted = false;
  @Output() insertedChanges = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {

    this.form = this.fb.group(
      {
        name: ['', Validators.required],

        description: ['', Validators.required]

      }
    );


  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.departmentService.createDepartment(this.form.value).subscribe(result => {
        console.log("result:", result)

        this.insertedChanges.emit("inserted");
      })
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


}
