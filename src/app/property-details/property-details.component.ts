import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  imports: [],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css',
})
export class PropertyDetailsComponent {
  propertyId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
