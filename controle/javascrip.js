document.addEventListener('DOMContentLoaded', function() {
    const svg = document.querySelector('svg');
    const percentageText = document.querySelector('.percentage');
  
    svg.addEventListener('click', function() {
      // Solicita dados ao servidor Python
      fetch('/dados')
        .then(response => response.json())
        .then(data => {
          // Atualize o gráfico SVG com os novos dados
          percentageText.textContent = data.descricao;
          const novoValor = data.valor; // Supondo que você obtenha um novo valor
          const novoDasharray = `${novoValor}, 100`;
          svg.querySelector('.circle').setAttribute('stroke-dasharray', novoDasharray);
        });
    });
  });
  