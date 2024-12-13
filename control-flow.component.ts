import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
  
})
export class ControlFlowComponent {
  isDiv1Visible : boolean = true;
  div2Visible : String = "No";
  fullDayVisible:String = "";
  cityList :String[] = ['Pune','Pnjab','Noida','Gujrat'];
  showHideDive1(isShow:boolean){
    this.isDiv1Visible = isShow;
  }
}
