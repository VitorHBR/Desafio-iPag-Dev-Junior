function lerArquivoCSV(arquivo, callback) {
    const leitor = new FileReader();
  
    leitor.onload = function (evento) {
      const conteudo = evento.target.result;
      callback(conteudo);
    };
  
    leitor.readAsText(arquivo);
  }
  
  const inputArquivo = document.querySelector('#arquivoCSV');
  
  inputArquivo.addEventListener('change', function (evento) {
    const arquivo = evento.target.files[0];
  
   
    lerArquivoCSV(arquivo, function (conteudo) {
        const arrayCSV = converterCSVparaArray(conteudo);
        console.log(arrayCSV);
        vetor= arrayCSV;
        transformavetoremobj();
      });
  });


  function converterCSVparaArray(conteudoCSV) {
    const linhas = conteudoCSV.split('\n');
    const arrayCSV = [];
  
    linhas.forEach(function (linha) {
      const valores = linha.split(',');
      arrayCSV.push(valores);
    });
  
    return arrayCSV;
  }

  var vetor;

class Produtos
{
    constructor(tipo,unidadevendida,receitatotal,custototal,lucrototal)
    {
      this.tipo=tipo; //2
      this.unidadevendida=unidadevendida;//8
      this.receitatotal=receitatotal;//11
      this.custototal= custototal;//12
      this.lucrototal= lucrototal;//13
    }
}

var obj;
var agrupados;
// Função para calcular estatísticas de vendas por tipo de produto
async function transformavetoremobj() {
  var vendas = [];
  var produtos=[];
    
    //coleta de chaves de produtos
    for (let index = 0; index < vetor.length; index++) {
        
        if(produtos.includes(vetor[index][2])==false)
        {   
            produtos.push(vetor[index][2]);
        }
        
    }
 

    
    //verifica venda de cada produto e transforma em um objeto
    for (let index = 0; index < vetor.length; index++) {
        
        for (let j = 0; j < produtos.length; j++) {
            if(vetor[index][2] == produtos[j])
        {
           vendas.push(new Produtos(produtos[j],vetor[index][8],vetor[index][11],vetor[index][12],vetor[index][13]))
        }
            
        }
        
        
    }

  
    //faz o agrupamento do objeto por tipo
    console.log(Object.groupBy(vendas, ({ tipo }) => tipo))
    obj=Object.groupBy(vendas, ({ tipo }) => tipo);
    

    


 

    
   return 0;
}

// Função para calcular estatísticas de vendas por tipo de produto e região
function calcularEstatisticasPorTipoEregiao(dadosCSV) {
   
}

// Função para calcular o tipo de produto com maior receita de cada país
function calcularMaiorReceitaPorPais(dadosCSV) {
   
}


// Supondo que 'vetor' contenha os dados do CSV, conforme seu código
/*
// Calcular e exibir as estatísticas
calcularEstatisticasPorTipoDeProduto();


const estatisticasPorTipoEregiao = calcularEstatisticasPorTipoEregiao(vetor);
console.log("Estatísticas por tipo de produto e região:", estatisticasPorTipoEregiao);

const maiorReceitaPorPais = calcularMaiorReceitaPorPais(vetor);
console.log("Tipo de produto com maior receita de cada país:", maiorReceitaPorPais);*/