// window.ondevicelight = (e)=>{
//     console.log(e.value)
//     var
//         rain = document.querySelector('main')
    
//     rain.setAttribute('style','filter: hue-rotate('+ e.value/10 +'deg)')
// }

window.onmousemove =(e)=>{
    var 
        mouse ={
            x:Math.round(e.clientX/(window.innerWidth)*100-50),
            y:Math.round(e.clientY/(window.innerHeight)*100-50)
        },
        cont  =document.querySelectorAll('.container-grid')
        

    cont.forEach((el,i) => {
        el.setAttribute('style','transform: scale(' + ((e.clientX+e.clientY)/(window.innerWidth+window.innerHeight/2)+1) + ') translateX('+ mouse.x*(i+1) +'px) translateY('+ mouse.y*(i+1) +'px)')
    })
}