import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-qr-product',
  templateUrl: './add-qr-product.component.html',
  styleUrls: ['./add-qr-product.component.css']
})
export class AddQrProductComponent implements OnInit {
  output!: any;
  constructor() { }

  ngOnInit(): void {
  }
  onData(e: any): void {
    console.log(e)
  }
}
