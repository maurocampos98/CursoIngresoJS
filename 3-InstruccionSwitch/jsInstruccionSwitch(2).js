function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes)
{
    
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno");
    break;
    case "Junio":
    case "Julio":    
    case "Agosto":
    alert("abrigate que hace frio");
    break;
    default: 
    alert ("ya paso el frio")
   
 
}



}//FIN DE LA FUNCIÓN