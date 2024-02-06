import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone:true,
   imports:[CommonModule,IonicModule,FormsModule],
  styleUrls: ['home.page.scss'],
})


export class HomePage {
display:string="";
  btns:string[]=["7","8","9","+","4","5","6","*","1","2","3","-","0","=","c","/"];

  constructor() {}

add(value:any){
  

  if( value== "="){
this.calculate()
  }

  if( value== "c"){
    this.clear();
      }

      else{
          this.display+=value;
      }

 

}

  clear(){
    this.display=" ";
  }

  calculate(){
this.display=eval(this.display);
  }

}
