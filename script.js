function selecionarcomida(elemento) {
   const botaoClicado = document.querySelector('.borda-verde');
   if (botaoClicado !== null) {
      botaoClicado.classList.remove('borda-verde');
   }
    
   elemento.classList.add('borda-verde')
}


function selecionarbebida(elemento) {
   const botaoClicado = document.querySelector('.bebida .borda-verde');
   if (botaoClicado !== null) {
      botaoClicado.classList.remove('borda-verde');
   }
    
   elemento.classList.add('borda-verde')
}

function selecionarsobremesa(elemento) {
   const botaoClicado = document.querySelector('.sobremesa .borda-verde');
   if (botaoClicado !== null) {
      botaoClicado.classList.remove('borda-verde');
   }
    
   elemento.classList.add('borda-verde')
}



