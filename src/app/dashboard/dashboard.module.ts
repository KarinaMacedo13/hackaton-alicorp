import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProductDialogComponent } from './components/dialog/add-product-dialog/add-product-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SellComponent } from './components/sell/sell.component';
import { AddQrProductComponent } from './components/dialog/add-qr-product/add-qr-product.component';
import { AddSellProductComponent } from './components/dialog/add-sell-product/add-sell-product.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HorizontalChartComponent } from './components/dashboard/horizontal-chart/horizontal-chart.component';
import { TableChartComponent } from './components/dashboard/table-chart/table-chart.component';
import { HorizontalminusChartComponent } from './components/dashboard/horizontalminus-chart/horizontalminus-chart.component';
import { HorizontalMarginComponent } from './components/dashboard/horizontal-margin/horizontal-margin.component';
@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    InfoComponent,
    AddProductDialogComponent,
    SellComponent,
    AddQrProductComponent,
    AddSellProductComponent,
    HorizontalChartComponent,
    TableChartComponent,
    HorizontalminusChartComponent,
    HorizontalMarginComponent
  ],
  imports: [
    CommonModule,
    NgxScannerQrcodeModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxChartsModule,
  ]
})
export class DashboardModule { }