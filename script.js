function toggleInfo() {
  var conceptos = document.getElementById("conceptos");
  var toggleButton = document.getElementById("toggleInfo");

  if (conceptos.style.display === "none" || conceptos.style.display === "") {
    conceptos.style.display = "block";
    toggleButton.textContent = "Ocultar Conceptos";
  } else {
    conceptos.style.display = "none";
    toggleButton.textContent = "Mostrar Conceptos";
  }
}

function calcularPandeo() {
  var moduloE = parseFloat(document.getElementById("moduloE").value);
  var momentoI = parseFloat(document.getElementById("momentoI").value);
  var longitudL = parseFloat(document.getElementById("longitudL").value);
  var factorK = parseFloat(document.getElementById("factorK").value);

  if (!isNaN(moduloE) && !isNaN(momentoI) && !isNaN(longitudL) && !isNaN(factorK)) {
    var cargaPandeo = (Math.PI ** 2 * moduloE * momentoI) / (factorK * longitudL) ** 2;

    document.getElementById("resultado").innerHTML = "La carga crítica de pandeo es: " + cargaPandeo.toFixed(2);

    // Crear un gráfico de barras para representar las variables
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Módulo de Elasticidad (E)', 'Momento de Inercia (I)', 'Longitud Efectiva (L)', 'Factor de Longitud Efectiva (K)'],
        datasets: [{
          label: 'Valor de las Variables',
          data: [moduloE, momentoI, longitudL, factorK],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  } else {
    alert("Por favor, ingrese valores válidos para todas las variables.");
  }
}

function resetear() {
  document.getElementById("moduloE").value = "";
  document.getElementById("momentoI").value = "";
  document.getElementById("longitudL").value = "";
  document.getElementById("factorK").value = "";
  document.getElementById("resultado").innerHTML = "";
  // Eliminar el gráfico
  document.getElementById("grafico").innerHTML = '<canvas id="myChart"></canvas>';
}
