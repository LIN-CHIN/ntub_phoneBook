import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-index-phone-book',
  templateUrl: './index-phone-book.component.html',
  styleUrls: ['./index-phone-book.component.scss']
})
export class IndexPhoneBookComponent implements OnInit {
  campus: string = '';
  unit: string = '';
  phoneNumber: string = '請輸入聯絡人姓名或手機';
  constructor(
    private _httpService: HttpService

  ) { }
  ngOnInit() {}

  doGet(){
    this._httpService.getData("http://localhost:3000/phones/").subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );
  }
}

