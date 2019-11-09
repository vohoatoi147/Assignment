import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-thitracnghiem',
  templateUrl: './thitracnghiem.component.html',
  styleUrls: ['./thitracnghiem.component.css']
})
export class ThitracnghiemComponent implements OnInit {
  Id;
  dulieu;
  socau;
  url;
  urlSubject;
  subject: any;
  subName;
  item: number = 1;
  trangdau: number = 1;
  cauhoi;
  cautraloi;
  p: number = 1;
  orderBy: String = "ten";
  socauhoi;
  answer = [];
  Marks = 0;
  quizs = [];

  showTime = true;
  counter = 0;
  setSecond = 2700;
  interval = null;
  result;
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private service: ServiceService) { }

  ngOnInit() {
    
    this.router.paramMap.subscribe(para => {
      this.Id = para.get('trangthi')
      this.url = './assets/db/Quizs/' + this.Id + '.js';
      this.urlSubject = './assets/db/Subjects.js';
    });
    this.get().subscribe(data => {
      this.dulieu = data;
    });
    
    
    this.get().subscribe(data => {
      this.socau = data;
      this.socauhoi = this.socau.length;
      this.http.get(this.urlSubject).subscribe(para => {
        this.subject = para;
        this.nameSub();
      });
      if (this.socau.length % this.trangdau == 0) {
        this.p = this.socau.length / this.trangdau;
      }
      else {
        this.p = Math.floor(this.socau.length / this.trangdau) + 1;
      }
    });

  }

  get() {
    return this.http.get(this.url)
  }
  
  goNext() {

    if (this.trangdau < this.p) {
      this.trangdau++;
    }
  }

  goPre() {
    if (this.trangdau > 1) {
      this.trangdau--;
    }
  }


  nameSub() {
    this.subject.forEach(element => {
      if (element.Id == this.Id) {
        this.subName = element.Name;
      }
    });
  }



  convertTime(s) {
    var timer = document.getElementById('timer');
    var min = Math.floor(s / 60);
    var sec = s % 60;
    var minute = (min < 10) ? "0" + min : min;
    var sencond = (sec < 10) ? "0" + sec : sec;
    return minute + "'" + ':' + sencond;
  }

  startTime() {
    // this.onShowPage = true;
    clearInterval(this.interval);
    var timer = document.getElementById('timer');
    timer.innerHTML = this.convertTime(this.setSecond - this.counter);
    this.interval = setInterval(() => {
      this.counter++;
      timer.innerHTML = this.convertTime(this.setSecond - this.counter);
      if ((this.setSecond - this.counter) <= 0) {
        clearInterval(this.interval);
        this.setSecond = 2700;
        this.counter = 0;
        timer.innerHTML = "Hết Thời Gian Làm Bài";
      }
    }, 1000);
  }
  tinhDiem() {
    for (var i = 0; i < this.socau.length; i++) {
      if (this.socau[i].AnswerId == this.answer[i]) {
        this.Marks += this.socau[i].Marks
      }
    }
  }

  endTime() {

    clearInterval(this.interval);
    document.getElementById('timer-2').innerHTML = this.convertTime(this.counter);
    document.getElementById('result').style.display = 'block';
    document.getElementById('training').style.display = 'none';
  }

  resetTime() {
    clearInterval(this.interval);
    document.getElementById('timer').innerHTML = "45':00";
    this.setSecond = 2700;
    this.counter = 0;

  }
}