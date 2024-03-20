// Função para obter os repositórios de um usuário do GitHub
async function getRepositories(username) {
  var html='';
  fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => repositories= response.json())
  .then(data => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      console.log('Nome:',  data[index].name);
      console.log('Descrição:', data[index].description || 'Nenhuma descrição disponível');
      console.log('Linguagem:', data[index].language || 'Não especificada');
      console.log('Estrelas:', data[index].stargazers_count);
      html=html+'<li class="list-group-item">Nome: '+  data[index].name+'<br> Descrição: '+  data[index].description+'<br> Linguagem: '+  data[index].language+'<br> Estrelas: '+  data[index].stargazers_count+'</li>'
    }
    document.querySelector('#lista').innerHTML=html;
    }
    
  )
  .catch(error =>{console.error(error);alert('Usuário não encontrado')});
  }
  
  var repositories;
  function buscar(user)
  {
    repositories=getRepositories(user) ;
    

  }
  
  

  

 