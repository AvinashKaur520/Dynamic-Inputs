import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputsam',
  templateUrl: './inputsam.component.html',
  styleUrls: ['./inputsam.component.css']
})
export class InputsamComponent implements OnInit 
{
  inputNum : any;
  enteredValues : any;
  closed : boolean = false;
  public arr : any = [];
  public arrOfInputs : any = [];

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    let inc = 0;
    this.arr = [];
    for(let i=0;i<this.inputNum;i++)
    {
      inc=inc+1;
      this.arr.push({num:inc,text:''});
    }
  }

  inputclick()
  {
    if(this.closed == false)
    {
      if(this.arr.length < this.inputNum)
      {
        this.arr.push({num:'',text:''})
      }
    }
    for(let i=0;i<this.arr.length;i++)
    {
      let val = this.arr[i].text;
      this.arrOfInputs.push(val);
    }
    this.enteredValues = this.arrOfInputs.join();
  }

  cancel(index)
  {
    this.closed = true;
    this.arr.splice(index,1);
  }

}
