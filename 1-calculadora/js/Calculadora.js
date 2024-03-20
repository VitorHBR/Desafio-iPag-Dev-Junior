class Calculadora
{
    #number1;
    #number2;
    #operation;

    constructor(number1,number2,operation)
    {
        this.#number1=number1;
        this.#number2= number2;
        this.#operation=operation;
    }

    set number1(number){this.#number1=number} get number1(){ return this.#number1}
    set number2(number){this.#number2=number} get number2(){ return this.#number2}
    set operation(operation){this.#operation=operation} get operation(){ return this.#operation}

    soma()
    {
       return Number(this.#number1) + Number(this.#number2);
    }

    subtracao()
    {
     return this.#number1 - this.#number2;
    }

    divisao()
    {
      return this.#number1 / this.#number2;
    }

    multiplicacao()
    {
       return this.#number1 * this.#number2;
    }



    opt(op)
    {
        switch (op) {
            case '+':
                document.querySelector('#result').innerHTML=this.soma();
                break;

            case '-':
                document.querySelector('#result').innerHTML=this.subtracao();
                break;
                
            case '*':
                document.querySelector('#result').innerHTML=this.multiplicacao();
                break;

            case '/':
                document.querySelector('#result').innerHTML=this.divisao();
                break;        
        
            default:
                break;
        }
    }

}

var calc = new Calculadora();
