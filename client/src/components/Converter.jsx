import { useState } from 'react';

const API = (import.meta.env.VITE_API_URL || '')

export default function Converter() {
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const convert = async () => {
    try {
      setLoading(true); setError(null); setResult(null);
      const res = await fetch(`${API}/api/currency?amount=${encodeURIComponent(amount)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to convert currency');
      setResult(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <h3 className="heading">Currency Converter (INR)</h3>
      <p className="subtle">Convert INR to USD & EUR using live rates.</p>
      <div className="row" style={{marginTop: '.5rem'}}>
        <input className="input" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount in INR" />
        <button className="button" onClick={convert} disabled={loading}>{loading ? 'Converting...' : 'Convert'}</button>
      </div>
      <hr className="sep" />
      {error && <div className="error">⚠️ {error}</div>}
      {result && (
        <div className="card">
          <div>USD: <strong>{result.usd}</strong></div>
          <div>EUR: <strong>{result.eur}</strong></div>
        </div>
      )}
    </div>
  );
}
