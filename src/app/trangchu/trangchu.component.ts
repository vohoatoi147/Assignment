import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  url = "./assets/db/Subjects.js";
  dulieu;
  p: number = 1;
  trangdau: number = 1;
  item: number = 4;
  orderBy: String = "ten";

  goNext() {

    if (this.trangdau < this.p) {
      this.trangdau++;
    }
  }

  goPre() {
    if (this.trangdau >= 1) {
      this.trangdau--;
    }
  }
  order(strOder: String) {
    this.orderBy = strOder;
  }


  constructor(private http: HttpClient,
   private service: ServiceService) { }

  ngOnInit() {
    this.get().subscribe(data => {
      this.dulieu = data
      if (this.dulieu.length % this.item == 0) {
        this.p = this.dulieu.length / this.item;
      }
      else {
        this.p = Math.floor(this.dulieu.length / this.item) + 1;
      }
    });
  }
  get() {
    return this.http.get(this.url)
  }
  
}
