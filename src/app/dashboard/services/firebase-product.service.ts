import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AddData } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProductService {

  constructor(private firestore:Firestore) { }
  addProduct(addData:AddData){
    const ref = collection(this.firestore, 'product');
    return addDoc(ref, addData);
  }
  getProduct():Observable<AddData[]>{
    const ref = collection(this.firestore, 'product');
    return collectionData(ref, {idField: 'id'}) as Observable<AddData[]>;
  }
  deleteProduct(addData:AddData){
    const ref = doc(this.firestore,`product/${addData.id}`);
    console.log(ref);
    return deleteDoc(ref);
  }
}
