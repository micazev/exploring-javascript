// // MANIPULACAO DE STRINGS
// const transacoes = [
//   {
//     descricao: `Taxa do Pao`,
//     valor: `R$39`,
//   },
//   {
//     descricao: `Taxa do Mercado`,
//     valor: `R$129`,
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: `R$99`,
//   },
//   {
//     descricao: `Taxa do Banco`,
//     valor: `R$129`,
//   },
//   {
//     descricao: `Recebimento de Cliente`,
//     valor: `R$49`,
//   },
// ];

// let taxaTotal = 0;
// let recebimentoTotal = 0;

// transacoes.forEach((item) => {
//   const numeroLimpo = +item.valor.replace("R$", "");
//   if (item.descricao.slice(0, 4) === `Taxa`) {
//     taxaTotal = taxaTotal + numeroLimpo;
//   } else item.descricao.slice(0, 4) === `Rece`;
//   recebimentoTotal += numeroLimpo;
// });

// console.log(taxaTotal);

// const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
// const arrayTransportes = transportes.split(";");
// console.log(arrayTransportes);

// // Substitua span por a
// let html = `<ul>
// <li><span>Sobre</span></li>
// <li><span>Produtos</span></li>
// <li><span>Contato</span></li>
// </ul>`;

// html = html.split("span").join("a");
// console.log(html);

// // retorne o último caracter da frase

// const frase = "Melhor do Ano!";
// console.log(frase.slice(-1));
// console.log(frase[frase.length - 1]);

// // Retorne o total de taxas
// const transacoes2 = [
//   "Taxa do Banco",
//   "Taxa do pão",
//   "Taxa do Mercado",
//   "Depósito Bancário",
//   "Tarifa Especial",
// ];

// let totalTaxas = 0;

// transacoes2.forEach((item) => {
//   if (item.startsWith("Taxa") === true) totalTaxas++;
// });

// console.log(totalTaxas);

// // Retorne um número aleatório entre 1050 e 2000
// console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// // Retorne o maior numero da lista abaixo
// const numeros = "4, 5, 20, 8, 9";
// const arrayNumeros = numeros.split(", ");
// console.log(Math.max(...arrayNumeros));

// // Crie uma função para limpar os preços e retornar os numeos com centavos arredondados, depois retorne a soma total

// const listaPrecos = ["R$ 59,99", "R$ 100,222", "R$ 230", "r$ 200"];
// function limparPreco(preco) {
//   preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
//   preco = +preco.toFixed(2);
//   return preco;
// }
// let soma = 0;
// listaPrecos.forEach((preco) => {
//   soma += limparPreco(preco);
// });
// console.log(
//   soma.toLocaleString("PT-Br", { style: "currency", currency: "BRL" })
// );

// const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// // remover o primeiro valor e colocar em uma variavel
// const primeiro = comidas.shift();
// console.log(primeiro);
// // remover o ultimo valor e colocar em uma variavel
// const ultimo = comidas.pop();
// console.log(ultimo);
// // Adicione Arroz ao final da array
// comidas.push("Arroz");
// console.log(comidas);
// // Adicione peixe e batata ao inicio do array
// comidas.unshift("peixe", "batata");
// console.log(comidas);

// const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// // Arrume os estudantes em ordem alfabetica
// console.log(estudantes.sort());
// // Inverta a ordem dos estudantes
// console.log(estudantes.reverse());
// // Verifique se Joana faz parte dos estudantes
// console.log(estudantes.includes("Joana"));
// // Verifique de Juliana faz parte dos estudantes
// console.log(estudantes.includes("Juliana"));

// let html = `<section>
// <div>Sobre</div>
// <div>Produtos</div>
// <div>Contato</div>
// </section>`;
// //Substitua sextion por ul e div com li
// html = html.split("section").join("ul").split("div").join("li");
// console.log(html);

// const carros = ["Ford", "Fiat,", "VW", "Honda"];
// const copiaCarros = carros.slice();

// carros.pop();

// console.log(carros);
// console.log(copiaCarros);

// Retorne o valor total das compras

const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Queijo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const valor = +item.preco.replace("R$", "").trim().replace(",", ".");
  return acumulador + valor;
}, 0);

console.log(valorTotal);
