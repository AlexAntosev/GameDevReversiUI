import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export abstract class BaseRepository {
  constructor(private httpClient: HttpClient) {}

  protected get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(url));
  }

  private buildUrl(url: string): string {
    var url = `${environment.serverURL}${url}`;
    return url;
  }
}
