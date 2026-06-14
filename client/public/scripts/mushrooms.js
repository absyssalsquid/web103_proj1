const renderMushrooms = async () => {
    const mainContent = document.querySelector('.card-container')

    const response = await fetch('/mushrooms')
    let err_msg = ""
    if (response.ok) {
        const data = await response.json()
        if (data) {
            data.map((item) => {
                const card = createCard(item, item.id)
                mainContent.appendChild(card)
            })
        }
        else {
            err_msg = 'No mushrooms available.'
        }
    }
    else{
        err_msg = `Error fetching mushrooms. ${response.status} ${response.statusText}`
    }

    if (err_msg) {
        const err = document.createElement('h2')
        err.classList.add('err')
        err.textContent = err_msg
        mainContent.appendChild(err)
        return
    }
}

function createCard(json, index) {
    const card = document.createElement('div')
    card.className = 'card'

    const recto = document.createElement('div') 
    recto.className = 'recto'

    const img = document.createElement('img')
    img.src = json.image_url
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