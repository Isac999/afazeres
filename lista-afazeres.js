console.log('Opções:')
console.log('[1] Adicionar a lista')
console.log('[2] Remover todos os elementos da lista')
console.log('[3] Listar todos os elementos')
console.log('[4] Remover um elemento da lista')
console.log('[5] Sair')

let lista = ['Comprar 10x pães']

let option = parseInt(prompt('Escolha uma opção: '))
let bool = true

while (bool) {
    if (option) {
        if (option === 1) {
            let item = prompt('Adicione um elemento a sua lista de a fazeres!')
            lista.push(item)
            option = parseInt(prompt('Escolha uma outra opção: '))
        } else if (option === 2) {
            let item = prompt('Todos os elementos serão REMOVIDOS!!!! (S/N)').toLowerCase()
            switch (item) {
                case 's':
                    lista.splice(0,)
                    console.log('  ')
                    console.log('Todos os elementos foram removidos!')
                    option = parseInt(prompt('Escolha uma outra opção: '))
                    break
                case 'n':
                    console.log('  ')
                    console.log('Operação de limpeza cancelada')
                    option = parseInt(prompt('Escolha uma outra opção: '))
                    break
                default:
                    console.log('  ')
                    console.log('Opção inválida! ESCOLHA: S/N da proxima vez')
                    option = parseInt(prompt('Escolha uma outra opção: '))
                    break
            }
        } else if (option === 3) {
            console.log('  ')
            console.log('LISTA DE TAREFAS: ')
            for (let elemento of lista) {
                console.log(`---> ${elemento}`)
            }
            option = parseInt(prompt('Escolha uma outra opção: '))
        } else if (option === 4) {
            let remover = parseInt(prompt('Qual item deseja remover?'))
            let value = lista[remover-1]
            lista.splice(remover-1, 1)
            console.log('  ')
            console.log(`Você removeu: ${value}`)
            option = parseInt(prompt('Escolha uma outra opção: '))
        } else if (option === 5) {
            console.log('  ')
            console.log('Você encerrou o programa')
            option = false
            bool = false
        } else {
            console.log('  ')
            console.log('Opção inexistente!')
            option = parseInt(prompt('Escolha uma outra opção: '))
        }
    } else {
        console.log('  ')
        console.log('A opção deve ser um número inteiro!')
        option = parseInt(prompt('Escolha uma opção: '))
    }
}