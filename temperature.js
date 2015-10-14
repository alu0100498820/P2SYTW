"use strict";
function Medida(valor, tipo){
  this.valor_=valor;
  this.tipo_=tipo;
}

 function Temperatura (valor, tipo){
   Medida.call(this, valor, tipo);
 }

 Temperatura.prototype = new Medida();

 Medida.prototype.get_valor = function(){ return this.valor_; }

 Medida.prototype.get_tipo = function(){ return this.tipo_; }

 Medida.prototype.set_valor = function(valor){ this.valor_=valor; }

 Medida.prototype.set_tipo = function(tipo){ this.tipo_=tipo; }

 Temperatura.prototype.pasar_a_f = function(){ return (this.get_valor()*9/5)+32; }

 Temperatura.prototype.pasar_a_c = function(){ return (this.get_valor()-32)*5/9; }

 function convertir(){
     var result=new Temperatura();
     var temp=original.value;

     var regexp = /([-+]?\d+(?:\.\d+)?(?:[eE][+-]?)\d+)?)\s*([fFcC])/;
     var valor = temp.match(regexp);
     
   }
