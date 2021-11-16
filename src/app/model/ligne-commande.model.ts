import { IProduit } from './produit.model';

export interface ILigneCommande {
  id?: number;
  qte?: number;
  prixUnitaire?: number;
  prixTotal?: number;
  etat?: number;
  produitId?: number;
  commandeId?: number;
  produit?: IProduit
  
}

export class LigneCommande implements ILigneCommande {
  constructor(
    public id?: number,
    public qte?: number,
    public prixUnitaire?: number,
    public prixTotal?: number,
    public produitId?: number,
    public etat?: number,
    public commandeId?: number,
    public produit?: IProduit
  ) {}
}
