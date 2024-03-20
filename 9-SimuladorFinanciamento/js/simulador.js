// Função para calcular o valor da parcela (PMT)
function calcularValorParcela(valorTotalFinanciado, taxaJurosMensal, quantidadeParcelas) {
    const parcela = valorTotalFinanciado * ((taxaJurosMensal*0.1) / (1 - Math.pow(1 + (taxaJurosMensal*0.1), -quantidadeParcelas)));
    return parcela.toFixed(2);
  }
  
  // Função para calcular o custo efetivo total (CET)
  function calcularCET(valorParcela, quantidadeParcelas, valorTotalFinanciado) {
    const cet = (valorParcela * quantidadeParcelas) - valorTotalFinanciado;
    return cet.toFixed(2);
  }
  
  // Função para calcular a taxa efetiva mensal (im)
  function calcularTaxaEfetivaMensal(taxaJurosAnual) {
    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual, 1/12) - 1;
    return taxaJurosMensal.toFixed(6); // Arredonda para 6 casas decimais
  }
  
  // Função para simular financiamento
  function simularFinanciamento(valorTotalFinanciado, quantidadeParcelas, taxaJurosAnual) {
    const taxaJurosMensal = calcularTaxaEfetivaMensal(taxaJurosAnual / 100); // Convertendo a taxa anual para mensal
    const valorParcela = calcularValorParcela(valorTotalFinanciado, taxaJurosMensal, quantidadeParcelas);
    const CET = calcularCET(valorParcela, quantidadeParcelas, valorTotalFinanciado);
  



    document.querySelector('#resultvalor').innerHTML=`Valor da parcela: R$ ${valorParcela}`
    document.querySelector('#resultcustototal').innerHTML= `Valor total a ser pago: R$ ${valorParcela * quantidadeParcelas}`
    document.querySelector('#resultaxamensal').innerHTML= `Taxa efetiva mensal: ${taxaJurosMensal * 100}%`

    console.log(`Valor da parcela: R$ ${valorParcela}`);
    console.log(`Valor total a ser pago: R$ ${valorParcela * quantidadeParcelas}`);
    console.log(`Custo efetivo total do financiamento: R$ ${CET}`);
    console.log(`Taxa efetiva mensal: ${taxaJurosMensal * 100}%`);
  }
  
  // Simulação de financiamento
  /*const valorTotalFinanciado = 100000; // Valor total financiado (R$)
  const quantidadeParcelas = 12; // Quantidade de parcelas
  const taxaJurosAnual = 10; // Taxa de juros nominal anual (%)*/
  
  console.log("Simulação de Financiamento:");

  
  
  