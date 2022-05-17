let canv=document.querySelector("#myCanvas")
let ctx = canv.getContext("2d")
ctx.fillStyle="yellow"
ctx.strokeStyle="yellow"
ctx.beginPath ()
ctx.rect(100, 150, 150, 100)
ctx.stroke()
ctx.fill()
ctx.fillStyle="grey"
ctx.strokeStyle="grey"
ctx.beginPath ()
ctx.rect(250, 150, 50, 100)
ctx.stroke()
ctx.fill()
ctx.fillStyle="pink"
ctx.strokeStyle="pink"
ctx.beginPath ()
ctx.moveTo (100, 150)
ctx.lineTo(50,200)
ctx.lineTo(100,250)
ctx.lineTo(100,150)
ctx.stroke()
ctx.fill()
ctx.fillStyle="red"
ctx.strokeStyle="red"
ctx.beginPath()
ctx.arc(200,300,50, 0*Math.PI, 0.5*Math.PI)
ctx.stroke()
ctx.fill()