export interface ProfileSociete {
  _id: string;
  dateDebut: Date;
  email: string;
  nom: string;
  telephone: number;
  role: string;
  matricule_fiscale: string;
  domaine: string;
  adresse: string;
  ville: string;
  code_postal: string;
  fax:String;
  site_web: String;
  description:String;
  user: {
    nom:String
    email: string;
    telephone: number;
  };
}
