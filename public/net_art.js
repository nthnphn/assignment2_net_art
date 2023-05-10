document.body.style.margin   = 0
document.body.style.overflow = "hidden"

const cnv = document.getElementById ("net_art")
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

// array to store the coordinates
const coordinates = [];

// assign the onclick assignment to the argument 'e'
function add_coordinate (e) {
    
    // pushes offsetX and offsetY coordinates as 'x' and 'y' into the 'coordinates' array
    coordinates.push ({x : e.offsetX, y: e.offsetY})
}

// calls function 'add_coordinate' everytime mouse is clicked
cnv.onclick = add_coordinate


// get context objective for the canvas 
const ctx = cnv.getContext ('2d')

// calls the function 'draw_frame'
requestAnimationFrame (draw_frame)

function draw_frame () {

    // set the background colour
    ctx.fillStyle = "#2B2D42"
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    // changes all the opacity to 0.8
    ctx.globalAlpha = 0.8

    // goes through each coordinate in the array
    coordinates.forEach (p => {

        // random values for rgb colours
        var r = 0 + 255 * Math.random();         
        var b = 0 + 255 * Math.random();
        var g = 0 + 255 * Math.random();

        // random values for rectangle width and height
        let w = 300 * Math.random ();
        let h = 300 * Math.random ();

        // the center of the squares created is positioned where the mouse is
        let x_pos = p.x - w / 2;
        let y_pos = p.y - h / 2;

        // fill the squares with the random rgb colour created
        ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";     

        // creates the square with the random width and height value created
        ctx.fillRect (x_pos, y_pos, w, h);
    })

    // allowes the squares to change every second
    setTimeout(draw_frame, 1000)
}
