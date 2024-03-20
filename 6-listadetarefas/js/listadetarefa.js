class Lista
{
    #descricao;
    #prioridade;
    #status;

    constructor(descricao,prioridade,status)
    {
        this.#descricao=descricao;
        this.#prioridade=prioridade;
        this.#status=status;
    }

    set descricao(string){this.#descricao=string} get descricao(){return this.#descricao};
    set prioridade(string){this.#prioridade=string} get prioridade(){return this.#prioridade};
    set status(string){this.#status=string} get status(){return this.#status};


}


var listatarefas=[];

function cadastrar()
{
   listatarefas.push(new Lista(document.querySelector('#descricao').value,document.querySelector('#prioridade').value,document.querySelector('#status').value)); 
   console.log(listatarefas);

   listar();
}


function listar()
{
    var html=''

    for (let index = 0; index < listatarefas.length; index++) {
        html= html + '<li id=list'+index+' class="list-group-item"><b>Descrição:</b>'+listatarefas[index].descricao+' <b>Prioridade:</b>'+listatarefas[index].prioridade+' <b>Status:</b>'+listatarefas[index].status+'  <button class="btn btn-danger" onclick=deletar('+index+') ><i class="bi bi-trash"></i></button>   <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=alt('+index+') ><i class="bi bi-pencil"></i></button></li>';
        
    }

    document.querySelector('#listatela').innerHTML=html;

}


function deletar(position)
{
 listatarefas.splice(position, 1);
 listar();
}


function alt(index)
{
    document.querySelector('#altdescricao').value=listatarefas[index].descricao;
    document.querySelector('#altprioridade').value=listatarefas[index].prioridade;
    document.querySelector('#altstatus').value=listatarefas[index].status;

    document.querySelector('#identificador').value=index;
}



function alterar(index)
{
    listatarefas[index].descricao=document.querySelector('#altdescricao').value;
    listatarefas[index].prioridade= document.querySelector('#altprioridade').value;
    listatarefas[index].status= document.querySelector('#altstatus').value;

    
    listar();

}


