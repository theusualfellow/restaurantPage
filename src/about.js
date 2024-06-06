export function about(){
    function image(){
        const newImage = document.createElement("img")
        newImage.src = '../chefs.jpg'
        newImage.style.height = '270px'
        newImage.style.width = '400px'
        return newImage
    }
    

    function text(){
        const someText = document.createElement('p')
        someText.innerText = 'hello'
        return someText
    }

    return {image, text}
}