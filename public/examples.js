document.body.style.margin   = 0
document.body.style.overflow = "hidden"

// const cnv = document.getElementById ("net_art")

// cnv.width = innerWidth
// cnv.height = innerHeight

// const ctx = cnv.getContext ("2d")

// const squuares = []

// const mouse_pos = new Vector (0, 0)



// resize_canvas ()
// window.onresize = resize_canvas 

// cnv.onpointerover = e => {
//     mouse_pos.x = e.x
//     mouse_pos.y = e.y
// }

// cnv.onpointerdown = (e) => {
//     squuares.push (new Vector (e.x, e.y))
// }

// console.dir (cnv)


// requestAnimationFrame (draw_frame)

// function draw_frame () {
//     ctx.fillStyle = "#2B2D42"
//     ctx.fillRect (0, 0, cnv.width, cnv.height)

//     squuares.forEach (s => {

//         const movement = new Vector (s.x, s.y)
//         movement.subtract (mouse_pos)
//         movement.setMag (3)
//         s.add (movement)
//         // s.x += Math.random () * 6 - 3
//         // s.y += Math.random () * 6 - 3

//         ctx.fillStyle = "deeppink"
//         ctx.fillRect (s.x - 10, s.y - 10, 20, 20)

//     })


//     requestAnimationFrame (draw_frame)
// }


// function resize_canvas () {
//     cnv.width = innerWidth
//     cnv.height = innerHeight
// } 


const cnv = document.getElementById ("example_canvas")
cnv.style.background = "turquoise"

const ctx = cnv.getContext ('2d')

resize_canvas ()

window.onresize = resize_canvas 

let x_pos = 0

requestAnimationFrame (draw_frame)

function draw_frame() {
    ctx.fillStyle = "turquoise"
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    ctx.fillStyle = "deeppink"
    ctx.fillRect (x_pos % 1 * cnv.width, 150, 100, 100)

    x_pos += 0.001

    if (x_pos > cnv.width) {
        x_pos = 0
    }
    
    requestAnimationFrame (draw_frame)
}

function resize_canvas () {
     cnv.width = innerWidth
     cnv.height = innerHeight
} 

