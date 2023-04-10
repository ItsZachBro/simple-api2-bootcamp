async function fetchRandomQuote() {
  try {
      const response = await fetch('https://animechan.vercel.app/api/random');
      const quoteData = await response.json();
      return `${quoteData.quote} - ${quoteData.character}`;
  } catch (error) {
      console.error('Error fetching quote:', error);
      return 'Failed to fetch quote';
  }
}

async function generateQuote() {
  const randomQuote = await fetchRandomQuote();
  document.getElementById('quote').innerText = randomQuote;
}

generateQuote();
