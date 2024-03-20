class MenorMaiordetres
{
    #number1;
    #number2;
    #number3;

    constructor(number1,number2,number3)
    {
        this.#number1= number1;
        this.#number1= number2;
        this.#number3= number3;
    }

    set number1(number){this.#number1=number} get number1(){ return this.#number1}
    set number2(number){this.#number2=number} get number2(){ return this.#number2}
    set number3(number){this.#number3=number} get number1(){ return this.#number3}


    menor()
    {
        var vetor= [];
        var aux;
        vetor.push(this.#number1,this.#number2,this.#number3);

        for (let index = 0; index < vetor.length; index++) {
            if(aux== undefined)
            {
                aux=vetor[index];
            }

            else
            {
                if(vetor[index]< aux)
                {
                    aux = vetor[index];
                }
            }
            
        }

        document.querySelector("#menor").innerHTML="O menor valor entre os três números é "+ aux;

    }



    maior()
    {
        var vetor= [];
        var aux;
        vetor.push(this.#number1,this.#number2,this.#number3);

        for (let index = 0; index < vetor.length; index++) {
            if(aux== undefined)
            {
                aux=vetor[index];
            }

            else
            {
                if(vetor[index]> aux)
                {
                    aux = vetor[index];
                }
            }
            
        }

        document.querySelector("#maior").innerHTML="O maior valor entre os três números é "+ aux;

    }


    calcular()
    {
        this.menor();
        this.maior();
    }

}


var menoremaiornumero = new MenorMaiordetres();