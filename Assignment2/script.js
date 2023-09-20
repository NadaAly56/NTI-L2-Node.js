const btn = document.getElementById('btn')
const number = document.getElementById('number')
const cont = document.getElementById('cont')

const generateMultiTable = ()=> {
    cont.innerHTML = ''
    const table = document.createElement('table')
    cont.appendChild(table)
    for (let i = 1; i <= 12; i++) {
        const num = i
        const row = document.createElement("tr")
        const col1 = document.createElement("td")
        col1.innerText = +number.value
        const col4 = document.createElement("td")
        col4.innerText = 'x'
        const col2 = document.createElement("td")
        col2.innerText = i
        const col5 = document.createElement("td")
        col5.innerText = '='
        const col3 = document.createElement("td")
        col3.innerText = num * +number.value
        // const line = document.createElement('hr')
        col1.classList.add('whiteBox')
        col2.classList.add('whiteBox')
        col3.classList.add('whiteBox')
        table.appendChild(row)
        row.appendChild(col1)
        row.appendChild(col4)
        row.appendChild(col2)
        row.appendChild(col5)
        row.appendChild(col3)
        // table.appendChild(line)
        
    }
}

