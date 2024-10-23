var header = document.querySelector("header")

function handleScroll(e) {
    var header = document.querySelector("header");
    header.classList.toggle("down", window.scrollY>0)
}
window.addEventListener('scroll', handleScroll)

document.addEventListener('DOMContentLoaded', ()=>{
    const track = document.querySelector('.carousel_content');
    const items = Array.from(track.children);
    const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginRight);
    const trackWidth = itemWidth * items.length;

    while(track.clientWidth < window.innerWidth * 2){
        items.forEach(item =>{
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        })
    }

    const totalWidth = itemWidth * track.children.length;
    const scrollKeyframes = `
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
        }
    `
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = scrollKeyframes;
    document.head.appendChild
})