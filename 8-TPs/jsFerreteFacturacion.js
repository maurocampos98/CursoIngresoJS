/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;
    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);
    resultado=preciouno+preciodos+preciotres;
    alert("el precio es " + resultado);

}
function Promedio () 
{
    var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    var division;
    division=3;

    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;
    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);
    division=parseInt(division);
    resultado=preciouno+preciodos+preciotres;
    resultado=resultado/3;
    alert("el precio es " + resultado);

	
}
function PrecioFinal () 
{
    var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    var aumento;
    preciouno=document.getElementById("PrecioUno").value;
    preciodos=document.getElementById("PrecioDos").value;
    preciotres=document.getElementById("PrecioTres").value;
    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);
    resultado=preciouno+preciodos+preciotres;
    aumento=resultado*21/100
    resultado=resultado+aumento
    alert("el precio con el aumento del 21% es " + resultado);
    

	
}