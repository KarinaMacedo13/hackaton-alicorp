import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SellData } from '../../interfaces/product';
import { FirebaseProductService } from '../../services/firebase-product.service';
import { AddQrProductComponent } from '../dialog/add-qr-product/add-qr-product.component';
import { AddSellProductComponent } from '../dialog/add-sell-product/add-sell-product.component';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  dataSellProduct !: SellData[];
  constructor(public dialog: MatDialog, private firebaseproductservice:FirebaseProductService) { }

  ngOnInit(): void {
    this.getSellProduct();
  }
  addProduct(){
    this.dialog.open(AddSellProductComponent, {
    });
  }
  addQRProduct(){
    this.dialog.open(AddQrProductComponent, {
    });
  }
  getSellProduct(){
    this.firebaseproductservice.getSellProduct().subscribe({
      next: (res) => {
        this.dataSellProduct = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  async deleteSellProduct(element: SellData){
    console.log(element);
    const response = await this.firebaseproductservice.deleteSellProduct(element);
    console.log(response);
  }
}
