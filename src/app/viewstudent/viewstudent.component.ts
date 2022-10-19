import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }
data= [{"name":"Ansen","rollnumber":"17","adnumber":"1225","college":"marian","department":"ec","bloodgroup":"A+ve","dob":"2022","parentname":"Francis","email":"Ansen@gmal.com","gardian":"francis","addrees":"pazhanilathu"}]
  ngOnInit(): void {
  }

}
