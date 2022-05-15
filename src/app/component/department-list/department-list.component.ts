import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }

  listOfDepartments: any = []

  ngOnInit(): void {

    this.loadDepartment();

  }

  loadDepartment() {
    console.log("show to department")
    this.departmentService.getDepartmentList().subscribe(result => {
      console.log("department:", result)
      this.listOfDepartments = result;
    })
  }
  insertedMessage(message) {
    console.log("Message:", message)
    this.loadDepartment();
  }

}
