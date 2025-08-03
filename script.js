function checkCards() {
  const input = document.getElementById('input').value.trim();
  if (!input) return alert('Pega tarjetas para validar');

  fetch('api.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cards: input })
  })
  .then(res => res.json())
  .then(data => {
    const result = data.map(d => `${d.card} ➜ ${d.status}`).join('\n');
    document.getElementById('result').textContent = result;
  })
  .catch(() => {
    document.getElementById('result').textContent = 'Error al conectar con el servidor.';
  });
}