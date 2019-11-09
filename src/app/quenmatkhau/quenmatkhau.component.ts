import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {
  formdk = [];
  user = [];
  selectStudents: User;
  submit = false;
  username:string;
  email:String;




  constructor() { }

  ngOnInit() {
    this.addUser();
  }
  addUser() {
    this.user = JSON.parse(localStorage.getItem('dangnhap'));
  }
  quenMatKhau() {
    for (var i=0;i<this.user.length;i++)
    if(this.user[i].username==this.username &&
      this.user[i].email==this.email)
    {
      this.submit=true;
    }
    else
    {
      alert('Thông tin không chính xác')
    }
    
  }
  
}
