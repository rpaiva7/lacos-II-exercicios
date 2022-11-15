
/*  *//* # Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
``` */

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let i=0; i<= maioresPaises.length-1; i++) {
    console.log(`${i+1} - ${maioresPaises[i]}`);
}

// Obs. Se eu tirar o -1 do length ele aparece um 6º elemento no ranking como undefined. Se eu tirar o +1 do i do console.log, ele começa a contar do 0, e não do 1 como pede o exercício.