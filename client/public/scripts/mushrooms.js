const renderMushrooms = async () => {
    const response = await fetch('/mushrooms')
    const data = await response.json()

    const mainContent = document.querySelector('.card-container')
    if (data) {
        data.map((item, index) => {
            const card = createCard(item, index)
            mainContent.appendChild(card)
        })
    }
    else {
        const err = document.createElement('h2')
        err.textContent = 'No Mushrooms Available'
        mainContent.appendChild(err)
    }
}

function createCard(json, index) {
    const card = document.createElement('div')
    card.className = 'card'

    const recto = document.createElement('div') 
    recto.className = 'recto'

    const img = document.createElement('img')
    img.src = json.img_url
    recto.appendChild(img)


    const verso = document.createElement('div')
    verso.className = 'verso'

    const text = document.createElement('div')
    text.className = 'text'

    const name = document.createElement('h5')
    name.className = 'name'
    const name_str = json.common_name[0]
    name.textContent = name_str.charAt(0).toUpperCase() + name_str.slice(1)

    const sci_name = document.createElement('p')
    sci_name.className = 'sci_name'
    const sci_name_str = json.scientific_name[0]
    sci_name.textContent = sci_name_str.charAt(0).toUpperCase() + sci_name_str.slice(1)

    // link
    const linkContainer = document.createElement('div')
    const link = document.createElement('a')
    link.href = `/mushrooms/view/${index}`
    link.textContent = 'View Details'
    linkContainer.appendChild(link)

    text.appendChild(name)
    text.appendChild(sci_name)
    text.appendChild(linkContainer)

    verso.appendChild(text)

    card.appendChild(recto)
    card.appendChild(verso)

    return card
}

renderMushrooms()