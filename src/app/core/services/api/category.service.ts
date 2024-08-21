import { inject, Injectable } from '@angular/core';
import { API_URL } from '../base/API_URL';
import { HttpClient } from '@angular/common/http';
import { Category, CategoryResponse } from '../../models/category';
import { Observable } from 'rxjs';
import { BaseService } from '../generic/base.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  private url = API_URL + 'category';
  private http = inject(HttpClient);

  protected getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.url, {
      headers: this.getAuthHeaders(),
    });
  }
  getCategory(id: number): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(${this.url}/${id}, {
      headers: this.getAuthHeaders(),
    });
  }

  createCategory(category: Category): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.url, category, {
      headers: this.getAuthHeaders(),
    });
  }

  updateCategory(
    id: number,
    category: Category
  ): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(${this.url}/${id}, category, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteCategory(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(${this.url}/${id}, {
      headers: this.getAuthHeaders(),
    });
  }
}