import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../module';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(ordering: string, search: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BaseUrl}/games`, {
      params: params,
    });
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BaseUrl}/games/${id}`);
    const gameTrailorRequest = this.http.get(
      `${env.BaseUrl}/games/${id}/movies`
    );
    const gameScreenshotRequest = this.http.get(
      `${env.BaseUrl}/games/${id}/screenshots`
    );

    return forkJoin({
      gameInfoRequest,
      gameScreenshotRequest,
      gameTrailorRequest,
    }).pipe(
      map((response: any) => {
        return {
          ...response['gameInfoRequest'],
          screenshots: response['gameScreenshotRequest']?.results,
          trailers: response['gameTrailorRequest']?.results,
        };
      })
    );
  }
}
