class FiguraGeometrica {
  constructor(nome) {
    this.nome = nome;
  }
  calcularArea() {
    throw new Error("Método abstrato 'calcularArea' não implementado!");
  }
    
  getInformacoes() {
    return `Nome: ${this.nome}`;
  }
}

class Quadrado extends FiguraGeometrica {
  constructor(lado) {
    super("Quadrado");
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

class Triangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super("Triângulo");
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

const quadrado1 = new Quadrado(5);
const quadrado2 = new Quadrado(10);

const triangulo1 = new Triangulo(4, 6);

console.log(quadrado1.getInformacoes());
console.log(quadrado1.calcularArea());

console.log(quadrado2.getInformacoes());
console.log(quadrado2.calcularArea());

console.log(triangulo1.getInformacoes());
console.log(triangulo1.calcularArea());
