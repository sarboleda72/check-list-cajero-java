function calcularNota() {
    const checkboxes = document.querySelectorAll('input[name="requisito"]');
    let totalRequisitos = checkboxes.length;
    let requisitosCompletos = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            requisitosCompletos++;
        }
    });

    let porcentajeCompletado = (requisitosCompletos / totalRequisitos) * 100;
    let nota = (porcentajeCompletado / 100) * 50;

    let resultadoDiv = document.getElementById("resultado");
    if (porcentajeCompletado === 100) {
        resultadoDiv.innerHTML = `¡Felicidades! Has completado el 100% del checklist. Nota: ${nota.toFixed(2)} / 50`;
        resultadoDiv.classList.add("completo");
        resultadoDiv.classList.remove("incompleto");
    } else {
        resultadoDiv.innerHTML = `Has completado el ${porcentajeCompletado.toFixed(2)}% del checklist. Nota estimada: ${nota.toFixed(2)} / 50`;
        resultadoDiv.classList.add("incompleto");
        resultadoDiv.classList.remove("completo");
    }
}
