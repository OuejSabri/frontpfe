export interface Projet {
    _id: string; // Identifiant unique de l'éducation
    date: Date; // Date de début de l'éducation
    dateFin: Date; // Date de fin de l'éducation
    titre: string; // Domaine d'étude de l'éducation
    description: string; // Institut où l'éducation a été obtenue
    poste:string;
    user: string; // Identifiant de l'utilisateur associé à cette éducation
  }
  