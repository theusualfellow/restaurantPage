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
        if(button.innerText==='Home'){
            div.innerText = addHomeDiv()
        }
        if(button.innerText==='Menu'){
            div.appendChild(menu().image())
            div.appendChild = menu().text()
        }
        if(button.innerText==='About'){
            div.innerText = about()
        }
    })
})