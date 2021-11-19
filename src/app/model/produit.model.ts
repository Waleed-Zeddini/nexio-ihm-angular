import { ILigneCommande } from './ligne-commande.model';
import { ICategorie } from './categorie.model';

export interface IProduit {
  id?: number;
  code?: string;
  marque?: string;
  modele?: string;
  caracteristiques?: string;
  prixUnitaire?: number;
  quantite?: number;
  Lignes?: ILigneCommande[];
  categorie?: ICategorie;
  categorieId?: number;
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
    public Lignes?: ILigneCommande[],
    public categorie?: ICategorie,
    public categorieId?: number
  ) {}
}
