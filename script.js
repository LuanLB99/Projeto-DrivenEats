let comida;
let bebida;
let sobremesa;

function selecionarcomida(elemento) {
   
    
   if (comida) {
      comida.classList.remove('borda-verde');
      comida = elemento;
      comida.classList.add('borda-verde');     
   } else { comida = elemento;
      comida.classList.add('borda-verde');
   }
    
   

   liberaPedido();
  
}


function selecionarbebida(elemento) {
   
   if (bebida) {
      bebida.classList.remove('borda-verde');
      bebida = elemento;
      bebida.classList.add('borda-verde')
   } else { bebida = elemento;
      elemento.classList.add('borda-verde');
   }
    
   
   liberaPedido();
}

function selecionarsobremesa(elemento) {

   if (sobremesa) {
      sobremesa.classList.remove('borda-verde');
      sobremesa = elemento;
      sobremesa.classList.add('borda-verde')
   } else { sobremesa = elemento;
      elemento.classList.add('borda-verde');
   }
   liberaPedido();
}


function liberaPedido() {
   if(comida && bebida && sobremesa) {
      const fechar = document.querySelector('.fundo-pedido');
      fechar.classList.add('escondido');
      const abrir = document.querySelector('.selecionado');
      abrir.classList.remove('escondido');
   }
}


