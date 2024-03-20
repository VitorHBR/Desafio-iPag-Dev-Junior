class ValidaSenha 
{
    #senha

    constructor (senha)
    {
        this.#senha=senha;
    }

    set senha(valor){this.#senha=valor} get senha(){return this.#senha}


    validar(valor)
    {   var isnumber=false;
        var uppercase=false;
        var iscaracter=false;
        
        this.#senha=valor;
        console.log(this.#senha.length)
        if(this.#senha.length>=8)
        {    document.querySelector('#alert').hidden = true;
             document.querySelector('#alert').innerHTML='';
            for (let index = 0; index < this.#senha.length; index++) {
                if(Number.isInteger(Number.parseInt(this.#senha[index]))==true)
                isnumber=true;

                else
                {
                    if(this.#senha[index].toUpperCase()==this.#senha[index])
                    uppercase=true;

                    else
                    {
                        iscaracter=true;
                    }
                }
                
            }

            console.log('isnumber ' + isnumber + 'upercase '+ uppercase + 'iscaracter ' + iscaracter  )
            
            if(isnumber==false)
            {   console.log('test')
                document.querySelector('#alert').hidden = false;
                document.querySelector('#alert').innerHTML= document.querySelector('#alert').innerHTML+ '\n A senha deve conter número.';
            }

            if(uppercase==false)
            {
                document.querySelector('#alert').hidden = false;
                document.querySelector('#alert').innerHTML=  document.querySelector('#alert').innerHTML+ '\n A senha deve conter maiúscula.';
            }

            if(iscaracter==false)
            {
                document.querySelector('#alert').hidden = false;
                document.querySelector('#alert').innerHTML=  document.querySelector('#alert').innerHTML+'\n A senha deve conter minúscula.';
            }


            if(isnumber== true && uppercase==true && iscaracter==true)
            {
                
                document.querySelector('#alertsucess').hidden = false;
            }

            else
            document.querySelector('#alertsucess').hidden = true;

        }

        else
        {   document.querySelector('#alert').innerHTML='senha deve conter no mínimo 8 caracteres';
            document.querySelector('#alert').hidden = false;
        }
    }

}

var senhauser = new ValidaSenha();