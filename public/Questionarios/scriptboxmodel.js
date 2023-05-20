function calcularrespuestas() {
    let total =5;
    let puntos = 0;

    let myform  = document.forms["cuestionario"];
    let respuestascorrectas = ["a","b","c","d","a"];
    
    for(let i =1; i <= total; i++){
        if (myform["radiopreg" + i].value == null ||    
            myform["radiopreg" + i].value == '') {
            alert('Por favor responda todas las preguntas');
            return false;   
        } else {
            if (myform["radiopreg" + i].value === respuestascorrectas[i - 1])
                puntos++;
        }
    }

    let resultado = document.getElementById('final');
    resultado.innerHTML = "Obtuviste "+puntos+" puntos de "+ total+ " posibles";
    return false; 
}