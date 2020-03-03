function mostrar()
{
    var letra;
    var numero;
    var contador=00;
    var cantPares=00;
    var cantImpares=00;
    var cantCeros=00;
    var Promedio;
    var negativos; 
    var acumPositivos;
    var max;
    var min;
    var respuesta='si';
    


    while (respuesta =='si'){
        contador++;

        acumPositivos=numero; 
        negativos=numero;
        letra=prompt("Ingresar alguna letra de la A a la Z : ");

    while (letra.toUpperCase() < "A" || letra.toUpperCase() > "Z"){
        letra=prompt("letra no valida, ingrese nuevamente ");
    }

    numero=prompt("Ingresar algun numero del -100 al 100 : ");

    while (numero <-100 || numero > 100 || isNaN(numero)){
    numero=prompt("número no valido, ingrese nuevamente: ");  
    
      }

      if (numero%2==00){
        cantPares++;
        }
        else {
            cantImpares++;
        }

       if (numero==00){
        cantCeros++;
       }

       if (numero>=00){
           acumPositivos=parseInt(acumPositivos);
           numero=parseInt(numero);
           acumPositivos=(acumPositivos+numero);
           Promedio=acumPositivos/contador; 
        } 
        else {
            negativos=parseInt(negativos);
            numero=parseInt(numero);
            negativos=(negativos+numero);
         } 


      respuesta=prompt("¿desea continuar? ");

    }

    alert("cantidad de numeros pares:" + cantPares );
    alert("cantidad de numeros impares: " + cantImpares );
    alert("cantidad de ceros: " + cantCeros );
    alert("promedio: " + Promedio );
    alert("la suma de numeros negativos es : " + negativos );
   /*  alert("numero maximo: ");
    alert("letra del numero maximo: "); 
    */ 
}
