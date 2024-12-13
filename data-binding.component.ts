import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : String = "Angular Full Course";
  
  courseDuration:number = 2
  nameMinLength:number = 5;
  myType : String = "checkbox"
  mydate : String = "date"
  myradio : String = "radio"
  mypassword : String = "password"
  myparagraph:String = "Hello I am Angular paragraph"

  showMessage(){
    alert("show massage");
  }
  change(event:any){
    debugger;
    const name = event.target?.['value'];
    alert("change state =?"+name);
  }
  onMouseEnter(){
    alert("Hello")
  }

  getCourseName(name:String){
    alert("Course "+name)
  }
}
