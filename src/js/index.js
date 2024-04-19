// const inputs = document.querySelectorAll('input')
// console.log(inputs);

// if (inputs.values===""){
//     inputs.class
// }

// let formulario = document.getElementsByClassName("input");
// let enviar = document.getElementsByClassName("btn-enviar");

// console.log(formulario);

// document.querySelector('.inputs').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     let campoTexto = ['nome', 'email', 'tel', 'mensagem'];
  
//     c
//       let textos = document.getElementById(textoId);
  
//       if(textos.value === '') {
//         textos.classList.add('obrigatorio');
//       } else {
//         textos.classList.remove('obrigatorio');
//         textos.classList.add('borda-selecionada');
//       }
//     });
//   });

  document.querySelector('.inputs').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let textos = ['nome', 'email', 'tel', 'mensagem'];
  
    textos.forEach(function(textoId) {
      let texto = document.getElementById(textoId);
      let campoSemTexto = document.getElementById(textoId + '-semTexto');
  
      if(texto.value === '') {
        texto.classList.add('obrigatorio');
        campoSemTexto.style.display = 'block';
      } else {
        texto.classList.remove('obrigatorio');
        texto.classList.add('borda-selecionada');
        campoSemTexto.style.display = 'none';
      }
    });
  });

  var inputs = document.querySelectorAll('input, textarea');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    if (this.value) {
      this.classList.add('has-value');
    } else {
      this.classList.remove('has-value');
    }
  });
});
