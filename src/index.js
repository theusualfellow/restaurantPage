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
            div.appendChild(aboutContent.image())
            div.appendChild(aboutContent.text())
        }
        if(button.innerText==='Menu'){
            div.innerText = menu()
        }
    })
})