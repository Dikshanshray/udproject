document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loveForm');
  const resultDiv = document.getElementById('result');
  const container = document.querySelector('.container');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    // Randomize left position and animation duration
    heart.style.left = Math.random() * 90 + '%';
    heart.style.animationDuration = (4 + Math.random() * 2) + 's';
    heart.style.opacity = 0.6 + Math.random() * 0.4;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }

  function showResult(percent, name1, name2) {
    resultDiv.innerHTML = `<span>${name1} &amp; ${name2}: <strong>${percent}%</strong> 💘</span>`;
    resultDiv.classList.add('show');
    // Spawn hearts
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 150);
    }
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    if (!name1 || !name2) return;
    const percent = Math.floor(Math.random() * 100) + 1;
    resultDiv.classList.remove('show');
    setTimeout(() => {
      showResult(percent, name1, name2);
    }, 300);
  });
});
