class AdivinhaNumero
{
    #number;
    #tentativa
    constructor ()
    {
        this.#number =  Math.floor((Math.random() * 100) + 1);
        this.#tentativa=0;
    }

    set number(valor){this.#number=valor} get number(){return this.#number}
    set tentativa(valor){this.#tentativa=valor} get tentativa(){ return this.#tentativa}


    VerificaAcerto(valor)
    {   if(valor >=1 && valor <=100)
        {
            if (valor == this.#number)
        {
            document.querySelector('#tentativa').innerHTML="Acertou, parabéns!";
            this.#tentativa=0;
        }

        else
        {
            if(valor > this.#number)
            {
                document.querySelector('#tentativa').innerHTML="seu número está acima. Tentativa : "+ this.#tentativa;
                this.#tentativa+=1;
            }

            else
            {
                document.querySelector('#tentativa').innerHTML="seu número está abaixo. Tentativa : "+ this.#tentativa;
                this.#tentativa+=1;
            }
        }

        }
        

       else
       alert('digite um número entre 1 e 100')
    }

}

var adivinha = new AdivinhaNumero();