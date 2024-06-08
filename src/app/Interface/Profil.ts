export interface Profil {
  _id: string;
  dateDebut: Date;
  email: string;
  nom: string;
  telephone: number;
  role: string;
  fullName: string;
  nationality: string;
  dateOfBirth: Date;
  address: string;
  department: string;
  gender: string;
  user: {
    nom: string;
    email: string;
    telephone: number;
  };
}
