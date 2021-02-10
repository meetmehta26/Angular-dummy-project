import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You selected department with id = {{departmentId}}</h3>
  `,
  styleUrls: []
})
export class DepartmentDetailComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.departmentId=id;
  }

}
