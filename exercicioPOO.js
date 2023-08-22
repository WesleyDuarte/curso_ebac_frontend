function Copo(cor,formato){
    this.cor = cor;
    this.formato = formato;
}

function Tulipa(bebida){
    this.bebida = bebida;
    Copo.call(this, 'transparente', 'fundo');
}

function Taca(bebida){
    this.bebida = bebida;
    Copo.call(this, 'transparente', 'cone');
}

const copoGenerico = new Copo('azul','redondo');
const tulipa = new Tulipa('Cerveja');
const taca = new Taca('Vinho');

console.log(copoGenerico);
console.log(tulipa);
console.log(taca);