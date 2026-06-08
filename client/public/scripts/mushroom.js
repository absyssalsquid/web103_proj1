const renderMushroom = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const mushroomContent = document.getElementById('mushroom-content')

    const response = await fetch(`/mushrooms/${requestedID}`);
    console.log(`Request status: ${response.status}`);

    if (response.status == 404) {
        const image = document.createElement('img')
        image.setAttribute('src', '/public/images/sad_mush.png')
        image.classList.add('sad_mush')
        mushroomContent.appendChild(image)


        const err = document.createElement('h2')
        err.classList.add('err')
        err.textContent = 'Mushroom not found.'
        mushroomContent.appendChild(err)

      return;
    }

    const mushroom = await response.json();
    mushroomContent.innerHTML = `
        <div class="img-container">
            <img src="${mushroom.img_url}" alt="${mushroom.common_name[0]}" class="image">
        </div>

        <div class="text-container ${mushroom.color_code}">
            <table>
                <tr>
                    <th>Common Name</th>
                    <td>${mushroom.common_name.join('<br>')}</td>
                </tr>
                <tr>
                    <th>Scientific Name</th>
                    <td class="sci-name">${mushroom.scientific_name.join('<br>')}</td>
                </tr>
                <tr>
                    <th>Edibility</th>
                    <td>${mushroom.edibility}</td>
                </tr>
            </table>
        </div>
    `
}

renderMushroom()