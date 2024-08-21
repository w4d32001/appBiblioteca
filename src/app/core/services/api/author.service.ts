import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../base/API_URL';
import { HttpClient } from '@angular/common/http';
import { Author, AuthorResponse } from '../../models/author';
import { BaseService } from '../generic/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService{

  private url = API_URL + 'author';
  private http = inject(HttpClient);

  protected getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getAthors(): Observable<AuthorResponse> {
    return this.http.get<AuthorResponse>(this.url, {
      headers: this.getAuthHeaders(),
    });
  }
  getAuthor(id: number): Observable<AuthorResponse> {
    return this.http.get<AuthorResponse>(${this.url}/${id}, {
      headers: this.getAuthHeaders(),
    });
  }

  createAuthor(author: Author): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.url, author, {
      headers: this.getAuthHeaders(),
    });
  }

  updateAuthor(
    id: number,
    author: Author
  ): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(${this.url}/${id}, author, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteAuhtor(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(${this.url}/${id}, {
      headers: this.getAuthHeaders(),
    });
  }
}