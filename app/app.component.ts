import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Update the path based on your project structure
import { data } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'poubelle_connectees';
  data: data[] = [];
  current: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data: data[]) => {
      this.data = data;
      this.current = this.data.length > 0 ? this.data[0] : null;
    },
   

    );
  }
}