document.body.style.margin   = 0
document.body.style.overflow = "hidden"

const cnv = document.getElementById ("example2")
console.dir (cnv)

cnv.width = innerWidth
cnv.height = innerHeight


resizeCanvas ()
window.onresize = resizeCanvas

function resizeCanvas () {
    cnv.width = innerWidth
    cnv.height = innerHeight
}

requestAnimationFrame (draw_frame)

function draw_frame () {
    ctx.fillStyle = "#2B2D42"
    ctx.fillRect (0, 0, cnv.width, cnv.height)
}

const coordinates = [];

function add_coordinate (e) {
    
    coordinates.push ({x : e.offsetX, y: e.offsetY})

    ctx.fillStyle = "#2B2D42"
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    ctx.globalAlpha = 0.8

    coordinates.forEach (p => {

        var r = 0 + 255 * Math.random();         
        var b = 0 + 255 * Math.random();
        var g = 0 + 255 * Math.random();

        let w = 300 * Math.random ();
        let h = 300 * Math.random ();

        let x_pos = p.x - w / 2;
        let y_pos = p.y - h / 2;

        ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";     

        ctx.fillRect (x_pos, y_pos, w, h);
    })

}
cnv.onclick = add_coordinate

const ctx = cnv.getContext ('2d')