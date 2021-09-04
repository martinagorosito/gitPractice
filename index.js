const pictures = document.querySelectorAll(".team-pic")
for (let i=0 ; i< pictures.length ; i++){
    const picture = pictures[i]
    picture.addEventListener('click', () => {
        picture.style.transform="rotate(60deg)"
    })
    
}

const button = document.querySelector(".button")
button.addEventListener('click', () =>{
    button.style.background= "#E5E5E5";
    button.style.color= "rgba(235, 87, 87, 1)";
    button.style.border= "3px solid rgba(235, 87, 87, 1)";
})

const buttonContact= document.querySelector (".form-container .button")
buttonContact.addEventListener('click', ()=>{
    buttonContact.style.background="rgba(255, 255, 255, 1)";

})