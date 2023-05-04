document.body.style.margin   = 0
document.body.style.overflow = "hidden"

const cnv = document.getElementById ("net_art")
console.dir (cnv)

cnv.width = innerWidth
cnv.height = innerHeight

// Resize the canvas based on page
resizeCanvas ()
window.onresize = resizeCanvas

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

draw_frame ()

function draw_frame () {
    ctx.fillStyle = "#2B2D42"
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    ctx.fillStyle = "#EF233C"

    coordinates.forEach (p => {
        let x_pos = p.x - 25;
        let y_pos = p.y - 25;
        ctx.fillRect (x_pos, y_pos, 50, 50);
    })

    requestAnimationFrame (draw_frame)
}

function move_squares () {
    coordinates.forEach((val, index) => coordinates[index] = val += 1);
}

requestAnimationFrame (draw_frame)
