import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h3>
    Department List
  </h3>
  <ul class="items">
    <li (click)="onSelect(departments)" [class.selected]="isSelected(departments)"  *ngFor="let departments of department" >
      <span class="badge">{{departments.id}}</span> {{departments.name}}
    </li>
  </ul>
  
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public isselected ; 
  public departmentList: any[]=[]; 
  department :any[]= [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private employeeeService : EmployeeService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
        this.route.paramMap.subscribe((params:ParamMap) =>{
          let id = parseInt(params.get('id')!);
          this.isselected=id;
  
      })

  }
  onSelect(department: { id: any; }){
    this.router.navigate([department.id],{relativeTo:this.route});

  }
  isSelected(departments){
    return departments.id ==this.isselected;
  }

}
