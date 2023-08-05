const funcionario: object[] = [{
  nomes : [`matilde`, `joão`]
}];


const funcionarios: {
  supervisores: string[],
  baterPonto: (hora: number) => string
} ={
  supervisores: ['Ana', 'Fernando'],
  baterPonto(hora: number): string {
    return hora > 8? 'Fora do horário': 'Ponto normal'
  }
}

console.log(funcionarios.baterPonto(7));

