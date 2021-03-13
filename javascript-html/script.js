function getSpoons(cupQnt) {
  return 14 * cupQnt / 7;
}

function getWater(cupQnt, cupSize) {
  if (cupQnt > 1) {
    return 14.285714285714 * cupSize * cupQnt / 100;
  } else {
    return cupSize / 7;
  }
}

function getMilk(cupQnt, cupSize) {
  if (cupQnt > 1) {
    return 85.714285714286 * cupSize * cupQnt / 100;
  } else {
    return cupSize - getWater(cupQnt, cupSize);
  }
}

function handleSubmit(e) {
  const numOfGlasses = document.querySelector('#numOfGlasses').value;
  const glassVolume = document.querySelector('#glassVolume').value;

  document.querySelector("#receita").innerHTML = `
    <h2>Ingredientes</h2><br>
    <p>[+]${getSpoons(numOfGlasses).toFixed(0)} colheres de sopa de pó de capuccino.</p>
    <p>[+] ${getWater(numOfGlasses, glassVolume).toFixed(0)}ml de água.</p>
    <p>[+] ${getMilk(numOfGlasses, glassVolume).toFixed(0)}ml de leite.</p>
    <h2>Modo de Preparo:</h2><br>
    <p>[!] Esquente ${getWater(numOfGlasses, glassVolume).toFixed(0)}ml de água (sem deixar ferver!).</p>
    <p>[!] Adicione ${getSpoons(numOfGlasses).toFixed(0)} colheres (de sopa) de pó de capuccino e misture bem.</p>
    <p>[!] Pegue essa mistura e coloque na geladeira, até que esfrie.</p>
    <p>[!] Após esfriar, coloque no liquidificador e bata junto com ${getMilk(numOfGlasses, glassVolume).toFixed(0)}ml de leite.</p>
    <p>[!] E pronto, seu capuccino gelado está pronto para beber!!</p>
    <h2>OBS:</h2><br>
    <p>[+] O liquidificador deixa mais cremoso</p>
    <p>[+] Use canudo de metal, bambu, madeira e papel. Temos que salvar as tartaruguinhas SZ.</p>
    <p>[!] Receita by: Rafaelvis Presley!</p>

  `;
  document.getElementById("reset").addEventListener("click", clearOnReset);

  function clearOnReset(e) {
    document.querySelector("#receita").innerHTML = "";
  }

}