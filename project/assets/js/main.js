// window.ondevicelight = (e)=>{
//     console.log(e.value)
//     var
//         rain = document.querySelector('main')
    
//     rain.setAttribute('style','filter: hue-rotate('+ e.value/10 +'deg)')
// }

let
    cont = document.querySelectorAll('.container-grid'),
    gridCol = 2,
    gridRow = 2,
    squares,
    gridTemplate = (x)=>{
        let template = []
        for (let i = 0; i < x; i++) {
            template.push((Math.floor(Math.random()*5)+1) +'fr')
        }
        let d = template.join(' ')
        return d
    },
    setGrid = (el) =>{
        el.style.setProperty('grid-template-columns',gridTemplate(gridRow)) 
        el.style.setProperty('grid-template-rows',gridTemplate(gridCol)) 
    }



window.onmousemove =(e)=>{
    let 
        mouse ={
            x:(e.clientX/(window.innerWidth)),
            y:(e.clientY/(window.innerHeight))
        }
    document.body.classList.remove('bw')
    cont[0].parentElement.style.setProperty('transform','rotateX('+ (-(mouse.y)*45+27.5) +'deg) rotateY('+ ((mouse.x)*45-27.5) +'deg)')
}

document.body.onmouseleave = ()=>{
    document.body.classList.add('bw')
}

cont.forEach(el =>{
    setGrid(el)
    setInterval(()=>{
        setGrid(el)
    },1000)
})

time = new Date
hours = time.getHours()
checkDaylight = (h)=>{
    if(h>=9 && h<=15){
        console.log('its morning')
        return ((h-9)/6)
    }if(h>=16 && h<=22){
        console.log('its afternoon')
        return 1-(h-16/6)
    }else{
        console.log('its evening')
        return 0
    }
}
