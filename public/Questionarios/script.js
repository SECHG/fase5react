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
  
 
  if (document.getElementById('r1d').checked) {
    puntaje++;
  }
  if (document.getElementById('r2a').checked) {
    puntaje++;
  }
  if (document.getElementById('r3c').checked) {
    puntaje++;
  }
  if (document.getElementById('r4a').checked) {
    puntaje++;
  }
  if (document.getElementById('r5c').checked) {
    puntaje++;
  }
  
  // Muestra el puntaje al usuario
  alert(`Obtuviste ${puntaje} de 5 puntos.`);
});