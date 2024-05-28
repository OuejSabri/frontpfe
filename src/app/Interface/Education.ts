export interface Education {
    _id: string; // Identifiant unique de l'éducation
    dateDebut: Date; // Date de début de l'éducation
    dateFin: Date; // Date de fin de l'éducation
    domaineEtude: string; // Domaine d'étude de l'éducation
    institut: string; // Institut où l'éducation a été obtenue
    user: string; // Identifiant de l'utilisateur associé à cette éducation
  }
  