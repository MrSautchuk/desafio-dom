let valorDaConta = document.getElementById("valorDaConta");
let valorDaTaxa = document.getElementById("valorDaTaxa");
let qntPagantes = document.getElementById("qntPagantes");
let desconto = 0;
let valorConta = 0;
let valorTaxa = 0;
let pagantes = 0;

document.getElementById("calcular").addEventListener("click", function(event) {
  event.preventDefault();

  valorConta = parseFloat(valorDaConta.value);
  valorTaxa = parseFloat(valorDaTaxa.value);
  pagantes= parseInt(qntPagantes.value);

  if (!isNaN(valorConta) && !isNaN(valorTaxa) && !isNaN(pagantes) && pagantes > 0) {
    document.getElementById("section1").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  } else {
    alert("Por favor, insira valores válidos.");
  }


  // alert(`Valor da Conta: ${valorConta}\nValor da Taxa: ${valorTaxa}\nQuantidade de Pagantes: ${pagantes}`);
  // console.log(`Valor da Conta: ${valorConta}`);
  // console.log(`Valor da Taxa: ${valorTaxa}`);
  // console.log(`Quantidade de Pagantes: ${pagantes}`);
});

document.getElementById("X").addEventListener("click", function() {

  document.getElementById("section1").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
})

document.getElementById("X2").addEventListener("click", function() {

  document.getElementById("section2").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
})

document.getElementById("Sim").addEventListener("click", function() {

  desconto = 0.9;

  document.getElementById("section2").classList.add("show");
  document.getElementById("section1").classList.remove("show");

  document.getElementById("p1").innerHTML = `Total do consumo: R$ ${(valorConta * desconto).toFixed(2)}`;
  document.getElementById("p2").innerHTML = `Taxa de serviço: R$ ${valorTaxa.toFixed(2)}`;
  document.getElementById("p3").innerHTML = `Total por pessoa: R$ ${((valorConta * desconto + valorTaxa) / pagantes).toFixed(2)}`;

  // alert(`${desconto}`);
  // console.log(`${desconto}`);
});

document.getElementById("Nao").addEventListener("click", function() {

  document.getElementById("section2").classList.add("show");
  document.getElementById("section1").classList.remove("show");

  document.getElementById("p1").innerHTML = `Total do consumo: R$ ${valorConta.toFixed(2)}`;
  document.getElementById("p2").innerHTML = `Taxa de serviço: R$ ${valorTaxa.toFixed(2)}`;
  document.getElementById("p3").innerHTML = `Total por pessoa: R$ ${((valorConta + valorTaxa) / pagantes).toFixed(2)}`;
});

document.getElementById("concluir").addEventListener("click", function() {

  document.getElementById("section2").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
  location.reload();
});