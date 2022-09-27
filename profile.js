const color = () => {
    alert('Blue')
}

const place = () => {
    alert('Tennessee')
}

const ritual = () => {
    alert('Your mom')
}
document.getElementById('place').addEventListener('click', place)
document.getElementById('color').addEventListener('click', color)
document.getElementById('ritual').addEventListener('click', ritual)

