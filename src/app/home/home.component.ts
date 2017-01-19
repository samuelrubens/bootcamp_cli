import { Component, OnInit } from '@angular/core';
import { Property } from '../shared/property';
import { PropertiesService } from '../shared/properties.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private properties: Property[] = [];


  constructor(private PropertiesService: PropertiesService) { }

  ngOnInit() {
    this.PropertiesService.getProperties()
      .subscribe(data => this.properties = data);
  }

}
