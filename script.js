function calculateCompoundInterest() {
  // Obtém os valores dos inputs
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const time = parseInt(document.getElementById('time').value);

  // Calcula o valor futuro
  const futureValue = principal * Math.pow(1 + rate, time);

  // Exibe o resultado
  document.getElementById('result').innerText = futureValue.toFixed(2);
}
