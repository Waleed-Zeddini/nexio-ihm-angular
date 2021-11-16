import { Moment } from 'moment';
import { ICommande } from './commande.model';

export interface IClient {
  id?: number;
  code?: string;
  nom?: string;
  prenom?: string;
  dateNaissance?: Moment;
  adresse?: string;
  ville?: string;
  codePostal?: number;
  tel?: string;
  fax?: string;
  gsm?: string;
  email?: string;
}

export class Client implements IClient {
  constructor(
    public id?: number,
    public code?: string,
    public nom?: string,
    public prenom?: string,
    public dateNaissance?: Moment,
    public adresse?: string,
    public ville?: string,
    public codePostal?: number,
    public tel?: string,
    public fax?: string,
    public gsm?: string,
    public email?: string,
  ) {}
}
