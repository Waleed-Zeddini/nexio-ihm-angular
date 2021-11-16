import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL_ORDER } from '../app.constants';
import { createRequestOption } from '../shared/util/request-util';
import { ILigneCommande } from '../model/ligne-commande.model';

type EntityResponseType = HttpResponse<ILigneCommande>;
type EntityArrayResponseType = HttpResponse<ILigneCommande[]>;

@Injectable({ providedIn: 'root' })
export class LigneCommandeService {
  public resourceUrl = SERVER_API_URL_ORDER + '/api/lignes-commande';

  constructor(protected http: HttpClient) {}

  create(LigneCommande: ILigneCommande): Observable<EntityResponseType> {
    return this.http.post<ILigneCommande>(this.resourceUrl, LigneCommande, { observe: 'response' });
  }

  update(LigneCommande: ILigneCommande): Observable<EntityResponseType> {
    return this.http.put<ILigneCommande>(this.resourceUrl, LigneCommande, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ILigneCommande>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ILigneCommande[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
