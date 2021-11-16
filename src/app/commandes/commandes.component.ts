import { Component, OnInit } from '@angular/core';
import { ICommande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
;
  commandes: ICommande[]
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.query().subscribe(data => {
      this.commandes = data.body;
    }, error => {
      console.log(error);
    });
  }

}
