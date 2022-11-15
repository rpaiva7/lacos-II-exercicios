
/* Exercício 1

Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

```bash
Jogador 1: 13, 15, 25, 34, 35
Jogador 2: 30, 48, 30, 12, 47 */


const artilhariaTemporada = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

if (artilhariaTemporada.length === 5){
    for (let i = 0; i < artilhariaTemporada.length; i++){
        let artilharia = `Jogador ${i + 1}: ` //Se eu tirar o +1 começa do jogador zero 0.
        for (let j = 0; j < artilhariaTemporada[i].length; j++){
            artilharia += `${artilhariaTemporada[i][j]}, ` //Se eu tirar o j daqui ele repete 5 vezes a artilharia das 5 temporadas. Se eu tirar o i ele repete as 5 artilharias diferentes para todos os jogadores.
        }
        console.log(artilharia);
    }
    } else {
        console.log('Deu ruim, foram rebaixados para a Série B!');
    }
