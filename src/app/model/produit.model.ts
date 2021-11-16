import { ICarnetCommande } from './carnet-commande.model';
import { ICategorie } from './categorie.model';

export interface IProduit {
  id?: number;
  code?: string;
  marque?: string;
  modele?: string;
  caracteristiques?: string;
  prixUnitaire?: number;
  quantite?: number;
  carnets?: ICarnetCommande[];
  categorie?: ICategorie;
}

export class Produit implements IProduit {
  constructor(
    public id?: number,
    public code?: string,
    public marque?: string,
    public modele?: string,
    public caracteristiques?: string,
    public prixUnitaire?: number,
    public quantite?: number,
    public carnets?: ICarnetCommande[],
    public categorie?: ICategorie
  ) {}
}
