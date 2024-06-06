export function menu(){
    const imgCount = 3
    const images = []

    for (let i = 0; i<imgCount; i++){
        const img = document.createElement("img")
        img.src = `../img${i+1}.webp`
        img.classList = 'dishes'
        images.push(img)
    }

    function text(){

        const heads = ['dish1', 'dish2', 'dish3']
        const headings = heads.map(head =>{
            const heading = document.createElement('h1')
            heading.textContent = head
            heading.classList = 'headings'
            return heading
        })
        return headings
        }

        return {images, text}

    }
