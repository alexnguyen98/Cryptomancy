import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly DATA_URL = 'https://api.coinranking.com/v1/public/coins';

  constructor(private httpClient: HttpClient) {}

  items:[];
  labelList: Array<Number> = [] 
  // Aby se mi graf ukazal cely potreboval jsem label k hodnotam, tak jsem si vytboril umely voditko.
  // Vychazel jsem z toho ze api mi vetsinou poslalo 27 hodnot z historie kryptomeny.

  ngOnInit():void {
    this.getData().subscribe((res) => {
      this.items = res.data.coins
    })

    for (let i = 0; i < 27; i++) {
      this.labelList.push(0)
    }
  }
  
  getData() {
    return this.httpClient.get<{data: { coins: [] }}>(this.DATA_URL)
  }

  price(x: string):string {
    return parseFloat(x).toFixed(2)
  }
}
