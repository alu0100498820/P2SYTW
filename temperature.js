"use strict";
function Medida(valor, tipo){
  this.valor_=valor;
  this.tipo_=tipo;
}

 function Temperatura (valor, tipo){
   Medida.call(this, valor, tipo);
 }

 Temperatura.prototype = new Medida();
