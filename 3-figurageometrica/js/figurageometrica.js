 class FiguraGeometrica
{   #tipo;
    #base;
    #altura;
    #raio;
    

    constructor(tipo,base,altura,raio)
    {   this.#tipo=tipo;
        this.#altura=altura;
        this.#base=base;
        this.#raio=raio;
    }
    set tipo(formato){this.#tipo=formato} get tipo(){this.#tipo};
    set base(dimensao){this.#base=dimensao} get base(){this.#base};
    set altura(dimensao){this.#altura=dimensao} get altura(){this.#altura};
    set raio(dimensao){this.#raio=dimensao} get raio(){this.#raio};



    VerificaTipo(formato)
    {   document.querySelector('#result').innerHTML='';
        switch (formato) {
            case 'quadrado':
                document.querySelector("#base").removeAttribute("disabled");
                document.querySelector("#altura").setAttribute('disabled','true');
                document.querySelector("#raio").setAttribute('disabled','true');

                document.querySelector("#altura").value='';
                document.querySelector("#raio").value='';
                
                break;

            case 'retangulo':
                document.querySelector("#base").removeAttribute("disabled");
                document.querySelector("#altura").removeAttribute("disabled");
                document.querySelector("#raio").setAttribute('disabled','true');
                
                document.querySelector("#raio").value='';
                break;

            case 'triangulo':
                document.querySelector("#base").removeAttribute("disabled");
                document.querySelector("#altura").removeAttribute("disabled");
                document.querySelector("#raio").setAttribute('disabled','true');

                
                document.querySelector("#raio").value='';
                break;

            case 'circulo':
                document.querySelector("#base").setAttribute('disabled','true');
                document.querySelector("#altura").setAttribute('disabled','true');
                document.querySelector("#raio").removeAttribute("disabled");
               
                document.querySelector("#altura").value='';
                document.querySelector("#base").value='';
                break;

               
        
            default:
                break;
        }
    }


   

}



class Quadrado extends FiguraGeometrica
{   
    constructor(base)
    {
        super(base);
    }

    
    CalculoArea()
    {  
        document.querySelector("#result").innerHTML='Área =' +base.value * base.value;
    }
}

class Retangulo extends FiguraGeometrica
{
    constructor(base,altura)
    {
        super(base,altura)
        
    }

    CalculoArea()
    {
        document.querySelector("#result").innerHTML='Área =' + base.value * altura.value;
    }
}

class Triangulo extends FiguraGeometrica
{   
    constructor(base,altura)
    {
        super(base,altura)
    }

    CalculoArea()
    {
        document.querySelector("#result").innerHTML='Área =' + (base.value * altura.value)/2;
    }

}

class Circulo  extends FiguraGeometrica
{
    constructor(raio)
    {
        super(raio)
    }

    CalculoArea()
    {
        document.querySelector("#result").innerHTML='Área =' + raio.value * raio.value * Math.PI;
    }

}

var Geometria = new FiguraGeometrica();
var FiguraQuadrado = new Quadrado();
var FiguraRetangulo = new Retangulo();
var FiguraTriangulo = new Triangulo();
var FiguraCirculo =  new Circulo();



function calcular(formato)
{
    switch (formato) {
        case 'quadrado':
            FiguraQuadrado.base=document.querySelector('#base').value;
            FiguraQuadrado.CalculoArea();
            
            break;

        case 'retangulo':
            FiguraRetangulo.base=document.querySelector('#base').value;
            FiguraRetangulo.altura=document.querySelector('#altura').value;
            FiguraRetangulo.CalculoArea();
           
            break;

        case 'triangulo':
            FiguraTriangulo.base=document.querySelector('#base').value;
            FiguraTriangulo.altura=document.querySelector('#altura').value;
            FiguraTriangulo.CalculoArea();
           
            break;

        case 'circulo':
            FiguraCirculo.raio=document.querySelector('#raio').value;
            FiguraCirculo.CalculoArea();
           
            break;

           
    
        default:
            break;
    }
}