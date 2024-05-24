function calculateCompoundInterest() {
  // Obtém os valores dos inputs
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const time = parseInt(document.getElementById('time').value);
  const taxRate = parseFloat(document.getElementById('tax').value) / 100;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(taxRate)) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Calcula o valor futuro
  const futureValue = principal * Math.pow(1 + rate, time);

  // Calcula o rendimento
  const earnings = futureValue - principal;

  // Calcula o imposto de renda
  const tax = earnings * taxRate;

  // Calcula o valor lucro após o desconto do imposto de renda
  const netPrincipal = futureValue - tax;

  // Exibe os resultados
  document.getElementById('result').innerText = futureValue.toFixed(2);
  document.getElementById('earnings').innerText = earnings.toFixed(2);
  document.getElementById('ir').innerText = tax.toFixed(2);
  document.getElementById('net-principal').innerText = netPrincipal.toFixed(2);
}
