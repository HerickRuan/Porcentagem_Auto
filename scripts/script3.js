var cubo = '../figuras/cubo.png'
var cilindro = '../figuras/cilindro.png'
var cone = '../figuras/cone.png'
var esfera = '../figuras/esfera.png'
var paralelepipedo = '../figuras/paralelepipedo.png'
var piramide = '../figuras/piramide.png'
var quadrado = '../figuras/quadrado.png'
var circulo = '../figuras/circulo.png'
var hexagono = '../figuras/hexagono.png'
var pentagono = '../figuras/pentagono.png'
var trapezio = '../figuras/trapezio.png'
var triangulo = '../figuras/triangulo.png'



function botaoP(){
    imain.style.backgroundColor = "var(--cor01)"
    img1.src = circulo
    img2.src = quadrado
    img3.src = triangulo
    img4.src = pentagono
    img5.src = trapezio
    img6.src = hexagono
}

function botaoE(){
    imain.style.backgroundColor = "var(--cor02)"
    img1.src = esfera
    img2.src = cubo
    img3.src = piramide
    img4.src = cilindro
    img5.src = paralelepipedo
    img6.src = cone

    function calc1(){
        window.alert("oi")
    }
}