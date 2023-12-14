function classificarTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero"; // Todos os lados iguais
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles"; // Pelo menos dois lados iguais
  } else {
    return "Escaleno"; // Todos os lados diferentes
  }
}

// Exemplo de uso:
const tipoTriangulo = classificarTriangulo(5, 5, 5); // Equilátero
console.log("Tipo de triângulo:", tipoTriangulo);
