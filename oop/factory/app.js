// factory function | bad

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
};

const firstColor = makeColor(32, 255, 150);
console.log(firstColor.rgb());
console.log(firstColor.hex());

document.querySelector('h1').style.color = makeColor(255, 255, 200).hex();
document.querySelector('p').style.color = makeColor(0, 10, 10).hex();

// Same idea but with Constructor | better but still not great

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const magentaColor = new Color(255, 0, 255);
const blackBird = new Color(0, 0, 12);

document.querySelector('body').style.backgroundColor = magentaColor.rgb();
document.querySelector('#circle').style.backgroundColor = blackBird.hex();


// Same idea but with class | perfect!

class Colorfull {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    rgb() {
        const { r, g, b } = this; 
        return `rgb(${r}, ${g}, ${b})`; 
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const palid = new Colorfull(255, 252, 100, 'palid yellow submarine');

document.querySelector('#square').style.backgroundColor = palid.rgb();
console.log(`the color ${palid.name} is ${palid.hex()} in hexadecimal and ${palid.rgb()} in rgb format`);
