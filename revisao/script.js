
//Criar um programa que ligue para as pessoas que não compraram nada na minha loja - for+for com array

const clientes = [
    {
        nome: 'Roberto',
        endereço: 'Rua Misteriosa, 5 - Recife-PE',
        telefone: '81-99999-5555',
        compras: []
    },
    {
        nome: 'Elza',
        endereço: 'Rua do Sucesso, 10 - São Paulo-SP',
        telefone: '11-99999-2222',
        compras: [
            {
                item: 'Calça Jeans',
                qtd: 1,
                cores: ['vinho']
            }
        ]
    },
    {
        nome: 'Humberto',
        endereço: 'Rua São Salvador, 88 - João Pessoa-PB',
        telefone: '83-99999-4444',
        compras: [
            {
                item: 'Camisa',
                qtd: 3,
                cores: ['branco', 'azul', 'verde']
            },
            {
                item: 'Cueca',
                qtd: 1,
                cores: ['branco']
            }
        ]
    },
    {
        nome: 'Bárbara',
        endereço: 'Rua das Ninfas, 74 - Olinda-PE',
        telefone: '81-99999-1111',
        compras: []
    },
    {
        nome: 'Lucas',
        endereço: 'Rua atrás da minha casa, 79 - Rio de Janeiro-RJ',
        telefone: '81-99999-5555',
        compras: [
            {
                item: 'Bermuda',
                qtd: 1,
                cores: ['preto']
            },
            {
                item: 'Boné',
                qtd: 1,
                cores: ['rosa choque']
            },
            {
                item: 'camisola',
                qtd: 1,
                cores: ['rosa bebê']
            }
        ]
    }
]

clientes[0]

const clientesSemCompras = [] // É possível criar uma nova variável para localizar os clientes que não compraram nada.

for(let i = 0; i < clientes.length; i++)// forma clássica para percorrer um array todo
{
    if (clientes[i].compras.length === 0){ //Se achar um array de compras vazio, me retorne esse cliente para eu visualizar no console.log. Esse código localiza os clientes que não compraram nada. Foi necessário criar uma nova variável clientesSemCompras para rodá-lo.
          clientesSemCompras.push(clientes[i])
    //Passei no laço, confirmamos que é verdade. Agora eu adiciono os clientes que não compraram nada na nova variável clientesSemCompras através do push.  
    }
    //console.log(clientes[i]); // imprime todo o array pai
}

//console.log(clientesSemCompras);

for(let i = 0; i < clientes.length; i++){
    for(let j = 0; j < clientes[i].compras.length; j++){
        for(let k = 0; k < clientes[i].compras[j].cores.length; k++){
            
        }
          // console.log('Cor do item:', clientes[i].compras[j].cores[k], 'Cliente que comprou o item:', clientes[i].nome);
    // Foi criado um laço adicional para o array compras e outro laço adicional para o array cores. Enquanto tiver arrays eu posso criar novos laços para percorrer esses arrays. Um array sempre vai estar dentro de colchetes. 

    } // enquanto o compras tiver algum conteúdo a ser percorrido eu quero que o código percorra todos os compras que estão dentro desse array pai[i] e me traga os conteúdos que estão dentro deles.
    //console.log('Item', clientes[i].compras[j], 'Cliente:', clientes[i].nome);
}

// Com for...of

/* for (const cliente of clientes){
    console.log(cliente); // o que foi feito aqui com for...of foi basicamente a mesma coisa que foi feita na linha 85. */ 
               
    //for (vãriável nova que quero guardar a info...of...array que quero percorrer. O for...of sempre segue esse padrão.
    
    /* for (const cliente of clientes){
        for(const compra of cliente.compras){
            console.log(compra, cliente.nome);
        }
    } // O que foi feito aqui com for...of foi a mesma coisa que foi feito na linha 86, a diferença é que aqui já percorre todo o array (length) e incrementa (i++) de forma automática. */

    for (const cliente of clientes){
        for (const compra of cliente.compras){
            for (const cor of compra.cores){ // O que foi feito aqui na linha 112 é a mesma coisa que foi feito na linha 88.
                console.log(cor);
            }
        }
    }

    // Obs. No for...of sempre uso a nova variável que eu criei para puxar as informações do array que eu quero. 