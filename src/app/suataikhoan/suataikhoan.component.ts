import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-suataikhoan',
  templateUrl: './suataikhoan.component.html',
  styleUrls: ['./suataikhoan.component.css']
})
export class SuataikhoanComponent implements OnInit {
  formdk =[];
  user={};
  selectStudents:User;
  constructor() { }

  ngOnInit() {
    this.addUser();
    
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
