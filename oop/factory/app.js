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
}

const firstColor = makeColor(32, 255, 150);
console.log(firstColor.rgb());
console.log(firstColor.hex());

document.querySelector('h1').style.color = makeColor(255, 0, 190).hex();
document.querySelector('p').style.color = makeColor(200, 20, 43).hex();
