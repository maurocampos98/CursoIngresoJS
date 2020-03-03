function mostrar()
{
    var nota;
    var sexo;
    var sexoNotaBaja;
    var promedio;
    var acumNota=0;
    var acumVaron=0;
    var min=0;
    var max=0;
    
    //REPETIR 5 VECES (SE PIDEN LAS NOTAS DE 5 ALUMNOS).

    for(var i=0 ; i<3 ; i++){
     
      
    // PERMITIR EL INGRESO POR PROMPT DE LAS NOTAS.  

    nota=prompt("ingresar nota ");
    nota=parseInt(nota);

    // VALIDAR LAS NOTAS Y EL SEXO.

    while (nota < 0 || nota > 10 || isNaN(nota)){
        nota=prompt("nota invalida, ingrese otra");
        nota=parseInt(nota); 
       
        }

        sexo=prompt("Ingresar sexo del alumno");
    while (sexo !='m' && sexo !='f'){
        sexo=prompt("sexo invalido,ingrese nuevamente");
        }

    // PROMEDIO DE LAS NOTAS TOTALES.    
      acumNota=nota+acumNota;
      acumNota=parseInt(acumNota);   
      promedio=acumNota/3
      promedio=parseInt(promedio); 

    // BUSCAR LA NOTA MINIMA Y MAXIMA // Y MOSTRAR EL SEXO DE LA PERSONA CON NOTA MAS BAJA. 

      if (i==0){
        max=nota;
        min=nota;
        sexoNotaBaja=sexo;
       }
         else if (nota > max){
            max=nota;    
         }
           if (nota < min){
              min=nota;
              sexoNotaBaja=sexo;
         }

    // ACUMULAR LA CANTIDAD DE VARONES QUE SACARON MAS DE 6.

       if (sexo =='m' && nota >= 6) {
         acumVaron++ 
       }

      }    

    // MOSTRAR EN PANTALLA LOS ITEMS PEDIDOS. 

      alert("el promedio de todas las notas es de " + promedio + 
      " la nota mas alta es de " + max + " y la mas baja es de " + min + 
      " el sexo de la persona con nota mas baja es " + sexoNotaBaja
      + " y la cantidad de varones que sacaron 6 o más es de " + acumVaron );
}



