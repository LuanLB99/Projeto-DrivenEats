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

const precoComida = 0;
let precoBebida;
let precoSobremesa;
let preco = precoComida + precoBebida + precoSobremesa;

let fechar;



function liberaPedido() {
   if(comida && bebida && sobremesa) {
      fechar = document.querySelector('.fundo-pedido');
      fechar.classList.add('escondido');
      abrir = document.querySelector('.selecionado');
      abrir.classList.remove('escondido');
      let strPedido = `Olá, Gostaria de fazer o pedido: \n
      - Prato: ${comida.getElementsByTagName('h2')[0].textContent} \n
      - Bebida: ${bebida.getElementsByTagName('h2')[0].textContent} \n
      - Sobremesa ${sobremesa.getElementsByTagName('h2')[0].textContent} \n
      Total: R$ ${preco.toFixed(2)}`;
      let meuPedido = encodeURIComponent(strPedido);
      const linkP = document.querySelector('.selecionado');
      linkP.innerHTML = `<a href="https://wa.me/5512974077007?text=${meuPedido}"><h1>Fechar pedido</h1></a>`;
   }
}



