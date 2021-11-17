import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LigneCommande, ILigneCommande } from '../model/ligne-commande.model';
import { Commande, ICommande } from '../model/commande.model';
import { Order, IOrder } from '../model/order.model';
import { Client, IClient } from '../model/client.model';

import { IProduit } from '../model/produit.model';
import { CommandeService } from '../services/commande.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.css']
})
export class AjoutCommandeComponent implements OnInit {

  order : IOrder;
  Client : IClient;
  commande : ICommande;
  lignesTemp: ILigneCommande;
  modeUpdate: boolean;
  indexUpdate: number;
  produits: IProduit[];

  
  constructor(private commandeService: CommandeService, private produitService: ProduitService,private router: Router) { }

  ngOnInit(): void {
    this.modeUpdate = false;
    this.order = new Order();
    this.order.client = new Client();
    this.order.commande = new Commande();
    this.lignesTemp = new LigneCommande();
    this.order.commande.date = moment();
    this.order.ligneCommande = [];
    this.order.commande.prixTotal = 0;
    this.initClient();
    this.produitService.query().subscribe(data => {
      this.produits = data.body;
    }, error => {
      console.log(error);
    });
  }
  ajouterLigneCommande() {
    
    this.lignesTemp.prixTotal = this.lignesTemp.produit.prixUnitaire * this.lignesTemp.qte;
    this.order.commande.prixTotal = this.order.commande.prixTotal + this.lignesTemp.prixTotal; 
    let currentProduit = this.lignesTemp.produit;
    this.order.ligneCommande.push(this.lignesTemp);
    this.lignesTemp = new LigneCommande();
    this.lignesTemp.produit = currentProduit;
  }
  supprimerLigneCommande(index: any) {
    this.order.commande.prixTotal = this.order.commande.prixTotal - this.order.ligneCommande[index].prixTotal;
    this.order.ligneCommande.splice(index, index + 1);
  }
  editerLigneCommande(index: any) {

    this.modeUpdate = true;
    this.indexUpdate = index;
    this.lignesTemp.qte = this.order.ligneCommande[index].qte;
    this.lignesTemp.prixUnitaire = this.order.ligneCommande[index].prixUnitaire;
    this.lignesTemp.produit = this.order.ligneCommande[index].produit;
  }
  updateLigneCommande() {
    this.order.commande.prixTotal = this.order.commande.prixTotal - this.order.ligneCommande[this.indexUpdate].prixTotal;
    this.lignesTemp.prixTotal = this.lignesTemp.qte * this.lignesTemp.produit.prixUnitaire;
    this.order.commande.prixTotal = this.order.commande.prixTotal + this.lignesTemp.prixTotal;

    this.order.ligneCommande[this.indexUpdate] = this.lignesTemp ;
    this.lignesTemp = new LigneCommande();
    this.modeUpdate = false;

  }
  initClient(){
    this.order.client.id = 1; 
    this.order.client.code = ""; 
    this.order.client.codePostal = 1; 
    this.order.client.adresse = ""; 
    this.order.client.email = ""; 
    this.order.client.nom = ""; 
    this.order.client.prenom = ""; 
    this.order.client.ville = ""; 
    this.order.client.gsm = ""; 
    this.order.client.tel = ""; 
    this.order.client.fax = "";
    this.order.client.dateNaissance  = moment();
  }
  affecterProduit(event) {
    this.lignesTemp.produit = event
  }
  passerLaCommande() {
    this.commandeService.create(this.order).subscribe(data => {
      this.order = data.body;
      this.router.navigateByUrl('/mes-achats');
    }, error => {
      console.log(error)
    });
  }
  annuler() {
    this.router.navigateByUrl('/mes-achats');
  }
 
  

}
