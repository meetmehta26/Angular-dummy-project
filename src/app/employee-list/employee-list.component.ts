import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2> Employee List component</h2>
`,
    
  
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {
  public employee :any[]= [];
 
  
  constructor(private employeeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {

  }
  

}
