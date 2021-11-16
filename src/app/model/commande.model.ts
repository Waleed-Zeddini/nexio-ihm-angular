import { Moment } from 'moment';
import { ICarnetCommande } from './carnet-commande.model';
import { IClient } from './client.model';

export interface ICommande {
  id?: number;
  numero?: string;
  date?: Moment;
  prixTotal?: number;
  etat?: number;
  carnets?: ICarnetCommande[];
  client?: IClient;
}

export class Commande implements ICommande {
  constructor(
    public id?: number,
    public numero?: string,
    public date?: Moment,
    public prixTotal?: number,
    public etat?: number,
    public carnets?: ICarnetCommande[],
    public client?: IClient
  ) {}
}
