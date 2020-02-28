const people = [
    { name: 'Igor', street: 'Rua 10', city: 'Sao Paulo', state: 'SP', country: 'Brasil', telephone: '30303032', birthday: '14/08/1980' },
    { name: 'Eduardo', street: 'Rua 5', city: 'Brasilia', state: 'DF', country: 'Brasil', telephone: '30303033', birthday: '14/04/1998' },
    { name: 'Maria', street: 'Rua 3', city: 'Curitiba', state: 'PR', country: 'Brasil', telephone: '30343034', birthday: '01/02/1992' },
    { name: 'Angelo', street: 'Rua 25', city: 'Rio de Janeiro', state: 'RJ', country: 'Brasil', telephone: '30353035', birthday: '14/02/1995' },
    { name: 'Vanessa', street: 'Rua 4', city: 'Minas Gerais', state: 'MG', country: 'Brasil', telephone: '30363036', birthday: '14/02/1976' },
    { name: 'Erison', street: 'Rua Braz', city: 'Santos', state: 'SP', country: 'Brasil', telephone: '30373037', birthday: '14/05/1980' },
    { name: 'Euck', street: 'Rua 23', city: 'Florianopolis', state: 'SC', country: 'Brasil', telephone: '30383038', birthday: '14/02/1988' },
    { name: 'Ivana', street: 'Rua 20', city: 'Porto Alegre', state: 'RS', country: 'Brasil', telephone: '30393039', birthday: '14/02/1992' },
]


const main_element = document.querySelector('main')
const ul_people = document.querySelector('.people')

for (const person of people) {
    const li_element = document.createElement('li')
    const link_element = document.createElement('a')
    const text_ul = document.createTextNode(person.name)
    link_element.appendChild(text_ul)
    li_element.appendChild(link_element)
    ul_people.appendChild(li_element)
}


const div = document.createElement('div')
const aside = document.createElement('aside')
const h2 = document.createElement('h2')
const address = document.createElement('address')
const details_element = document.querySelector('.details')

aside.appendChild(h2)
aside.appendChild(address)
details_element.appendChild(aside)

document.querySelectorAll('li').forEach((li, index) => {
    li.addEventListener('click', (event) => {
        const current = document.getElementsByClassName("active")
        if (current[0]) {
            current[0].className = current[0].className.replace('active', '')
            li.className += ' active'
        } else {
            li.className += ' active'
        }
        for (const person of people) {
            if (person.name.toUpperCase() == li.innerText) {
                details_element.style.setProperty('display', 'block')
                ul_people.style.width = `${50}%`
                h2.innerText = person.name
                address.innerText = `Lives in: ${person.street}
City: ${person.city}
State: ${person.state}
Country: ${person.country}
Telephone: ${person.telephone}
Birthday: ${person.birthday}`
            }
        }
    })
})