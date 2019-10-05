import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { SuataikhoanComponent } from './suataikhoan/suataikhoan.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { GopyComponent } from './gopy/gopy.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DangnhapComponent,
    DangkiComponent,
    DoimatkhauComponent,
    SuataikhoanComponent,
    GioithieuComponent,
    LienheComponent,
    HoidapComponent,
    GopyComponent,
    QuenmatkhauComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

{ path: "",
component: TrangchuComponent },

{path: 'trangchu', component:TrangchuComponent},
{ path: 'dangnhap', component: DangnhapComponent },
{ path: 'dangki', component: DangkiComponent },
{ path: 'doimatkhau', component: DoimatkhauComponent },
{ path: 'quenmatkhau', component: QuenmatkhauComponent },
{ path: 'suadoitaikhoan', component: SuataikhoanComponent },
{ path: 'gioithieu', component: GioithieuComponent },
{ path: 'hoidap', component: HoidapComponent },
{ path: 'lienhe', component: LienheComponent },
{ path: 'gopy', component: GopyComponent },

{ path: '**', redirectTo: 'products', pathMatch: 'full' },

])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
