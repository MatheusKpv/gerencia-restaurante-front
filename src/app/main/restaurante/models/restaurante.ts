import { TipoComida } from "./tipoComida.enum";

export interface Restaurante {
  id: number,
  nome: string,
  cnpj: string,
  estrelas: number,
  tipoComida: string
}
