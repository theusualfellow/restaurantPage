export function addHomeDiv(){

    const homeText = `Welcome to Alfredo Restaurant. This fine establishment was 
    established in 2022. We offer only the best cuisines from the land of
    italy made from only the best of ingredients`
    const paragraph = document.createElement("p")
    paragraph.innerText = homeText
    paragraph.classList = "homeParagraph"
    
    return paragraph

}
