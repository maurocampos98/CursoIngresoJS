function mostrar()
{
    var divisores;    
    var cantDivisores=0; 
    var num;
    var i;
    num=prompt("Ingrese un número:");
    num=parseInt(num);
    
    for(i=0 ; i<=num ; i++)
    {
        if(i%2==00)
        {
            cantDivisores++;  
            document.write(i + "divisores" + "</br>");     
            document.write(cantDivisores + "cant de divisores" + "</br>");         
        }
        
    }
            cantDivisores=
            document.write(cantDivisores);

}//FIN DE LA FUNCIÓN