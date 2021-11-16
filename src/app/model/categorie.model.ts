import { IProduit } from './produit.model';

export interface ICategorie {
  id?: number;
  code?: string;
  libelle?: string;
  produits?: IProduit[];
}

export class Categorie implements ICategorie {
  constructor(public id?: number, public code?: string, public libelle?: string, public produits?: IProduit[]) {}
}
