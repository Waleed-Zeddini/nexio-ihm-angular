import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CarnetCommande, ICarnetCommande } from '../model/carnet-commande.model';
import { Commande, ICommande } from '../model/commande.model';
import { IProduit } from '../model/produit.model';
import { CommandeService } from '../services/commande.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  commande : ICommande;
  carnetCommandeTemp: ICarnetCommande;
  modeUpdate: boolean;
  indexUpdate: number;
  produits: IProduit[];

  
  constructor(private commandeService: CommandeService, private produitService: ProduitService,private router: Router) { }

  ngOnInit(): void {
    this.modeUpdate = false;
    this.commande = new Commande();
    this.carnetCommandeTemp = new CarnetCommande();
    this.commande.date = moment();
    this.commande.carnets = [];
    this.commande.prixTotal = 0;
    this.produitService.query().subscribe(data => {
      this.produits = data.body;
    }, error => {
      console.log(error);
    });
  }
  ajouterLigneCommande() {
    
    this.carnetCommandeTemp.prixTotal = this.carnetCommandeTemp.produit.prixUnitaire * this.carnetCommandeTemp.qte;
    this.commande.prixTotal = this.commande.prixTotal + this.carnetCommandeTemp.prixTotal; 
    let currentProduit = this.carnetCommandeTemp.produit;
    this.commande.carnets.push(this.carnetCommandeTemp);
    this.carnetCommandeTemp = new CarnetCommande();
    this.carnetCommandeTemp.produit = currentProduit;
  }
  supprimerLigneCommande(index: any) {
    this.commande.prixTotal = this.commande.prixTotal - this.commande.carnets[index].prixTotal;
    this.commande.carnets.splice(index, index + 1);
  }
  editerLigneCommande(index: any) {

    this.modeUpdate = true;
    this.indexUpdate = index;
    this.carnetCommandeTemp.qte = this.commande.carnets[index].qte;
    this.carnetCommandeTemp.prixUnitaire = this.commande.carnets[index].prixUnitaire;
    this.carnetCommandeTemp.produit = this.commande.carnets[index].produit;
  }
  updateLigneCommande() {
    this.commande.prixTotal = this.commande.prixTotal - this.commande.carnets[this.indexUpdate].prixTotal;
    this.carnetCommandeTemp.prixTotal = this.carnetCommandeTemp.qte * this.carnetCommandeTemp.produit.prixUnitaire;
    this.commande.prixTotal = this.commande.prixTotal + this.carnetCommandeTemp.prixTotal;

    this.commande.carnets[this.indexUpdate] = this.carnetCommandeTemp ;
    this.carnetCommandeTemp = new CarnetCommande();
    this.modeUpdate = false;

  }
  affecterProduit(event) {
    this.carnetCommandeTemp.produit = event
  }
  passerLaCommande() {
    this.commandeService.create(this.commande).subscribe(data => {
      this.commande = data.body;
      this.router.navigateByUrl('/mes-achats');
    }, error => {
      console.log(error)
    });
  }
  annuler() {
    this.router.navigateByUrl('/mes-achats');
  }
  

}
