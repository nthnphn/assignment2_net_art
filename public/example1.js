document.body.style.margin   = 0
document.body.style.overflow = "hidden"

const cnv = document.getElementById ("example1")
console.dir (cnv)

cnv.width = innerWidth
cnv.height = innerHeight

// Resize the canvas based on page
resizeCanvas ()
window.onresize = resizeCanvas

// Changes the canvas size to the same size as the page
function resizeCanvas () {
    cnv.width = innerWidth
    cnv.height = innerHeight
}

const coordinates = [];
function add_coordinate (e) {
    coordinates.push ({x : e.offsetX, y: e.offsetY})
}
cnv.onclick = add_coordinate

const ctx = cnv.getContext ('2d')

requestAnimationFrame (draw_frame)

function draw_frame () {

    ctx.fillStyle = `#2B2D42`
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    ctx.fillStyle = `#e63946`

    coordinates.forEach (p => {

        ctx.fillRect (p.x - 10, p.y - 10, 20, 20)
    })

    requestAnimationFrame (draw_frame)
}

requestAnimationFrame (draw_frame)