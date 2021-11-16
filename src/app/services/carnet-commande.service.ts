import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL_ORDER } from '../app.constants';
import { createRequestOption } from '../shared/util/request-util';
import { ICarnetCommande } from '../model/carnet-commande.model';

type EntityResponseType = HttpResponse<ICarnetCommande>;
type EntityArrayResponseType = HttpResponse<ICarnetCommande[]>;

@Injectable({ providedIn: 'root' })
export class CarnetCommandeService {
  public resourceUrl = SERVER_API_URL_ORDER + 'api/lignes-commande';

  constructor(protected http: HttpClient) {}

  create(carnetCommande: ICarnetCommande): Observable<EntityResponseType> {
    return this.http.post<ICarnetCommande>(this.resourceUrl, carnetCommande, { observe: 'response' });
  }

  update(carnetCommande: ICarnetCommande): Observable<EntityResponseType> {
    return this.http.put<ICarnetCommande>(this.resourceUrl, carnetCommande, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICarnetCommande>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICarnetCommande[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
