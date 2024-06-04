function ex89() {
  var texto = entrada.value;
  var fim = texto.length - 1;

  for (var ini = texto.length; ini > fim; ini -= 1) {
    resposta.innerHTML += texto.charAt(ini);
  }
}
