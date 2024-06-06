export function about(){
    function heading(){
        const chefsHeading = document.createElement('h1')
        chefsHeading.innerText = 'Meet the chefs'
        return chefsHeading
    }

    function image(){
        const newImage = document.createElement("img")
        newImage.src = '../chefs.jpg'
        newImage.style.height = '270px'
        newImage.style.width = '400px'
        return newImage
    }
    

    function text(){
        const someText = document.createElement('p')
        someText.innerText = `Alan the Alchemist and Freddie Gibbs together are unstoppable
        when it comes to cooking great food. They joined forces and has made Alfredo to what it 
        is today. It's their hard work and dedication that made Alfredo the sensation it is today`
        return someText
    }

    return {image, text, heading}
}