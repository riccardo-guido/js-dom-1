const powerButton = document.getElementById("power-button");
const imgEl = document.getElementById("img-element");


powerButton.addEventListener('click', function() {
    if (powerButton .textContent.includes('Accendi')) {
      imgEl.src = './img/yellow_lamp.png';
      powerButton.textContent = 'Spegni';
    } else {
      imgEl.src = './img/white_lamp.png';
      powerButton.textContent = 'Accendi';
    }
  });


