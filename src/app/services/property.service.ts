import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private api: ApiService) {}
  getProperties() {
    return this.api.fetchData('GET', 'properties');
  }
}
