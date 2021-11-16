import { Component, OnInit } from '@angular/core';
import { IOrder } from '../model/order.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
;
  orders: IOrder[]
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.query().subscribe(data => {
      this.orders = data.body;
    }, error => {
      console.log(error);
    });
  }

}
