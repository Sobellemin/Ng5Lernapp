import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//ตัวแปร
  itemCount:number=4;
  additem:string="เพิ่มรายการใหม่";// one way binding
  listText:string="รายการเริ่มต้นใหม่"; //two way binding (model)
  listall = [];
  constructor() { }

  ngOnInit() {
    //นับจำนวนรายการ
  this.itemCount = this.listall.length;
  }

  addItem()
  {
//ตรวจค่าว่าง
if(this.listText!="")
    this.listall.push(this.listText);//รับค่าจากฟอร์ม และบันทึกลงอาเรย์
   this. listText = "";
   //นับจำนวนล่าสุด
   this.itemCount = this.listall.length;

  }
}
