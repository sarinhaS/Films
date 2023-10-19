const btnGeneros = document.getElementById('btnGeneros')
const btnFilmes = document.getElementById('btnFilmes')
const main = document.getElementById('main')

let generos = [{nome: 'Suspense'}, {nome:'Comédia'}]
let filmes = [{nome: "Velozes e Furiosos", ano: 2020, genero : "Suspense"}, {nome: "American pie", ano: 2020, genero : "comedia"}]

const mostraFormAlterarGenero = (idx) => {
    main.innerText = ''

    const genero = generos[idx]

    const form = document.createElement('form')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Entre com o nome do genêro')
    input.setAttribute('id', 'nomeGenero')
    input.setAttribute('value', genero.nome)
    form.appendChild(input)

    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.innerText = 'Salvar Genêro'
    btn.addEventListener('click', () => {
        generos.splice(idx, 1, {nome: input.value})
        mostraTabelaGeneros()
    })
    form.appendChild(btn)

    const btn2 = document.createElement('button')
    btn2.setAttribute('type', 'button')
    btn2.innerText = 'Voltar'
    btn2.addEventListener('click', () => {
        mostraTabelaGeneros()
    })
    form.appendChild(btn2)

    main.appendChild(form)
}

const mostraFormNovoGenero = () => {
    main.innerText = ''

    const form = document.createElement('form')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Entre com o nome do genêro')
    input.setAttribute('id', 'nomeGenero')
    form.appendChild(input)

    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.innerText = 'Salvar Genêro'
    btn.addEventListener('click', () => {
        const genero = {nome: input.value}
        generos.push(genero)
        mostraTabelaGeneros()
    })
    form.appendChild(btn)

    const btn2 = document.createElement('button')
    btn2.setAttribute('type', 'button')
    btn2.innerText = 'Voltar'
    btn2.addEventListener('click', () => {
        mostraTabelaGeneros()
    })
    form.appendChild(btn2)

    main.appendChild(form)
}

const mostraTabelaGeneros = () => {
    main.innerText = ''

    // Criar uma tabela
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    const th1 = document.createElement('th')
    th1.innerText = 'Nome'
    const th2 = document.createElement('th')
    th2.innerText = 'Ações'

    tr.appendChild(th1)
    tr.appendChild(th2)

    thead.appendChild(tr)
    table.appendChild(thead)

    const tbody = document.createElement('tbody')

    if (generos.length === 0) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        td1.setAttribute('colspan', 2)
        td1.innerText = 'Nenhum genêro cadastrado'
        tr.appendChild(td1)
        tbody.appendChild(tr)
    }else {
        generos.forEach((g, idx) => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            td1.innerText = g.nome
            tr.appendChild(td1)
   
            const td2 = document.createElement('td')
   
            // Botão para alterar genêro
            const btn2 = document.createElement('button')
            btn2.setAttribute('type', 'button')
            btn2.innerText = 'Alterar'
            btn2.addEventListener('click', () => {
                mostraFormAlterarGenero(idx)
            })
            td2.appendChild(btn2)

            // Botão para remover genêro
            const btn = document.createElement('button')
            btn.setAttribute('type', 'button')
            btn.innerText = 'Remover'
            btn.addEventListener('click', () => {
                generos.splice(idx,1)
                //tbody.removeChild(tr)
                 mostraTabelaGeneros()
            })
            td2.appendChild(btn)
   
            tr.appendChild(td2)
   
            tbody.appendChild(tr)
        })
    }

    table.appendChild(tbody)

    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.innerText = 'Adicionar novo genêro'
    btn.addEventListener('click', mostraFormNovoGenero)

    main.appendChild(btn)
    main.appendChild(table)

}


// -------------------------------------------------------------------------

