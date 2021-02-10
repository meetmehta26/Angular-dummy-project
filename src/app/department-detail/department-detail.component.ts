import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You selected department with id = {{departmentId}}</h3>
  <nav>
  <a (click) = onPrevious()><span class="badge">Previous</span></a>
  &nbsp;
  <a (click) = onNext()><span class="badge">Next</span></a>
  </nav>
  `,
  styleUrls: []
})
export class DepartmentDetailComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap) =>{
        let id = parseInt(params.get('id')!);
        this.departmentId=id;

    })
  }
  onPrevious(){
    let previous : number = this.departmentId-1;
    this.router.navigate(['/department',previous]);

  }
  onNext(){
    let next : number = this.departmentId+1;
    this.router.navigate(['/department',next]);
  }

}
