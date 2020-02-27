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

const ul_people = document.createElement('ul')
ul_people.classList.add('people')
const main_element = document.querySelector('main')

for (const person of people) {
    const li_element = document.createElement('li')
    const text_ul = document.createTextNode(person.name)
    li_element.appendChild(text_ul)
    ul_people.appendChild(li_element)
}

// main_element.appendChild(ul_people)
document.querySelector('.list').appendChild(ul_people)
const div = document.createElement('div')
const aside = document.createElement('aside')
const h1 = document.createElement('h1')
const address = document.createElement('address')

aside.appendChild(h1)
aside.appendChild(address)

document.querySelector('.details').appendChild(aside)


document.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', (event) => {
        for (const person of people) {
            if (person.name.toUpperCase() == li.innerText) {
                ul_people.style.width = `${50}%`
                h1.innerText = person.name
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