const Matematica = [
  {"nome": "Gabriel", "nota": 8},
  {"nome": "Joao", "nota": 10},
  {"nome": "Jose", "nota": 5},
  {"nome": "Samuel", "nota": 4},
  {"nome": "Fidel", "nota": 6}
];

const aprovados = Matematica.filter(aluno => aluno.nota >= 6);

console.log(aprovados);