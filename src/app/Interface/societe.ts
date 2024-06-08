export interface Societe {
  id?: String;
  name: string | undefined;
  email: string | undefined;

  password: string | undefined;
  role: string;
  telephone: number;
}
