import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellData } from 'src/app/dashboard/interfaces/product';
import { FirebaseProductService } from 'src/app/dashboard/services/firebase-product.service';

@Component({
  selector: 'app-add-sell-product',
  templateUrl: './add-sell-product.component.html',
  styleUrls: ['./add-sell-product.component.css']
})
export class AddSellProductComponent implements OnInit {
  addForm: FormGroup;
  dataOrder: any = new Date().toDateString();

  constructor(private fb: FormBuilder, private firebaseproductservice:FirebaseProductService) {
    this.addForm = this.fb.group({
      sku: ['', Validators.required],
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required],
      precioVenta: ['', Validators.required],
      fechaVenta: [this.dataOrder],
    });
  }

  ngOnInit(): void {
    
  }
  async addProduct(){
    const PRODUCTSELL: SellData = {
      sku: this.addForm.get('sku')?.value,
      nombre: this.addForm.get('nombre')?.value,
      cantidad: this.addForm.get('cantidad')?.value,
      precioVenta: this.addForm.get('precioVenta')?.value,
      fechaVenta: this.addForm.get('fechaVenta')?.value,
    }
    console.log(PRODUCTSELL);
    const response = await this.firebaseproductservice.addSellProduct(PRODUCTSELL);
    console.log(response);
  }

}
