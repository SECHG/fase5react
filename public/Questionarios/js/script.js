const respuestasCorrectas = {
    pregunta1: 'c',
    pregunta2: 'b',
    pregunta3: 'a',
    pregunta4: 'd',
    pregunta5: 'c',
  };

  
  const botonEnviar = document.getElementById('botonEnviar');
    botonEnviar.addEventListener('click', () => {
  let puntaje = 0;
  
 
  if (document.getElementById('respuesta1c').checked) {
    puntaje++;
  }
  if (document.getElementById('respuesta2b').checked) {
    puntaje++;
  }
  if (document.getElementById('respuesta3a').checked) {
    puntaje++;
  }
  if (document.getElementById('respuesta4d').checked) {
    puntaje++;
  }
  if (document.getElementById('respuesta5c').checked) {
    puntaje++;
  }
  
  // Muestra el puntaje al usuario
  alert(`Obtuviste ${puntaje} de 5 puntos.`);
});
