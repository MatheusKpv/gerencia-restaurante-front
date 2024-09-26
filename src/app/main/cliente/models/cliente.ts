export interface Cliente {
  id: number,
  nome: string,
  sobrenome: string,
  cpf: string,
  dataNascimento: Date,
  sexo: string,
  telefone: string,
  idRestaurante: number,
  dataCadastro: Date,
  quantidadeReservas: number,
  quantidadeValorGasto: number
}
