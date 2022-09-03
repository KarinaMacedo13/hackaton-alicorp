import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseProductService } from 'src/app/dashboard/services/firebase-product.service';
import { AddData } from '../../../interfaces/product';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private firebaseproductservice:FirebaseProductService) {
    this.addForm = this.fb.group({
      sku: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      precioVenta: ['', Validators.required],
      fechaCompra: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  async addProduct(){
    const PRODUCT: AddData = {
      sku: this.addForm.get('sku')?.value,
      nombre: this.addForm.get('nombre')?.value,
      precio: this.addForm.get('precio')?.value,
      cantidad: this.addForm.get('cantidad')?.value,
      fechaVencimiento: this.addForm.get('fechaVencimiento')?.value,
      precioVenta: this.addForm.get('precioVenta')?.value,
      fechaCompra: this.addForm.get('fechaCompra')?.value,
    }
    console.log(PRODUCT);
    const response = await this.firebaseproductservice.addProduct(PRODUCT);
    console.log(response);
  }
}
