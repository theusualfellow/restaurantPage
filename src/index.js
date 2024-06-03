import { addHomeDiv } from "./home.js"
console.log('Hello')


const heading = document.createElement('h1')
const img = document.createElement('img')
const paragraph = document.createElement('p')

const buttons = document.querySelectorAll('button')

const div = document.querySelector('#content')

const words = `Welcome to Alfredo Restaurant`
function pageLoad(){
    div.append(words)
}
pageLoad()

buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        console.log(button.innerText)
        if(button.innerText==='Home'){
            console.log('clicked home')
        }
        if(button.innerText==='Menu'){
            console.log('clicked menu')
        }
        if(button.innerText==='About'){
            console.log('clicked about')
        }
    })
})