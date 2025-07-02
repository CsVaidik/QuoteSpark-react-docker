import React from 'react';
import QuoteBox from './components/QuoteBox';

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>🌟 Random Quote Generator</h1>
      <QuoteBox />
    </div>
  );
};

export default App;
