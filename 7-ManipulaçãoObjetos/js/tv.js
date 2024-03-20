// Definição da classe TV
class TV {
    constructor(brand) {
      this.brand = brand;
      this.power = false;
    }
  
    // Método para ligar a TV
    turnOn() {
      this.power = true;
      console.log(`${this.brand} TV ligada.`);
      document.querySelector('#ligar').innerHTML= `Ligar: ${this.brand} TV ligada.`;
    }
  
    // Método para desligar a TV
    turnOff() {
      this.power = false;
      console.log(`${this.brand} TV desligada.`);
      document.querySelector('#desligar').innerHTML= `Deligar: ${this.brand} TV desligada.`
      
    }
  }
  
  // Definição da classe ControleRemoto
  class ControleRemoto {
    constructor(brand) {
      this.brand = brand;
    }
  
    // Método para conectar o controle a uma TV
    conectar(tv) {
      if (this.brand === tv.brand) {
        console.log(`Controle ${this.brand} conectado à ${tv.brand} TV.`);
        document.querySelector('#result').innerHTML= `Controle ${this.brand} conectado à ${tv.brand} TV.`
        this.tv = tv;
      } else {
        console.log(`Controle ${this.brand} não é compatível com ${tv.brand} TV.`);
        document.querySelector('#result').innerHTML= `Controle ${this.brand} não é compatível com ${tv.brand} TV.`;
      }
    }
  
    // Método para ligar a TV
    ligar() {
      if (this.tv) {
        this.tv.turnOn();
      } else {
        console.log('Nenhuma TV conectada ao controle.');
        document.querySelector('#ligar').innerHTML = 'Ligar: Nenhuma TV conectada ao controle.';
      }
    }
  
    // Método para desligar a TV
    desligar() {
      if (this.tv) {
        this.tv.turnOff();
      } else {
        console.log('Nenhuma TV conectada ao controle.');
        document.querySelector('#desligar').innerHTML = 'Desligar: Nenhuma TV conectada ao controle.'
      }
    }
  }
  
  // Criando instâncias de TVs
  const samsungTV = new TV('Samsung');
  const lgTV = new TV('LG');
  const sonyTV = new TV('Sony');
  
  // Criando instâncias de Controles Remotos
  const samsungRemote = new ControleRemoto('Samsung');
  const lgRemote = new ControleRemoto('LG');
  const sonyRemote = new ControleRemoto('Sony');
  const panasonicRemote = new ControleRemoto('Panasonic'); // Controle para uma marca não compatível
  

  function conectar(controle,tv)
  { console.log('controle ' + controle + 'tv ' +tv);
    switch (controle) {
        case 'Samsung':
            if(tv=='Samsung')
            {samsungRemote.conectar(samsungTV);
            samsungRemote.ligar();
            samsungRemote.desligar();}
            if(tv=='LG')
            {samsungRemote.conectar(lgTV);
            samsungRemote.ligar();
            samsungRemote.desligar();}
            if(tv=='Sony')
            {samsungRemote.conectar(sonyTV);
            samsungRemote.ligar();
            samsungRemote.desligar();}
           
            break;
        case 'LG':
            if(tv=='Samsung')
            {lgRemote.conectar(samsungTV);
            lgRemote.ligar();
            lgRemote.desligar();}
            if(tv=='LG')
            {lgRemote.conectar(lgTV);
            lgRemote.ligar();
            lgRemote.desligar();}
            if(tv=='Sony')
            {lgRemote.conectar(sonyTV);
            lgRemote.ligar();
            lgRemote.desligar();}
            break;

        case 'Sony':
            if(tv=='Samsung')
            {sonyRemote.conectar(samsungTV);
            sonyRemote.ligar();
            sonyRemote.desligar();}
            if(tv=='LG')
            {sonyRemote.conectar(lgTV);
            sonyRemote.ligar();
            sonyRemote.desligar();}
            if(tv=='Sony')
            {sonyRemote.conectar(sonyTV);
            sonyRemote.ligar();
            sonyRemote.desligar();}
            break;

        case 'Panasonic':
            if(tv=='Samsung')
            {panasonicRemote.conectar(samsungTV);
            panasonicRemote.ligar();
            panasonicRemote.desligar();}
            if(tv=='LG')
            {panasonicRemote.conectar(lgTV);
            panasonicRemote.ligar();
            panasonicRemote.desligar();}
            if(tv=='Sony')
            {panasonicRemote.conectar(sonyTV);
            panasonicRemote.ligar();
            panasonicRemote.desligar();}
            break;
        
    
        default:
            break;
    }
  }
  