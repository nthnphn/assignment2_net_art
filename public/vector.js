
class Vector {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    add (v) {
        this.x += v.x
        this.y += v.y
    }

    subtract (v) {
        this.x -= v.x
        this.y -= v.y
    }

    mult (m) {
        this.x *= m
        this.y *= m
    }

    mag () { // using a^2 + b^2 = c^2
        return ((this.x ** 2) + (this.y ** 2)) ** 0.5
    }

    setMag (m) {
        this.mult (m / this.mag ())
    }

    rotate (a) {
        // from "Formula for rotating a vector in 2D" by Matthew Brett
        // https://matthew-brett.github.io/teaching/rotation_2d.html

        const new_x = (this.x * Math.cos (a)) - (this.y * Math.sin (a))
        const new_y = (this.x * Math.sin (a)) + (this.y * Math.cos (a))

        this.x = new_x
        this.y = new_y
    }

    clone () {
        return new Vector (this.x, this.y)
    }
}

