function calculateCompoundInterest() {
  // Obtém os valores dos inputs
  const principalInput = document.getElementById('principal').value.trim();
  const rateInput = document.getElementById('rate').value.trim();
  const timeInput = document.getElementById('time').value.trim();
  const taxInput = document.getElementById('tax').value.trim();

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (
    principalInput === '' ||
    rateInput === '' ||
    timeInput === '' ||
    taxInput === ''
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const principal = parseFloat(principalInput);
  const rate = parseFloat(rateInput) / 100;
  const time = parseInt(timeInput);
  const taxRate = parseFloat(taxInput) / 100;

  // Verifica se os valores inseridos são números válidos
  if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(taxRate)) {
    alert('Por favor, insira valores numéricos válidos.');
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
