import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {
  formdk =[];
  user={}
  selectStudents:User;
  constructor() { }

  ngOnInit() {
    this.addUser();
    console.log(this.formdk[0]);
  }
  addUser()
  {
    this.formdk=JSON.parse(localStorage.getItem('dangnhap'));
    this.user=this.formdk[0];
  }
  sua()
  {
    localStorage.setItem('dangnhap',JSON.stringify(this.formdk));
    alert("Cập nhật thành công")
  }
}
