import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  selectedId = 0;
  departmentInfo: any = {}
  constructor(private activateRouter: ActivatedRoute, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(allParam => {
      console.log("allParam:", allParam)
      if (allParam['id']) {
        this.selectedId = allParam['id'];
        this.getSelectedDepartment(this.selectedId);
      }
    })
  }

  getSelectedDepartment(id: any) {
    this.departmentService.getDepartmentById(id).subscribe(result => {
      this.departmentInfo = result;
    })
  }

}
