import { Component, OnInit } from '@angular/core';
import { IProduit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits : IProduit[];
  constructor(private produitService: ProduitService) { }
/*
  ngOnInit(): void {
    this.produitService.query().subscribe(data => {
      this.produits = data.body;
    })
  }
*/
  ngOnInit(): void {

    this.loadAllProduits();
    
    }
  
    loadAllProduits() {
      this.produitService.findAll().subscribe(data => {
        this.produits = data;
      }, error => {
        console.log(error);
      });
  }

}
