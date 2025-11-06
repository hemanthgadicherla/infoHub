import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Converter from './components/Converter';
import Quotes from './components/Quotes';

export default function App() {
  const [tab, setTab] = useState('weather');

  return (
    <div className="container">
      <header style={{marginBottom: '1rem'}}>
        <h1 className="heading">InfoHub — ByteXL Challenge by Hemanth</h1>
        <p className="subtle">Three utilities: Weather, Currency, Quotes. </p>
      </header>

      <div className="tabs">
        <button className={`tab ${tab==='weather'?'active':''}`} onClick={() => setTab('weather')}>Weather</button>
        <button className={`tab ${tab==='convert'?'active':''}`} onClick={() => setTab('convert')}>Converter</button>
        <button className={`tab ${tab==='quotes'?'active':''}`} onClick={() => setTab('quotes')}>Quotes</button>
      </div>

      <main className="grid">
        {tab === 'weather' && <Weather />}
        {tab === 'convert' && <Converter />}
        {tab === 'quotes' && <Quotes />}
      </main>

    </div>
  );
}
