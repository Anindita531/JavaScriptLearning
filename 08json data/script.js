fetch('quotes.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(quotes => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = quotes.map(q => `
      <div class="quote-box">
        <p>"${q.q}"</p>
        <div class="author">— ${q.auth}</div>
      </div>
    `).join('');
  })
  .catch(error => console.error('Failed to fetch JSON:', error));
