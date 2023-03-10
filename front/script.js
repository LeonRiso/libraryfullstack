const uri = 'http://localhost:3000/livro'
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')


fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err))

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "id":cadastro.id.value,
        "titulo":cadastro.nome.value,
        "autor":cadastro.autor.value,
        "DataEmprest":cadastro.DataEmprest.value,
        "DataPrevDev":cadastro.DataPrevDev.value,
        "nome":cadastro.NomeUser.value,
        "cpf":cadastro.cpf.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let col6 = document.createElement('td')
        let col7 = document.createElement('td')
        let col8 = document.createElement('td')
        let del = document.createElement('button')
        del.innerHTML = '[-]'
        del.setAttribute('onclick', `excluirItem('${e.id}')`)
        col1.innerHTML = e.id
        col2.innerHTML = e.titulo
        col3.innerHTML = e.autor
        col4.innerHTML = e.DataEmprest
        col5.innerHTML = e.DataPrevDev
        col6.innerHTML = e.NomeUser
        col7.innerHTML = e.cpf
        col8.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        linha.appendChild(col6)
        linha.appendChild(col7)
        linha.appendChild(col8)
        corpo.appendChild(linha)
    })
}

function excluirItem(i) {
    if (confirm('Valida Exclusao'))
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}