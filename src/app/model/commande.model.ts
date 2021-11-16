import { Moment } from 'moment';


export interface ICommande {
  id?: number;
  numero?: string;
  date?: Moment;
  prixTotal?: number;
  etat?: number;
  clientId?: number
}

export class Commande implements ICommande {
  constructor(
    public id?: number,
    public numero?: string,
    public date?: Moment,
    public prixTotal?: number,
    public clientId?: number,
    public etat?: number
  ) {}
}
