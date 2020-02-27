function mostrar()
{
    var contPares=0;

    var num;
    var i;
    num=prompt("Ingrese un número:");
    num=parseInt(num);

    for(i=0 ; i<=num ; i++)
    {
        if(i%2==00)
        {
            contPares++;  
            document.write(i + "par " + "</br>");     
            document.write(contPares + "cant de pares" + "</br>");  
            
        }
        
    }



}//FIN DE LA FUNCIÓN