import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../base/API_URL';
import { Observable } from 'rxjs';
import { Book, BookResponse } from '../../models/book';
import { BaseService } from '../generic/base.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService {

  private url = API_URL + 'book';
  private http = inject(HttpClient);

  protected getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getBooks(): Observable<BookResponse> {
    return this.http.get<BookResponse>(this.url, {
      headers: this.getAuthHeaders(),
    });
  }
  getBook(id: number): Observable<BookResponse> {
    return this.http.get<BookResponse>(${this.url}/${id}, {
      headers: this.getAuthHeaders(),
    });
  }

  createBook(book: Book): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.url, book, {
      headers: this.getAuthHeaders(),
    });
  }

  updateBook(
    id: number,
    book: Book
  ): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(${this.url}/${id}, book, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteBook (id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(${this.url}/${id}, {
      headers: this.getAuthHeaders(),
    });
  }
}