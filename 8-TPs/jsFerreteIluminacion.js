/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
   {

///////////////
///    A   ///
///////////// 

   var lamparitas;
   var descuento;
   var resultado;
   var marca;
   var importeFinal; 
   var ingresosBrutos;
   
    lamparitas=document.getElementById("Cantidad").value;
    marca=document.getElementById('Marca').value;
    lamparitas=parseInt(lamparitas);
    resultado=parseInt(resultado);
    descuento=parseInt(descuento);

    if (lamparitas >= 6)   
     { 
        resultado=lamparitas*35
        descuento=resultado*50/100
        resultado=resultado-descuento
        alert("el precio final es de " +resultado);
     }  

///////////////
///    B   ///
///////////// 


      else 
      {   
      if (lamparitas == 5)   
      {
   
       resultado=lamparitas*35
       switch(marca)
      {
         case "ArgentinaLuz":
         descuento=resultado*40/100
        resultado=resultado-descuento
        alert("el precio final es de " +resultado);
        break;
        default: 
        descuento=resultado*30/100
        resultado=resultado-descuento
        alert("el precio final es de " +resultado);
      }
      }
      } 
  
    
///////////////
///    C   ///
////////////// 


         if (lamparitas == 4)   
         {

         resultado=lamparitas*35

          switch(marca)
        {
            case "ArgentinaLuz":
            descuento=resultado*25/100
           resultado=resultado-descuento
           alert("el precio final en Argentina luz es de " +resultado);
           break;
           case "FelipeLamparas":
            descuento=resultado*25/100
           resultado=resultado-descuento
           alert("el precio final en FelipeLamparas es de " +resultado);
           break;
           default: 
           descuento=resultado*20/100
           resultado=resultado-descuento
           alert("el precio final es de " +resultado);
         } 
          }
 
 ///////////////
///    D   ///
/////////////          



          if (lamparitas == 3)   
          {
 
          resultado=lamparitas*35
 
           switch(marca)
         {
             case "ArgentinaLuz":
             descuento=resultado*15/100
            resultado=resultado-descuento
            alert("el precio final en Argentina luz es de " +resultado);
            break;
            case "FelipeLamparas":
             descuento=resultado*10/100
            resultado=resultado-descuento
            alert("el precio final en FelipeLamparas es de " +resultado);
            break;
            default: 
            descuento=resultado*5/100
            resultado=resultado-descuento
            alert("el precio final es de " +resultado);
          } 
           }

///////////////
///    E   ///
///////////// 

       
           if (resultado > 120)
           {           
              ingresosBrutos=resultado*10/100
           importeFinal=resultado+ingresosBrutos 
           alert("usted pago " +resultado + " , por lo tanto tendra un recargo del 10% y su monto final a pagar sera de " +importeFinal);
           }
           /*
           ingresosBrutos=resultado*10/100
           importeFinal=resultado+ingresosBrutos 
           alert("usted pago " +resultado " , por lo tanto tendra un recargo del 10% y su monto final a pagar sera de " +importeFinal);
*/
           
         }

