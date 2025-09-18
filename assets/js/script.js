function calcularNota() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let total = checkboxes.length;
  let checked = 0;
  checkboxes.forEach((c) => { if (c.checked) checked++; });
  let nota = (checked === total) ? 5 : (checked / total) * 5;
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `<b>Nota Total: ${nota.toFixed(2)} / 5</b>`;
  if (nota === 5) {
    resultadoDiv.classList.add("completo");
    resultadoDiv.classList.remove("incompleto");
  } else {
    resultadoDiv.classList.add("incompleto");
    resultadoDiv.classList.remove("completo");
  }
}