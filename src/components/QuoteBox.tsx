// src/components/QuoteBox.tsx
import React, { useEffect, useState } from 'react';
import './QuoteBox.css';

interface Quote {
  content: string;
  author: string;
}

const QuoteBox: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    await new Promise(res => setTimeout(res, 1000)); // Simulate delay
    setQuote({
      content: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    });
    setLoading(false);
  };

  const copyToClipboard = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.content}" — ${quote.author}`);
      alert('Quote copied to clipboard!');
    }
  };

  const shareQuote = async () => {
    if (navigator.share && quote) {
      try {
        await navigator.share({
          title: "Inspirational Quote",
          text: `"${quote.content}" — ${quote.author}`,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert("Web Share API not supported in your browser.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      {loading ? (
        <p>Loading...</p>
      ) : quote ? (
        <>
          <p className="quote">“{quote.content}”</p>
          <p className="author">— {quote.author}</p>
          <div className="buttons">
            <button onClick={fetchQuote}>New Quote</button>
            <button onClick={copyToClipboard}>Copy</button>
            <button onClick={shareQuote}>Share</button>
          </div>
        </>
      ) : (
        <p style={{ color: 'red' }}>⚠️ Failed to load quote.</p>
      )}
    </div>
  );
};

export default QuoteBox;
