import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../services/property.service';
@Component({
  selector: 'app-property-table',
  imports: [CommonModule],
  templateUrl: './property-table.component.html',
  styleUrl: './property-table.component.css',
})
export class PropertyTableComponent implements OnInit {
  properties: any[] = [];

  constructor(
    private router: Router,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((res: any) => {
      this.properties = res;
    });
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
