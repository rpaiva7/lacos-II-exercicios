
/* # Exercício 2

Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
``` */

const num = prompt('Entre 1 e 10, qual número da tabuada você gostaria de saber?')
let tabuada

console.log(`Tabuada do número ${num}!`);
for(let i=0; i <= 10; i++){
    tabuada = i * num
    console.log(`${num}x${i}=${tabuada}`);7
} 