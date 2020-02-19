/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var resultado;
    var temperatura;

    temperatura=document.getElementById("Temperatura").value; 
    temperatura=parseInt(temperatura);
    //resultado=parseInt(resultado);

    resultado=(temperatura-32)/1.8 
    resultado=parseInt(resultado);
    alert(temperatura + " grados fahrenheit son " + resultado + " Centigrados" ); 

}

function CentigradosFahrenheit () 
{

    var resultado;
    var temperatura;

    temperatura=document.getElementById("Temperatura").value; 
    temperatura=parseInt(temperatura);

    resultado=(temperatura*1.8)+32 
    resultado=parseInt(resultado);
    alert(temperatura + " grados centigrados son " + resultado + " fahrenheit" ); 


}