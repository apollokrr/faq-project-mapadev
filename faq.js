// buscar os itens da tela
const itensPerguntasERespostas = document.querySelectorAll('.item');


// entenrder que o item foi clicado
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {
    // verificar se a pergunta clicada está ativa
        const estaAtiva = item.classList.contains('ativo')
        
        // se a pergunta nao esta ativa
        if(!estaAtiva) {
            //eu preciso fechar todas
            itensPerguntasERespostas.forEach(function(item) {
                item.classList.remove('ativo')
            })

            //abrir a resposta atual
            item.classList.add('ativo')
        //se a pergunta estiver ativa
        } else {
            //abrir a resposta atual
            item.classList.remove('ativo')
        }
    })
})

