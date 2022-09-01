import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   output!: any;

  // @ViewChild('action', { static: true })action!: NgxScannerQrcodeComponent;
  constructor() { }

  ngOnInit(): void {
    
  };
  onData(e: any): void {
    console.log(e)
  }
}
