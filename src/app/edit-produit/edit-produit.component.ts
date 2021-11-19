import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategorie } from '../model/categorie.model';
import { IProduit } from '../model/produit.model';
import { CategorieService } from '../services/categorie.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  id_produit: number;
  categories: ICategorie[];
  produit: IProduit;

  constructor(private produitService: ProduitService, private categorieService: CategorieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id_produit = this.activatedRoute.snapshot.params['id_produit'];

    this.produitService.find(this.id_produit).subscribe(data => {
      this.produit = data.body;
    });
    
    this.categorieService.query().subscribe(data => {
      this.categories = data.body;
    }, error => {
      console.log(error);
    })
  }
  

  annuler(): void {
    this.router.navigateByUrl('/inventaire');
  }

  updateProduit(): void {
    this.produitService.update(this.produit).subscribe(data => {

      this.produit = data.body;
      this.router.navigateByUrl('/inventaire');
    }, error => {
      console.log(error);
    })
  }
  
}
