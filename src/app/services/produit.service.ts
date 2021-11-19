import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL_STOCK } from '../app.constants';
import { createRequestOption } from '../shared/util/request-util';
import { IProduit } from '../model/produit.model';

type EntityResponseType = HttpResponse<IProduit>;
type EntityArrayResponseType = HttpResponse<IProduit[]>;

@Injectable({ providedIn: 'root' })
export class ProduitService {
  public resourceUrl = SERVER_API_URL_STOCK + '/api/produits';
  headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', '*')
      .append('Access-Control-Allow-Origin', '*');

  constructor(protected http: HttpClient) {}

  create(produit: IProduit): Observable<EntityResponseType> {

    return this.http.post<IProduit>(this.resourceUrl, produit, { observe: 'response', headers: this.headers });
  }

  update(produit: IProduit): Observable<EntityResponseType> {
    return this.http.put<IProduit>(this.resourceUrl, produit, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProduit>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProduit[]>(this.resourceUrl, { params: options, observe: 'response', headers: this.headers });
  }

  public findAll(): Observable<IProduit[]> {
    return this.http.get<IProduit[]>(`${this.resourceUrl}/all}`);
  }
  
  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
