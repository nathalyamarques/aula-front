function ex22() {
  var texto = entrada.value;

  if (texto == "A" || "E" || "I" || "O" || "U") {
    resposta.innerHTML = "A letra é vogal";
  } else {
    resposta.innerHTML = "A letra é consoante";
  }
}

function ex22Alt() {
  var texto = entrada.value;

  var vogal = ["A", "E", "I", "O", "U"];

  if (vogal.includes(texto) == true) {
    resposta.innerHTML = "A letra é vogal";
  } else {
    resposta.innerHTML = "A letra é consoante";
  }
}

function ex31() {
  var texto = entrada.value;
  if (texto == 1) {
    resposta.innerHTML = "Domingo";
  } else if (texto == 2) {
    resposta.innerHTML = "Segunda";
  } else if (texto == 3) {
    resposta.innerHTML = "Terça";
  } else if (texto == 4) {
    resposta.innerHTML = "Quarta";
  } else if (texto == 5) {
    resposta.innerHTML = "Quinta";
  } else if (texto == 6) {
    resposta.innerHTML = "Sexta";
  } else if (texto == 7) {
    resposta.innerHTML = "Sabado";
  } else {
    resposta.innerHTML = "Valor inválido";
  }
}

function ex31Alt() {
  var texto = entrada.value;
  var dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];

  var nome = dias[texto - 1];

  if (nome != undefined) {
    resposta.innerHTML = nome;
  } else {
    resposta.innerHTML = "Valor invalido";
  }
}

function ex54() {
  var fim = 50;
  for (var ini = 1; ini < fim; ini += 1) {
    if (ini % 2 == 0) {
      resposta.innerHTML += ini + " -> Par ";
    } else {
      resposta.innerHTML += ini + " -> Impar ";
    }
  }
}

function ex89() {
  var texto = entrada.value;
  console.log(texto);
  var fim = 0;

  for (var ini = texto.length; ini > fim; ini -= 1) {
    resposta.innerHTML += texto.charAt(ini);
  }
}

function ex97() {
    var notas = [];
    var alunos = ["Ana", 
    "Pedro", 
    "Paulo", 
    "João", 
    "Maria", 
    "Luiza",
    "Daniele", 
    "Marcos", 
    "Michele", 
    "Leandro"];

    for(var i = 0; i < 10; i += 1){
        var valor = prompt("Digite uma nota: "+ alunos[i]);
        notas.push(valor);
    }
    
    console.log(notas)
    resposta.innerHTML
}