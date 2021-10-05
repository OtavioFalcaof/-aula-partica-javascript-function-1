// 1) Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
// a) Chamar a função e exibir o resultado no console.

const mult = (num1, num2) => {
    return num1 * num2;
};

console.log(mult(2, 5));

// 2) Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
// a) Chamar a função e exibir o resultado no console.

const num = (num1, num2, num3) => {
    const array = [num1, num2, num3];
    const greaterNumber = Math.max(...array);
    return greaterNumber;
};

console.log(num(25, 48, 70));

// 3) Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
// a) Chamar a função e exibir no console o resultado.

const valor = (num) => {
    if (num % 2 === 0) {
        return 'é par';
    } else {
        return 'é ímpar';
    }
};

console.log(valor(220));
console.log(valor(5));
