import { useState } from 'react';

// Ensure no double slashes in URLs by trimming any trailing slash from API
const API = (import.meta.env.VITE_API_URL || '');

export default function Quotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getQuote = async () => {
    try {
      setLoading(true); setError(null); setQuote('');
      const url = `${API}/api/quote`;
      console.log('Fetching quote from:', url);
      const res = await fetch(url);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to get quote');
      setQuote(json.quote);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <h3 className="heading">Motivational Quote</h3>
      <div className="row" style={{marginTop: '.5rem'}}>
        <button className="button" onClick={getQuote} disabled={loading}>{loading ? 'Fetching...' : 'Get Quote'}</button>
        <button className="button secondary" onClick={() => setQuote('')}>Clear</button>
      </div>
      <hr className="sep" />
      {error && <div className="error">⚠️ {error}</div>}
      {quote && <div className="card">“{quote}”</div>}
    </div>
  );
}
