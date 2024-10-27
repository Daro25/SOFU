
const LAGO = document.getElementById("laguna");
var minimoPantalla = function() {
    if (document.documentElement.scrollHeight <= document.documentElement.scrollWidth) {
        return document.documentElement.scrollHeight
    } else {
        return document.documentElement.scrollWidth
    }
};
console.log(minimoPantalla());

var style_LAGO = {
    "width": (minimoPantalla() * 0.8)+"px",
    "height": (minimoPantalla() * 0.8)+"px",
    "margin": ((document.documentElement.scrollHeight -(minimoPantalla()*0.8))/2 - 4)+"px " +((document.documentElement.scrollWidth -(minimoPantalla()*0.8))/2 -4)+"px"
};

for (var propiedad in style_LAGO) {
    LAGO.style[propiedad] = style_LAGO[propiedad];
}