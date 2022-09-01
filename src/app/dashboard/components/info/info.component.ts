import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddData } from '../../interfaces/product';
import { FirebaseProductService } from '../../services/firebase-product.service';
import { AddProductDialogComponent } from '../dialog/add-product-dialog/add-product-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  displayedColumns: string[] = ['sku', 'nombre', 'precio', 'cantidad', 'fechaVencimiento','acción'];
  dataSource!:MatTableDataSource<AddData>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private firebaseproductservice:FirebaseProductService) { }
  ngOnInit(): void {
  this.getProduct();
  }

  getProduct(){
    this.firebaseproductservice.getProduct().subscribe({
      next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  addProduct(){
    this.dialog.open(AddProductDialogComponent, {
    });
  }
  async deleteProduct(element: AddData){
    console.log(element);
    const response = await this.firebaseproductservice.deleteProduct(element);
    console.log(response);
  }
}
