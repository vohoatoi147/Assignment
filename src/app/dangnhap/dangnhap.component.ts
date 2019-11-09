import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {


  password: '';
  username: '';

  user: User[]=[];
  taikhoanUser = [];
  userDangky = [];
  userlocal=[];
  getlistUsers=[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getListUer();
    this.userlocal = JSON.parse(localStorage.getItem("users"));
    this.userDangky = JSON.parse(localStorage.getItem("dangki"));
    this.getlistUsers = this.userDangky.concat(this.userlocal);
  }
  getListUer() {
    this.service.listUser().subscribe(data => {
      this.user = data;
    });
    
  }
  submit(form: NgForm) {
    var a = 0;
    for (var i = 0; i < this.getlistUsers.length; i++) {
      if (this.getlistUsers[i].username == form.value.username && this.getlistUsers[i].password == form.value.password) {
        this.taikhoanUser.push(this.getlistUsers[i]);
        localStorage.setItem("dangnhap", JSON.stringify(this.taikhoanUser));
        a++;
      }
    }
    if (a !== 0) {
      alert("Đăng nhập thành công")
      location.assign("");
    } else {
      alert("Tài khoản không chính xác");
    }
  }
}


