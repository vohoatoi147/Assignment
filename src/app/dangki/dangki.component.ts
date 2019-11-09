import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  hidden=true;
  formdk =
    {
      id: 3,
      fullname: '',
      email: '',
      password: '',
      gender: '',
      birthday: '',
      username: '',
    }
  user: User[];
  taikhoanUser = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getListUer();
  }
  getListUer() {
    this.service.listUser().subscribe(data => this.user = data)
  }
  submit(form: NgForm) {
    this.taikhoanUser.push({
      id: this.formdk.id += 1,
      fullname: this.formdk.fullname,
      email: this.formdk.email,
      password: this.formdk.password,
      username: this.formdk.username,
      birthday: this.formdk.birthday,
      gender: this.formdk.gender,
    });
    localStorage.setItem("dangki", JSON.stringify(this.taikhoanUser))
    this.hidden=false;
  }
  
}
