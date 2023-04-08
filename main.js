// header bar function

let barButton = document.getElementById("barButton")
let megaMenue = document.getElementById("megaMenu")
let button = document.getElementById("button")
// console.log(button)
// console.log(button.style.display)


if(window.innerWidth <= 900){
    barButton.onclick = function(e){
        // console.log(barButton.getAttribute("class"))
        // console.log(button.style.display)
        if(barButton.getAttribute("class") === 'fa fa-bars nonActive'){
            barButton.style.cssText = `transform: rotate(-90deg);`
            barButton.setAttribute("class",'fa fa-bars Active')
            megaMenue.style.display = "block"
            setTimeout((e) => {
                megaMenue.style.opacity= "1"
            megaMenue.style.top= "75px"
            }, 0);
        }else if(barButton.getAttribute("class") === 'fa fa-bars Active'){
            barButton.style.cssText = `transform: rotate(0deg);`
            barButton.setAttribute("class",'fa fa-bars nonActive')
            megaMenue.style.opacity= "0"
            megaMenue.style.top= "120px"
            setTimeout((e) => {
                megaMenue.style.display = "none"
            }, 300);
        }
    }
}else{
    megaMenue.style.opacity= "1"
}


// product function

let mainProduct = document.getElementById("mainProduct")
let altImg =  document.getElementsByClassName("altImg")
let mainImg = document.getElementById("mainImg")
// console.log(mainImg.src)
// console.log(altImg)


if(mainProduct != null){
mainProduct.addEventListener("click",function(e){
    window.location.href ="./product.html"
})
}

// function(e){

// }

if(altImg != null && mainImg != null){
altImg[0].addEventListener("click",function(e){
    mainImg.src = altImg[0].src
})

altImg[1].addEventListener("click",function(e){
    mainImg.src = altImg[1].src
})
altImg[2].addEventListener("click",function(e){
    mainImg.src = altImg[2].src
})
altImg[3].addEventListener("click",function(e){
    mainImg.src = altImg[3].src
})
}
