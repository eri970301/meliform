var header = document.querySelector("header")

function handleScroll(e) {
    header.style.setProperty('background','#808080')
}
window.addEventListener('scroll', handleScroll)