import { addHomeDiv } from "./home.js"
import { about } from "./about.js"
import { menu } from "./menu.js"
console.log('Hello')


const heading = document.createElement('h1')
const img = document.createElement('img')
const paragraph = document.createElement('p')

const buttons = document.querySelectorAll('button')

const div = document.querySelector('#content')

function pageLoad(){
    div.append(addHomeDiv())
}
pageLoad()

buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        console.log(button.innerText)
        div.innerHTML = ''
        if(button.innerText==='Home'){
            div.innerText = addHomeDiv()
        }
        if(button.innerText==='About'){
            const aboutContent = about()
            div.appendChild(aboutContent.heading())
            div.appendChild(aboutContent.image())
            div.appendChild(aboutContent.text())
        }
        if(button.innerText==='Menu'){
            const dishes = menu()
            div.appendChild(dishes.text()[0])
            div.appendChild(dishes.images[0])

            div.appendChild(dishes.text()[1])
            div.appendChild(dishes.images[1])  

            div.appendChild(dishes.text()[2])
            div.appendChild(dishes.images[2])
        }
    })
})