import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { CommandesComponent } from './commandes/commandes.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inventaire',
    component: ProduitsComponent
  },
  {
    path: 'ajouter-produit',
    component: AjoutProduitComponent
  },
  {
    path: 'editer-produit/:id_produit',
    component: EditProduitComponent
  },
  {
    path: 'mes-achats',
    component: CommandesComponent
  },
  {
    path: 'passer-commande',
    component: AjoutCommandeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
