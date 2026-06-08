const header = document.querySelector('header')

// header left
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerImg = document.createElement('img')
headerImg.setAttribute('src', '/public/images/logo.png')
headerImg.className = 'header-logo'
headerLeft.appendChild(headerImg)

const headerText = document.createElement('h1')
headerText.textContent= 'Mushroom Friend'
headerLeft.appendChild(headerText)

// header right
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})
headerRight.appendChild(headerButton)

header.appendChild(headerLeft)
header.appendChild(headerRight)
