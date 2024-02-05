document.addEventListener("DOMContentLoaded", ()=>{
    var open = document.querySelector(".hamburger ")
    var menu = document.querySelector(".navbar__mobile")
    var close = document.querySelector(".navbar__mobile-close")
    console.log(open.children)
    open.addEventListener("click", ()=>{
            console.log("clicked")
            menu.classList.remove("hidden")
            
    })

    close.addEventListener("click", ()=>{
        menu.classList.add("hidden")
    })
})