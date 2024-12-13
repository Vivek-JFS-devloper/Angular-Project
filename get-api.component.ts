import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {
  usrList:any [] = [];
  employeeList:any[] =[];
  constructor(private http:HttpClient){

  }
  getUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.usrList = result;
    });
  }

  getEmployee(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees").subscribe((result:any)=>{
      this.employeeList = result;
    });
  }
}
