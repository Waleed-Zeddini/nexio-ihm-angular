import { ILigneCommande } from './ligne-commande.model';
import { IClient } from './client.model';
import { ICommande } from './commande.model';

export interface IOrder {
  commande?: ICommande;
  ligneCommande?: ILigneCommande[];
  client?: IClient;
}

export class Order implements IOrder {
  constructor(
    public client?: IClient,
    public commande?: ICommande,
    public ligneCommande?: ILigneCommande[]
  ) {}
}
