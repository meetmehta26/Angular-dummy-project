import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    {{errormessage}}
    <h3>
    Department List
  </h3>
  <ul class="items">
    <li *ngFor="let department of department" (click)="onSelect(department)">
      <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
  </ul>
  
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public errormessage =''; 
  public departmentList: any[]=[]; 
  department :any[]= [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private employeeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeeService.getEmployee()
      .subscribe(data =>this.departmentList=data ,
        error => this.errormessage=error
        )

  }
  onSelect(department: { id: any; }){
    this.router.navigate(['/department',department.id])

  }

}
