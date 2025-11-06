import { useEffect, useState } from 'react';

// Ensure no double slashes in URLs by trimming any trailing slash from API
const API = (import.meta.env.VITE_API_URL || '');

export default function Weather() {
  const [city, setCity] = useState('Hyderabad');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (chosenCity = city) => {
    try {
      setLoading(true); setError(null); setData(null);
      const res = await fetch(`${API}/api/weather?city=${encodeURIComponent(chosenCity)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to fetch weather');
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(city); }, []);

  return (
    <div className="section">
      <h3 className="heading">Weather</h3>
      <p className="subtle"> Enter a City Name</p>
      <div className="row" style={{marginTop: '.5rem'}}>
        <input className="input" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city (e.g., Hyderabad)" />
        <button className="button" onClick={() => fetchWeather(city)} disabled={loading}>{loading ? 'Loading...' : 'Get Weather'}</button>
      </div>
      <hr className="sep" />
      {error && <div className="error">⚠️ Enter a valid city</div>}
      {data && (
        <div className="card">
          <div className="kpi">{data.temp !== null ? Math.round(data.temp) + '°C' : 'N/A'}</div>
          <div style={{marginTop: '.25rem'}}>{data.desc}</div>
          <div className="subtle" style={{marginTop: '.5rem'}}>City: {data.city}</div>
        </div>
      )}
    </div>
  );
}
