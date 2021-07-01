import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/menu-items.json');
  }
}
