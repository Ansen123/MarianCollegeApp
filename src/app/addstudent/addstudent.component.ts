import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name=""
  rollnumber=""
  adnumber=""
  cname=""
  dname=""
  blood=""
  dob=""
  pname=""
  email=""
  gname=""
  gaddress=""
  
  readvalues=()=>{
    let data={
      "name":this.name,
      "rollnumber":this.rollnumber,
      "adnumber":this.adnumber,
      "cname":this.cname,
      "dname":this.dname,
      "blood":this.blood,
      "dob":this.dob,
      "pname":this.pname,
      "email":this.email,
      "gname":this.gname,
      "gaddress":this.gaddress
     
    
    }
    console.log(data)
    alert("Data Added")
  }
  ngOnInit(): void {
  }

}
