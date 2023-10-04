// data.service.ts

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database/';
import { Observable } from 'rxjs';
import { data } from './app/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataRef: any; // Adjust the type as needed

  constructor(private db: AngularFireDatabase) {
    this.dataRef = this.db.list('/file_new'); // 'data' is the name of your database node
  }

  getData(): Observable<data[]> {

    return this.dataRef.valueChanges();
  }
}
