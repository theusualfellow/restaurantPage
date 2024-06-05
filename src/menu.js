export function menu(){

    function image(){
        const newImage = document.createElement("img")
        newImage.src = '../chefs.jpg'
        return newImage
    }
    

    function text(){
        return `home`
    }

    return {image, text}
}