const formAlterarFilme = (idx) => {
    main.innerText = ''

    const filme = filmes[idx]
    console.log(filme, filmes, idx)

    const form = document.createElement('form')

    const input1 = document.createElement('input')
    input1.setAttribute('type', 'text')
    input1.setAttribute('placeholder', 'Entre com o nome do filme')
    input1.setAttribute('id', 'nomeFilme')
    input1.setAttribute('value', filme[idx].nome)
    const input2 = document.createElement('input')
    input2.setAttribute('type', 'text')
    input2.setAttribute('placeholder', 'Entre com o ano do filme')
    input2.setAttribute('id', 'anoFilme')
    input2.setAttribute('value', filme[idx].ano)
    const input3 = document.createElement('input')
    input3.setAttribute('type', 'text')
    input3.setAttribute('placeholder', 'Entre com o genêro do filme')
    input3.setAttribute('id', 'generoFilme')
    input3.setAttribute('value', filme[idx].genero)

    form.appendChild(input1)
    form.appendChild(input2)
    form.appendChild(input3)

    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.innerText = 'Salvar Genêro'
    btn.addEventListener('click', () => {
        filmes.splice(idx, 1, {nome: input1.value})
        filmes.splice(idx, 1, {ano: input2.value})
        filmes.splice(idx, 1, {genero: input3.value})
        mostraTabelaFilmes()
    })
    form.appendChild(btn)

    const btn2 = document.createElement('button')
    btn2.setAttribute('type', 'button')
    btn2.innerText = 'Voltar'
    btn2.addEventListener('click', () => {
        mostraTabelaFilmes()
    })
    form.appendChild(btn2)

    main.appendChild(form)
}

const formNovoFilme = () => {
    main.innerText = ''

    const form = document.createElement('form')

    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const input3 = document.createElement('input')

    input1.setAttribute('type', 'text')
    input1.setAttribute('placeholder', 'Nome do filme')
    input1.setAttribute('id', 'nomeFilme')

    input2.setAttribute('type', 'text')
    input2.setAttribute('placeholder', 'Ano')
    input2.setAttribute('id', 'anoFilme')

    input3.setAttribute('type', 'text')
    input3.setAttribute('placeholder', 'Gênero')
    input3.setAttribute('id', 'generoFilme')

    form.appendChild(input1)
    form.appendChild(input2)
    form.appendChild(input3)

    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.innerText = 'Salvar filme'
    btn.addEventListener('click', () => {
        const filme = {nome: input1.value, ano: input2.value, genero: input3.value}
        filmes.push(filme)
        mostraTabelaFilmes()
    })
    form.appendChild(btn)

    const btn2 = document.createElement('button')
    btn2.setAttribute('type', 'button')
    btn2.innerText = 'Voltar'
    btn2.addEventListener('click', () => {
        mostraTabelaFilmes()
    })
    form.appendChild(btn2)

    main.appendChild(form)
}

const mostraTabelaFilmes = () => {
    main.innerText = ''
   
    // Criar uma tabela
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    const th1 = document.createElement('th')
    th1.innerText = 'Nome'
    const th2 = document.createElement('th')
    th2.innerText = 'Ano'
    const th3 = document.createElement('th')
    th3.innerText = 'Genêro'
    const th4 = document.createElement('th')
    th4.innerText = 'Ações'
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    thead.appendChild(tr)
    table.appendChild(thead)
    const tbody = document.createElement('tbody')

    filmes.forEach((f, idx) => {

        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        td1.innerText = f.nome
        const td2 = document.createElement('td')
        td2.innerText = f.ano
        const td3 = document.createElement('td')
        td3.innerText = f.genero
        const btnAlterarFilme = document.createElement('button')
        btnAlterarFilme.setAttribute('type', 'button')
        btnAlterarFilme.innerText = 'Alterar'

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        

            // Botão para alterar filme
            btnAlterarFilme.addEventListener('click', () => {
               formAlterarFilme()
            })
            
            tr.appendChild(btnAlterarFilme)

            // Botão para remover filme
            const btn = document.createElement('button')
            btn.setAttribute('type', 'button')
            btn.innerText = 'Remover'
            btn.addEventListener('click', () => {
                //generos.splice(idx,1)
                //tbody.removeChild(tr)
                //mostraTabelaGeneros()
            })

        
            tr.appendChild(btn)
        tbody.appendChild(tr)
    })

    const btn = document.createElement('button')
    btn.setAttribute('type', 'button')
    btn.innerText = 'Adicionar novo filme'
    btn.addEventListener('click', formNovoFilme)

    table.appendChild(tbody)
    main.appendChild(table)
    main.appendChild(btn)
}

btnGeneros.addEventListener('click', mostraTabelaGeneros)
btnFilmes.addEventListener('click', mostraTabelaFilmes)    

