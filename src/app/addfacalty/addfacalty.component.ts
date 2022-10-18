import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfacalty',
  templateUrl: './addfacalty.component.html',
  styleUrls: ['./addfacalty.component.css']
})
export class AddfacaltyComponent implements OnInit {

  constructor() { }
name=""
dname=""
desname=""
dob=""
education=""
address=""
mob=""
joing=""
readvalues(){
  let data={
    "name":this.name,
    "dname":this.dname,
    "desname":this.desname,
    "dob":this.dob,
    "education":this.education,
    "address":this.address,
    "mob":this.mob,
    "joing":this.joing
  
  }
  console.log(data)
  alert("Data Added")
}

  ngOnInit(): void {
  }

}
