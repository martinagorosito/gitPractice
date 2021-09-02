const pictures = document.querySelectorAll(".team-pic")
for (let i=0 ; i< pictures.length ; i++){
    const picture = pictures[i]
    picture.addEventListener('click', () => {
        picture.style.transform="rotate(60deg)"
    })
    
}