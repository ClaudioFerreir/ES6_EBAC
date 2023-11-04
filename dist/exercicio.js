"use strict";

var Matematica = [{
  "nome": "Gabriel",
  "nota": 8
}, {
  "nome": "Joao",
  "nota": 10
}, {
  "nome": "Jose",
  "nota": 5
}, {
  "nome": "Samuel",
  "nota": 4
}, {
  "nome": "Fidel",
  "nota": 6
}];
var aprovados = Matematica.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(aprovados);